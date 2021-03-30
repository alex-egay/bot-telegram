module.exports = {
  apps: [{
    name: 'telegrambot',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '',
      key: '~/Documents/Projects/bot/nodetelegram.pem',
      ref: 'origin/master',
      repo: 'git@github.com:al-vorotov/telegram-bot.git',
      path: '/home/ubuntu/telegram-bot',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
};