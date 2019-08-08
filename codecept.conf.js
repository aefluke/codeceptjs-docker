exports.config = {
    tests: './test/*_test.js',
    output: './output',
    helpers: {
        Puppeteer: {
            chrome: {
                args: ['--no-sandbox', '--window-size=1920,960'],
            },
            url: 'http://automationpractice.com/',
            show: true,
            windowSize: '1920x960',
            waitForTimeout: 3000
        }
    },
    include: {
        I: './steps_file.js',
        homePage: './pages/home.js',
    },
    bootstrap: null,
    mocha: {},
    name: 'codeceptjs-docker'
}