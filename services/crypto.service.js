const { createCipheriv, createDecipheriv, randomBytes, createHash } = require('crypto');

const ENCRYPTION_KEY = createHash('sha256').update(String(process.env.SESSION_SECRET)).digest('base64').substr(0, 32);
const IV_LENGTH = 16;

class CryptoService {
    static encrypt(text) {
        const iv = randomBytes(IV_LENGTH);

        const cipher = createCipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
        let encrypted = cipher.update(text);

        encrypted = Buffer.concat([encrypted, cipher.final()]);

        return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
    }

    static decrypt(text) {
        const textParts = text.split(':');
        const iv = new Buffer(textParts.shift(), 'hex');
        const encryptedText = new Buffer(textParts.join(':'), 'hex');
        const decipher = createDecipheriv('aes-256-cbc', new Buffer(ENCRYPTION_KEY), iv);
        let decrypted = decipher.update(encryptedText);

        decrypted = Buffer.concat([decrypted, decipher.final()]);

        return decrypted.toString();
    }
}

module.exports = CryptoService;
