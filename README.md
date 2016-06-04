
# win-term

**Windows terminal detection.**

Currently supports: `cmd`, `cmder`, `conemu`, `powershell`, `mingw`, and `cygwin`.

## Installation

```
npm install win-term
```

## Quickstart

```js

const term = require('win-term')

if (term)
    console.log(term)


```

## API

### `require('win-term')`

- **returns** `false` if the platform is not Windows or `stdout` is not a TTY; else returns the name of the terminal, one of: `'cmd'`, `'cmder'`, `'conemu'`, `'powershell'`, `'mingw'`, or `'cygwin'`.

## License
