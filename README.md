# javascript utils

[![Get package from npm](https://img.shields.io/npm/v/@erbelion/utils?color=blue)](https://www.npmjs.com/package/@erbelion/utils) [![Downloads](https://img.shields.io/npm/dt/@erbelion/utils)](https://www.npmjs.com/package/@erbelion/utils)

A collection of simple javascript utility functions for use in browser and node.js apps.

If you have any ideas what functions to add, feel free to open an [issue](https://github.com/erbelion/utils/issues).

## Install
**Yarn**
```
yarn add @erbelion/utils -D
```
**npm**
```
npm i @erbelion/utils -D
```

## Functions

[Time](#Time)

[Numbers](#Numbers)

[URLs](#URLs)

## Time

### sleep
[source](https://stackoverflow.com/a/39914235/5827880)

```
import { sleep } from '@erbelion/utils'

await sleep(5000)
// 5 seconds have elapsed
```

## Numbers

### compactNumber
[source](https://stackoverflow.com/a/74112691/5827880)

```
import { compactNumber } from '@erbelion/utils'

compactNumber(1555) // 1.6K
compactNumber(1555555) // 1.6M
compactNumber(1555555555) // 1.6B
compactNumber(1555555555555) // 1.6T
```
### random

```
import { random } from '@erbelion/utils'

random() // 0 or 1
random(69) // random from 0 to 69
random(69, 420) // random from 69 to 420
```

## URLs

### isUrl
[source](https://stackoverflow.com/a/43467144/5827880)

```
import { isUrl } from '@erbelion/utils'

isUrl('https://github.com/erbelion/utils#readme') // true
isUrl('bruh://man.com') // false
isUrl('broher') // false
```

### urlParams
[source](https://stackoverflow.com/a/979995/5827880)

```
import { urlParams } from '@erbelion/utils'

urlParams('https://github.com/erbelion/utils?a=1&b=2') // { a: 1, b: 2 }
urlParams('') // {}

// if no arg is given, then browser url is taken (window.location.href)
urlParams()
```