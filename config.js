// Lottery Web 配置文件
// 线上部署时修改此文件

const LotteryConfig = {
    apiUrl: window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5003'
        : 'https://ib2mpaf332fpamc4eotftwhoeq0hyghe.lambda-url.us-east-1.on.aws',
};

