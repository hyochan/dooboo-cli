# dooboo-cli

The cli tool for building faster app with [Expo](http://expo.io) and [Expo Router](https://expo.github.io/router).

[![CI](https://github.com/hyochan/dooboo-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/hyochan/dooboo-cli/actions/workflows/ci.yml)
[![deploy pkg](https://github.com/hyochan/dooboo-cli/actions/workflows/deploy.yml/badge.svg)](https://github.com/hyochan/dooboo-cli/actions/workflows/deploy.yml)
[![Npm Version](http://img.shields.io/npm/v/dooboo.svg?style=flat-square)](https://npmjs.org/package/dooboo)
[![Downloads](http://img.shields.io/npm/dm/dooboo.svg?style=flat-square)](https://npmjs.org/package/dooboo)
![License](http://img.shields.io/npm/l/dooboo.svg?style=flat-square)
[![Greenkeeper badge](https://badges.greenkeeper.io/hyochan/dooboo-cli.svg)](https://greenkeeper.io/)

## Announcement

The new CLI tool, dooboo, is now available and can be used with the [npx](https://docs.npmjs.com/cli/commands/npx) command as shown.
```sh
npx dooboo init
```

We've decided to streamline our project development and focus our efforts on a single codebase and tool, Expo :rocket:. Given that Expo provides extensive support for Android, iOS, and web platforms, we see it as the most effective solution for our requirements. As a result, we're planning to deprecate our React Native and React projects :tada:. You can learn more about Expo [here](https://expo.io).

In addition, we're shifting our approach with the [`dooboo-cli`](https://www.npmjs.com/package/dooboo-cli). We're no longer maintaining the global installation of `dooboo-cli` and are instead focusing solely on its package accessible through `npx`. This move ensures more streamlined code execution and reduces potential compatibility issues.

## Stacks used

- [react-native](https://github.com/facebook/react-native)
- [expo-router](https://expo.github.io/router)
- [emotion](https://emotion.sh)
- [dooboo-ui](https://github.com/hyochan/dooboo-ui)
- [jest](https://github.com/facebook/jest)
- [react-native-testing-library](https://github.com/callstack/react-native-testing-library)
- [typescript](https://github.com/Microsoft/TypeScript)
- [ts-jest](https://github.com/kulshekhar/ts-jest)
- [prettier](https://prettier.io)
- [react-native-web](https://github.com/necolas/react-native-web)
- [expo-localization](https://docs.expo.dev/versions/latest/sdk/localization)

## Quick News

- In default, [dooboo-ui](https://github.com/hyochan/dooboo-ui) ui framework is preinstalled in the project. Hope you like it 🧡.

## Usage

No installation required.

```sh
npx dooboo init
```

### More commands
```
  Usage: dooboo [source file]

  Options:
    -V, --version        output the version number
    -h, --help           output usage information

  Commands:
    init            Create project from dooboo boilerplate.
    start           Run the project
    test            Run all tests in your project.
    page <c>        Generate page component in `app` directory. The file name is converted
                    to kebab-case from PascalCase which is user input.
    ui <c>          Generate ui component.
    api <c>         Generate file for api call format.
    provider <c>    generate provider file to use context api
```

## Preview

![image](https://user-images.githubusercontent.com/27461460/248854241-87b90313-2527-4975-aa3b-3b0858977ae6.png)

## Contribution

```sh
npm run link
```

### When recompiling
```sh
npm uninstall -g dooboo
npm run link
```

- [Expo Router Starter](https://github.com/hyochan/expo-router-starter)
