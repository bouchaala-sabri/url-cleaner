const cleanUrl = require('../src/index');

test('removes unwanted parameters', () => {
    const url = 'https://example.com?utm_source=test&param=keep&gclid=abc';
    const cleaned = cleanUrl(url);
    expect(cleaned).toBe('https://example.com/?param=keep');
});
