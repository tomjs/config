import path from 'node:path';
import fs from 'fs-extra';
import unionBy from 'lodash/unionBy';
import simpleGit from 'simple-git';
import { PACKAGES_PATH, ROOT_PATH } from '../utils';

async function run() {
  const git = simpleGit(ROOT_PATH);
  const status = await git.status();

  // 无修改内容不处理
  if (status.files.length === 0) {
    return;
  }

  // 检查修改的模块
  let modules = status.files
    .filter(s => s.path.startsWith('packages/'))
    .map(s => s.path.split('/')[1]);

  modules = unionBy(modules);

  // 无修改模块
  if (modules.length === 0) {
    await git.add('.');
    await git.commit('chore: release');
    return;
  }

  const versions: string[] = [];
  modules.forEach(module => {
    const pkgPath = path.join(PACKAGES_PATH, module, 'package.json');
    const { version } = fs.readJSONSync(pkgPath);
    versions.push(`${module}@${version}`);
  });

  await git.add('.');
  await git.commit(`chore: release ${versions.join(',')}`);
  await git.push();
}

run().then();
