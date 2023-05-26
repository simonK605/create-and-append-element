# create-and-append-element
> With this package you can create what you want and append it where you want.

This is my first package, hope it will be helpful. :heart:

## Install
Install with [npm](https://www.npmjs.com/):
```sh
$ npm install create-and-append-element
```

## Usage
```ts
import createAndAppendElement from 'create-and-append-element';

// createAndAppendElement('tagName', whereToAppend, 'class', { attribute: value })

const link = createAndAppendElement('a', document.body, 'link', {
    href: 'https://url.com',
    // attributes...
});

const img = createAndAppendElement('img', link, 'image', {
    src: 'https://image.png',
    wdth: 500
});
```

## About
<details>
<summary><strong>Contributing</strong></summary>
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/simonK605/create-and-append-element/issues/new).
</details>

<br>

### Author
**Simon Karapetyan**
* [LinkedIn Profile](https://www.linkedin.com/in/simon-karapetyan-b048a61b5/)
* [GitHub Profile](https://github.com/simonK605)