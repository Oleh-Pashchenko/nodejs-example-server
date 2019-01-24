const { expect } = require('chai');
const { encrypt, decrypt } = require('../services/crypto.service');

describe('Crypto Service methods', () => {
    it('should be encrypt and decrypt', async (done) => {
        const encryptTest = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

        const encrypted = encrypt(encryptTest);
        const decrypted = decrypt(encrypted);

        expect(decrypted).to.equal(encryptTest);
        done();
    });
});
