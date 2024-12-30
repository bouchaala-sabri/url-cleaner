# URL Cleaner

A lightweight library to clean URLs by removing tracking parameters like `utm_source`, `gclid`, `fbclid`, and many more.

## Features

- Removes unwanted tracking parameters from URLs.
- Keeps all other query parameters intact.
- Simple and easy-to-use API.

## Installation

Install URL Cleaner using npm:

```bash
npm install url-cleanerr
```

## Usage

Import the library and use it to clean URLs:

```javascript
const cleanUrl = require('url-cleanerr');

const url = 'https://example.com?utm_source=test&param=keep&gclid=abc';
const cleaned = cleanUrl(url);

console.log(cleaned); // Output: https://example.com/?param=keep
```

## Parameters Removed

The library removes the following tracking parameters:

- `utm_source`, `utm_medium`, `utm_campaign`, `gclid`, `fbclid`, and many more.
- For a full list, check the [source code](src/index.js).

## Testing

Run tests to ensure the library works as expected:

```bash
npm test
```

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests on [GitHub](https://github.com/bouchaala-sabri/url-cleanerr).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
