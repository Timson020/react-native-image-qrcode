![Travis (.org)](https://img.shields.io/travis/Timson020/react-native-image-qrcode.svg)
![npm](https://img.shields.io/npm/v/react-native-image-qrcode.svg)
![npm](https://img.shields.io/npm/dw/react-native-image-qrcode.svg)
![GitHub issues](https://img.shields.io/github/issues/Timson020/react-native-image-qrcode.svg)

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Timson020/react-native-image-qrcode.git/pulls)
![npm](https://img.shields.io/npm/l/react-native-image-qrcode.svg)

# react-native-image-qrcode

## Feature

- bar-code
- qr-code container-style
- qr-code-inside-image-container-style

## Support

- [X] IOS && Android
- [X] render the qrcode
- [X] add the img
- [X] size the img size

## Props

|Name|Default|Type|Description|
|:--:|:--:|:--:|:--:|
|__size__|150|__number__||
|__value__| https://github.com/Timson020/ |__string__|string value|
|__bgColor__|black|__string__|color|
|__fgColor__|white|__string__|color|
|__imgUrl__|''|__string__|url string|
|__imgSize__|0.4|__number__|percentage, don't bigger than 1|


## Install

```
npm install react-native-image-qrcode -S
```

## Useage

```
import QRCode from 'react-native-image-qrcode'

<QRCode value="https://github.com/Timson020/" size="150" imgUrl="https://avatars3.githubusercontent.com/u/10054336?s=460&v=4" />
```

## Contributer

### [qr.js](https://github.com/lifthrasiir/qr.js)
