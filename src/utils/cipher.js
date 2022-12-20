import CryptoJS, { AES, MD5 } from 'crypto-js'

const AESKey = 'BoretechAdminAESKey'
const iv = 'BoretechAdminAESIv'

const { encrypt, decrypt } = AES
const CBC = CryptoJS.mode.CBC
const Pkcs7 = CryptoJS.pad.Pkcs7
const Utf8 = CryptoJS.enc.Utf8
const Base64 = CryptoJS.enc.Base64

// AES and Base64
export const encryptByAES = (origin) => {
  const encrypted = encrypt(origin, AESKey, { iv, mode: CBC, padding: Pkcs7 }).toString()
  return Base64.stringify(Utf8.parse(encrypted))
}

export const decryptByAES = (encrypted) => {
  const encryptedStr = Base64.parse(encrypted).toString(Utf8)
  return decrypt(encryptedStr, AESKey, { iv, mode: CBC, padding: Pkcs7 }).toString(Utf8)
}

export const encryptByMd5 = (text) => MD5(text).toString()

export default {
  encryptByAES,
  decryptByAES,
  encryptByMd5
}
