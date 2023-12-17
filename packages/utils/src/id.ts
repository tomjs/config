/**
 * Generate a uuid of 36 string length
 */
export function uuid36() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

/**
 * Generate a uuid of 32 string length
 */
export function uuid() {
  return uuid().replace(/-/g, '');
}

/**
 * Generate a uuid of 32 string length
 */
export const uuid32 = uuid;
