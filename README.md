# is-image-filename

A webpack compatible version of [`is-image`](https://www.npmjs.com/package/is-image)

[![Coverage Status](https://coveralls.io/repos/github/kellyrmilligan/is-image-filename/badge.svg?branch=master)](https://coveralls.io/github/kellyrmilligan/is-image-filename?branch=master)

> Check if a file name is an image

It just checks the extension of the filename you give it

## Install

```
$ npm install is-image-filename
```

## Usage

```js
const isImage = require('is-image-filename');

isImage('src/unicorn.png');
//=> true

isImage('src/unicorn.txt');
//=> false
```

## Related
- [`is-image`](https://www.npmjs.com/package/is-image) - Check if a filepath is an image
- [image-extensions](https://github.com/arthurvr/image-extensions) - List of image extensions
- [file-extension](https://www.npmjs.com/package/file-extension) - get the file extension

## License

MIT
