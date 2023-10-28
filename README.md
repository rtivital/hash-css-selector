# hash-css-selector

A function to hash CSS selectors, can be used with postcss-modules to generate short static unique class names.

## Usage

`hashCSSSelector` returns a 8 character long hash of the given string. The function is deterministic, so the same input will always result in the same output.

```tsx
import { hashCSSSelector } from 'hash-css-selector';

hashCSSSelector('test-class'); // -> 'm-a530cc7d'
hashCSSSelector('another-test-class'); // -> 'm-c43ac187'

// Default prefix is 'm'
// Customize prefix by passing a second argument
hashCSSSelector('test-class', 'my-prefix'); // -> 'my-prefix-a530cc7d'
```

## Usage with postcss-modules

With default `m` prefix:

```tsx
import { generateScopedName } from 'hash-css-selector';

postcss([
  require('postcss-modules')({
    generateScopedName: generateScopedName,
  }),
]);
```

With custom prefix:

```tsx
import { createGenerateScopedName } from 'hash-css-selector';

postcss([
  require('postcss-modules')({
    generateScopedName: createGenerateScopedName('custom-prefix'),
  }),
]);
```

## License

MIT
