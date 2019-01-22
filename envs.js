const { readFileSync } = require('fs');
const { config } = require('dotenv');

config();

const requiredEnv = readFileSync('.env.example', 'utf-8')
    .split('\n')
    .map(item => item.split('=')[0])
    .filter(env => env !== '');

const unsetEnv = requiredEnv.filter(env => (!(typeof process.env[env] !== 'undefined') || !(process.env[env] !== '')));

if (unsetEnv.length > 0) {
    throw new Error(`Required ENV variables are not set: [${unsetEnv.join(', ')}]`);
}
