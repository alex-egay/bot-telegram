process.on('uncaughtException', (err) => {
  console.log('There was an error', err);
  process.exit(1);
});
require('./bot')();