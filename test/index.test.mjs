import cleanUrl from '../src/index.mjs';

test('cleans URL with tracking parameters (ESM)', () => {
    const url = 'https://example.com?utm_source=test&param=keep&gclid=abc';
    const result = cleanUrl(url);
    expect(result).toBe('https://example.com/?param=keep');
});
