import CryptoJS from 'crypto-js';

const CryptoSecret = '__CryptoJS_Secret__';

/**
 * 加密数据
 * @param data - 数据
 */
export function encrypto(data: any) {
  const newData = JSON.stringify(data);
  return CryptoJS.AES.encrypt(newData, CryptoSecret).toString();
}

/**
 * 解密数据
 * @param cipherText - 密文
 */
export function decrypto(cipherText: string) {
  const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  if (originalText) {
    return JSON.parse(originalText);
  }
  return null;
}
/**
 * 获取uuid
 */
export function getUUID() {
  if (typeof crypto === 'object') {
    if (typeof crypto.randomUUID === 'function') {
      // https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID
      return crypto.randomUUID();
    }
    if (typeof crypto.getRandomValues === 'function' && typeof Uint8Array === 'function') {
      // https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
      const callback = (c: any) => {
        const num = Number(c);
        // eslint-disable-next-line no-bitwise
        return (num ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (num / 4)))).toString(16);
      };
      return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, callback);
    }
  }
  let timestamp = new Date().getTime();
  let perforNow = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    let random = Math.random() * 16;
    if (timestamp > 0) {
      // eslint-disable-next-line no-bitwise
      random = (timestamp + random) % 16 | 0;
      timestamp = Math.floor(timestamp / 16);
    } else {
      // eslint-disable-next-line no-bitwise
      random = (perforNow + random) % 16 | 0;
      perforNow = Math.floor(perforNow / 16);
    }

    // eslint-disable-next-line no-bitwise
    return (c === 'x' ? random : (random & 0x3) | 0x8).toString(16);
  });
}
