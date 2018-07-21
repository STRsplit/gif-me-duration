# gif-me-duration
Promise-based gif duration module.

## Install
```bash
npm i gif-me-duration
```
## Notes
Essentially, this module just uses a very small part of [gify-parse](https://github.com/JonasHavers/node-gify-parse) allowing users to get the duration for a single gif url or an array of gif urls.

### Updates:
  - 1.0.6: simplified img to binary process
  - 1.0.4: allows single or array of gif urls.

## Authors

  - [Eugene Shifrin](https://github.com/eshifrin)
  - [Steven Reed](https://github.com/STRsplit)

## Table of Contents

1. [How to Use](#howto)
1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Contributing](#contributing)
1. [Acknowledgments](#acknowledgments)


## Usage
```bash
npm i gif-me-duration
```
### How to Use

```js
// Require or import the package (name it anything you'd like) wherever you'd like to use it:
const gifDurations = require('gif-me-duration');

// Function takes in a single url or array of gif urls
let gifUrls = [
  'http://media2.giphy.com/media/FiGiRei2ICzzG/200.gif',
  'http://media0.giphy.com/media/feqkVgjJpYtjy/200.gif'
];

// Use an async function to await the results
const asyncExample = async () => {
  let result = await gifDurations(gifUrls);
  console.log(result);
}

// Or use .then promise chain to access results 
const promiseExample = () => {
  gifDurations(gifUrls)
  .then(results => console.log(results))
};
```

## Requirements
- Node ^7.6

## Contributing
This was intentionally made to be a very limited use, but if you would like to contribute please make a pull request with your work. Feel free to contact me and introduce yourself as well.

## Acknowledgments
- [axios](https://www.npmjs.com/package/axios) by [Nick Uraltsev](https://github.com/nickuraltsev) & [mzabriskie](https://github.com/mzabriskie) for gif request.
- [Jonas Havers](https://github.com/JonasHavers) - Jonas' [gify-parse](https://github.com/JonasHavers/node-gify-parse) based on [Ryan French's](https://github.com/rfrench/) [gify](https://github.com/rfrench/gify) is the core of the module, we just encapsulated it for a very specific need. 

