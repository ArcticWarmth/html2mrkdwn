# HTML2MRKDWN

Quick parsing of HTML to [slack's mrkdwn](https://api.slack.com/reference/surfaces/formatting) for use with their API

## Installing

To install with NPM run
> `npm install html2mrkdwn`

## Usage

The parser is contained within the static `convert()` method. Two examples are showen below with both usage in es5 and CommonJS.

### Examples

es5

```js
import {html2mrkdwn} from 'html2mrkdwn';

console.log(html2mrkdwn.convert('<p>Hello World<p>'));
```

CommonJS

```js

const convert = require('html2mrkdwn');

console.log(convert.html2mrkdwn.convert('<p>Hello World</p>'));

```

## Quick Links
> [Contributing]()