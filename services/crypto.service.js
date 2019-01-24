const { createCipher, createDecipher } = require('crypto');

class CryptoService {
    static encrypt(text, key) {
        const cipher = createCipher('aes-256-cbc', key);
        let crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    }

    static decrypt(text, key) {
        const decipher = createDecipher('aes-256-cbc', key);
        let decrypted = decipher.update(text, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
    }
}

module.exports = CryptoService;
