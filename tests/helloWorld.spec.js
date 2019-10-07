const start = require('../src/helloWorld').default;

test('Testing start function', () => {
    expect(start('John')).toStrictEqual('Hello John')
})