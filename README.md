# Whatsup Document Title

[![npm version](https://badge.fury.io/js/whatsup-document-title.svg)](https://www.npmjs.com/package/whatsup-document-title) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/whatsup-document-title/blob/master/LICENSE) &bull; [![Node.js CI](https://github.com/andrelmlins/whatsup-document-title/workflows/Node.js%20CI/badge.svg)](https://github.com/andrelmlins/whatsup-document-title/actions?query=workflow%3A%22Node.js+CI%22)

Page title manager for whatsup.

## Installation

```
npm i whatsup-document-title
// OR
yarn add whatsup-document-title
```

## Demo

Local demo:

```
git clone https://github.com/andrelmlins/whatsup-document-title.git
cd whatsup-document-title
npm install && npm rum dev
```

## Examples

An example of how to use the library:

```tsx
import { Fractal, conse } from 'whatsup';
import WhatsupDocumentTitle from 'whatsup-document-title';

export class App extends Fractal<JSX.Element> {
  readonly title = conse('Page title');

  *whatsUp() {
    while (true) {
      yield (
        <>
          <WhatsupDocumentTitle title={yield* this.title}>
            <input
              value={yield* this.title}
              onInput={(e) => this.title.set(e.target.value)}
            />
          </WhatsupDocumentTitle>
        </>
      );
    }
  }
}
```

## Properties

Component props:

| Prop  | Type   | Description               |
| ----- | ------ | ------------------------- |
| title | string | Title showing in document |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/whatsup-document-title.png)](https://nodei.co/npm/whatsup-document-title/)

## License

Whatsup Document Title is open source software [licensed as MIT](https://github.com/andrelmlins/whatsup-document-title/blob/master/LICENSE).
