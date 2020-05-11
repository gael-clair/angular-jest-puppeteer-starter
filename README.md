# Angular + Jest + Puppeteer + Material + TailwindCSS starter<!-- omit in toc -->

<p> 
<a href="https://github.com/gael-clair/angular-jest-puppeteer-material-tailwindcss-starter/blob/master/LICENSE"><img src="https://img.shields.io/github/license/gael-clair/angular-jest-puppeteer-material-tailwindcss-starter" alt="License" /></a><br/>
<a href="https://github.com/gael-clair/angular-jest-puppeteer-material-tailwindcss-starter/issues"><img src="https://img.shields.io/github/issues/gael-clair/angular-jest-puppeteer-material-tailwindcss-starter" alt="Issues" /></a><br/>
<a href="https://codecov.io/gh/gael-clair/angular-jest-puppeteer-material-tailwindcss-starter">
  <img src="https://codecov.io/gh/gael-clair/angular-jest-puppeteer-material-tailwindcss-starter/branch/develop/graph/badge.svg" />
</a><br/>
<a href="https://github.com/gael-clair/angular-jest-puppeteer-material-tailwindcss-starter"><img src="https://github.com/gael-clair/angular-jest-puppeteer-material-tailwindcss-starter/workflows/angular-jest-puppeteer-material-tailwindcss-starter/badge.svg" /></a><br/>
</p>

## Table of Contents <!-- omit in toc -->

- [About this project](#about-this-project)
  - [Built with](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Build](#build)
    - [Development](#development)
    - [Unit tests](#unit-tests)
    - [End-To-End tests](#end-to-end-tests)
    - [Lint](#lint)
    - [Format](#format)
    - [Documentation](#documentation)
- [Continuous Integration](#continuous-integration)
  - [Workflow steps](#workflow-steps)
  - [Github configuration](#github-configuration)
  - [Checks on Pull Requests](#checks-on-pull-requests)
  - [Codecov configuration](#codecov-configuration)
- [Customization](#customization)
  - [Angular](#angular)
  - [UI Design](#ui-design)
    - [Material](#material)
    - [TailwindCSS](#tailwindcss)
  - [Unit tests with Jest](#unit-tests-with-jest)
  - [End-to-End tests with Jest and Puppeteer](#end-to-end-tests-with-jest-and-puppeteer)
  - [Style linting with Stylelint](#style-linting-with-stylelint)
  - [Formatting with Prettier](#formatting-with-prettier)
  - [Git hooks](#git-hooks)
  - [Documentation](#documentation)
  - [Dependencies](#dependencies)
    - [Added](#added)
    - [Removed (if project generated without _--minimal=true_ option)](#removed-if-project-generated-without---minimaltrue-option)

## About this project

This project is an Angular project using Jest instead of Karma, Puppeteer instead of Protractor, Angular Material and TailwindCSS. Moreover, formatting, style linting, documentation generation and git hooks (for linting) have been added to be more complete. This README explains all modifications made to initial Angular project.

### Built with

- [Node.js (Javascript Engine)](https://nodejs.org/)
- [Yarn v1 (Package Manager)](https://classic.yarnpkg.com/)
- [Angular (Frontend)](https://angular.io/)

## Getting Started

Before you begin we recommend you read about the basic building blocks that assemble a Mann application:

- Angular - Angular's [Official Website](https://angular.io/) is a great starting point. You can also use [Thinkster Popular Guide](http://www.thinkster.io/), and [Egghead Videos](https://egghead.io/).
- Node.js - Start by going through [Node.js Official Website](http://nodejs.org/) and this [StackOverflow Thread](http://stackoverflow.com/questions/2353818/how-do-i-get-started-with-node-js), which should get you going with the Node.js platform in no time.

### Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:

- Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
- Yarn (v1) - You're going to use the [Yarn Package Manager](http://bower.io/) to manage your packages and dependencies. Follow these [instructions](https://yarnpkg.com/getting-started/) to install Yarn.

### Installation

1.  Clone the repo

```git
$ git clone https://github.com/gael-clair/angular-jest-puppeteer-material-tailwindcss-starter.git YOUR_REPO_FOLDER
```

2.  Get into repo folder

```sh
$ cd YOUR_REPO_FOLDER
```

3.  Add your repo as origin

```git
$ git remote add origin YOUR_REPO_URL
```

4. Update project name in `package.json`

5. Use the init script:

```sh
$ yarn run init
```

6.  Install dependencies

```sh
$ yarn install
```

### Usage

#### Build

```sh
# build in dev mode
$ yarn build

# build in production mode
$ yarn build:prod
```

### Development

```sh
# start development server with live reload
$ yarn start
```

### Unit tests

```sh
# starts unit tests
$ yarn test

# starts unit tests with source/test files watch
$ yarn test:watch

# starts unit tests with coverage (reports in coverage/spec and report at reports/ut.xml)
$ yarn test:cov

# starts unit tests in debug mode
$ yarn test:debug

# starts unit tests in CI mode with coverage (reports in coverage/spec and report at reports/ut.xml)
$ yarn test:ci
```

### End-To-End tests

```sh
# starts E2E tests with an already running server
$ yarn e2e

# starts http server, starts E2E tests and shuts down server
$ yarn e2e:start

# starts E2E tests with an already running server and source/test files watch
$ yarn e2e:watch

# starts http server, starts E2E tests with coverage (coverage in coverage/e2e and report at reports/e2e.xml) and shuts down server
$ yarn e2e:cov

# starts E2E tests in debug mode with an already running server
$ yarn e2e:debug

# starts http server, starts E2E tests in CI mode with coverage (coverage in coverage/e2e and report at reports/e2e.xml) and shuts down server
$ yarn e2e:ci
```

### Lint

```sh
# lints source and test files
$ yarn lint

# lints source and test files and fixes errors if possible
$ yarn lint:fix

# lints source and test files and generate a report (report at reports/lint.xml)
$ yarn lint:ci

# lints style files
$ yarn lint:style

# lints style files and fixes errors if possible
$ yarn lint:style:fix

# lints style files and generate a report (report at reports/style.xml)
$ yarn lint:style:ci
```

### Format

```sh
# formats source and test files
$ yarn format
```

### Documentation

```sh
# generates project documentation (documenation in docs)
$ yarn doc
```

## Continuous Integration

The repo includes a [Github Action](https://github.com/features/actions) configuration for continuous integration (workflow file `.github/workflows/project.yml`) It is also integrated with [Codecov](https://codecov.io/) during workflow process.

### Workflow steps

- Install (with cache)
- Build
- Lint
- Unit tests
- Codecov upload result of unit tests
- End-to-End tests
- Codecov upload result of End-to-End tests
- Upload of coverage reports artifact
- Upload of test reports artifact
- Upload of build artifact

### Github configuration

To configure Codecov integration, you have to add one environment variables in `Repo Settings > Secrets > Add a new secret`

```properties
CODECOV_TOKEN = YOUR_CODECOV_REPO_TOKEN
```

### Checks on Pull Requests

To be sure to pass all checks before merging a Pull Request you should add required checks in `Repo Settings > Branches > Branch protection rules > Require status checks to pass before merging` :

- codecov/project/e2e-tests
- codecov/project/unit-tests
- checks: Checks (build, lint, tests)

### Codecov configuration

Codecov configuration is set using `codecov.yml` file with:

```yaml
coverage:
  status:
    project:
      default: false # deactivate project report
      unit-tests: # unit tests coverage settings
        target: 80%
        flags: unit
      e2e-tests: # end-to-end tests coverage value
        target: 65%
        flags: e2e
    patch: false # deactivate patch report

parsers:
  javascript:
    enable_partials: yes # activate partial line coverage in javascript files
```

## Customization

### Angular

This project is based on [Angular 9](https://angular.io/). The @angular/cli command used to generate this project is:

```sh
$ npx @angular/cli new starter --package-manager=yarn --routing=true --style=scss --minimal=true
```

### UI Design

#### Material

This project is using Material Design with [@angular/material](https://material.angular.io/) installed with:

```sh
$ yarn add @angular/material @angular/cdk hammerjs
```

#### TailwindCSS

[TailwindCSS](https://tailwindcss.com/) is used with Material to provide UI components and utilities.

1. Add tailwind dependencies:

```sh
$ yarn add -D tailwindcss postcss-loader postcss-scss postcss-import autoprefixer @angular-builders/custom-webpack @fullhuman/postcss-purgecss
```

2. Add tailwind directives at the beginning of to `src/styles.scss`

```scss
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

3. Create or update `webpack.config.js` file to include a new rule:

```javascript
module.exports = {
  module: {
    rules: [
      // new rule to add
      {
        test: /\.scss$/,
        loader: 'postcss-loader',
        options: {
          ident: 'postcss',
          syntax: 'postcss-scss',
          plugins: () => [
            require('postcss-import'),
            require('tailwindcss'),
            require('@fullhuman/postcss-purgecss')({
              content: ['./src/**/*.html'],
              defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
            }),
            require('autoprefixer'),
          ],
        },
      },
    ],
  },
};
```

4. Update `angular.json` at `angular.json > projects > angular-jest-puppeteer-material-tailwindcss-starter > architect > build` and `angular.json > projects > angular-jest-puppeteer-material-tailwindcss-starter > architect > serve` with:

```json
({
  "build": {
    // update builder to let us extend webpack config
    "builder": "@angular-builders/custom-webpack:browser",
    "options": {
      "customWebpackConfig": {
        // add custom configuration path
        "path": "./webpack.config.js"
      }
    }
  }
},
{
  "serve": {
    // update builder to let us extend webpack config
    "builder": "@angular-builders/custom-webpack:dev-server",
    "options": {
      "customWebpackConfig": {
        // add custom configuration path
        "path": "./webpack.config.js"
      }
    }
  }
})
```

### Unit tests with Jest

Unit testing is based initially on the use of Karma/Jasmine but this project uses Jest instead. To add Jest:

1.  Create test folder for unit tests at project root:

```sh
$ mkdir -p "test/spec/src"
```

2.  Install Jest and related dependencies

```sh
$ yarn add -D jest jest-preset-angular jest-junit @types/jest
```

3.  Create file `test/spec/tsconfig.json` with:

```json
{
  "extends": "../../tsconfig.json", // update path to global typescript config
  "compilerOptions": {
    "outDir": "../../out-tsc/spec", // update path to root folder
    "types": ["node", "jest"] // switch jasmine to jest
  },
  "files": ["../../src/polyfills.ts"], // update path to polyfills and remove 'src/test.ts'
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

4.  Create `test/spec/jest.config.js` with:

```javascript
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('../../tsconfig');

module.exports = {
  rootDir: '../..',
  preset: 'jest-preset-angular', // activates preset
  verbose: true,
  setupFilesAfterEnv: ['./test/spec/setupJest.ts'], // loads additional config before tests
  coverageDirectory: './coverage/ut',
  collectCoverageFrom: ['src/app/**/*.ts'],
  globals: {
    'ts-jest': {
      tsConfig: './test/spec/tsconfig.json', // modifies default typescript config file location to use local one
    },
  },
  reporters: [
    'default',
    [
      'jest-junit', // adds reporter for unit tests for CI tools
      {
        suiteName: 'Unit tests',
        outputDirectory: './reports',
        outputName: 'ut.xml',
      },
    ],
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, { prefix: '<rootDir>/' }),
};
```

5.  Create file `test/spec/setupJest.ts` with:

```javascript
import 'jest-preset-angular';

Object.defineProperty(window, 'CSS', { value: null });
Object.defineProperty(window, 'getComputedStyle', {
  value: () => {
    return {
      display: 'none',
      appearance: ['-webkit-appearance'],
    };
  },
});

Object.defineProperty(document, 'doctype', {
  value: '<!DOCTYPE html>',
});
Object.defineProperty(document.body.style, 'transform', {
  value: () => {
    return {
      enumerable: true,
      configurable: true,
    };
  },
});
```

6.  Move all your spec files to `test/spec/src`

7.  Update tests scripts of `package.json` with:

```json
{
  "scripts": {
    "test": "jest --config ./test/spec/jest.config.js",
    "test:watch": "jest --config ./test/spec/jest.config.js --watch",
    "test:cov": "jest --config ./test/spec/jest.config.js --coverage ",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --config ./test/spec/jest.config.js --runInBand",
    "test:ci": "jest --config ./test/spec/jest.config.js --ci --runInBand --coverage"
  }
}
```

8. Update `angular.json` at `angular.json > projects > angular-jest-puppeteer-material-tailwindcss-starter > architect > lint` switching typescript config file for spec from `tsconfig.spec.json` to `test/spec/tsconfig.json`;

```json
{
  "lint": {
    "builder": "@angular-devkit/build-angular:tslint",
    "options": {
      "tsConfig": ["tsconfig.app.json", "test/spec/tsconfig.json", "e2e/tsconfig.json"],
      "exclude": ["**/node_modules/**"]
    }
  }
}
```

9.  If you generated the project without `--minimal=true`:

    1.  Some useless files could be deleted:

    ```sh
    $ rm tsconfig.spec.json karma.conf.js src/test.ts
    ```

    2.  Remove Karma dependencies:

    ```sh
    $ yarn remove karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter
    ```

    3.  Remove Angular test target in `angular.json > projects > angular-jest-puppeteer-material-tailwindcss-starter > architect > test`

### End-to-End tests with Jest and Puppeteer

1.  Install Jest, Puppeteer and related dependencies

```sh
$ yarn add -D jest jest-junit jest-puppeteer jest-puppeteer-istanbul puppeteer wait-on concurrently istanbul-instrumenter-loader remap-istanbul @types/expect-puppeteer @types/jest-environment-puppeteer @types/puppeteer @types/jest @angular-builders/custom-webpack
```

3.  Create E2E tests folder:

```sh
$ mkdir -p "test/e2e/src"
```

4.  Create `test/e2e/tsconfig.json` with:

```json
{
  "extends": "../../tsconfig.json", // update path to global typescript config
  "compilerOptions": {
    "outDir": "../../out-tsc/e2e", // update path to root folder
    "module": "commonjs",
    "target": "es5",
    "types": ["jest", "node", "puppeteer", "jest-environment-puppeteer", "expect-puppeteer"] // add jest and puppeteer types and remove jasmine types
  }
}
```

5.  Create `jest.config.js` file in `test/e2e` with:

```javascript
/* eslint-disable @typescript-eslint/no-var-requires */
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('../../tsconfig');

module.exports = {
  rootDir: '../..',
  preset: 'jest-puppeteer', // activates preset
  verbose: true,
  testMatch: ['**/test/e2e/**/*.e2e-spec.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  coverageDirectory: './coverage/e2e',
  coverageReporters: ['json'],
  setupFilesAfterEnv: ['jest-puppeteer-istanbul/lib/setup'], // loads additional config before tests for coverage
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'End-to-End tests',
        outputDirectory: './reports',
        outputName: 'e2e.xml',
      },
    ],
    'jest-puppeteer-istanbul/lib/reporter', // adds reporter for coverage
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, { prefix: '<rootDir>/' }),
};
```

6.  Create or update `webpack.config.js` file to include new rule:

```javascript
module.exports = {
  module: {
    rules: [
      // new rule to add
      {
        test: /\.(js|ts)$/,
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true },
        enforce: 'post',
        include: require('path').join(__dirname, '../../src/app'),
        exclude: [/\.(e2e|spec)\.ts$/, /node_modules/, /polyfills\.ts$/, /main\.ts$/],
      },
    ],
  },
};
```

7. Update (if not already updated with tailwind) `angular.json` at `angular.json > projects > angular-jest-puppeteer-material-tailwindcss-starter > architect > serve` with:

```json
{
  "serve": {
    // update builder to let us extend webpack config
    "builder": "@angular-builders/custom-webpack:dev-server",
    "options": {
      "customWebpackConfig": {
        // add custom configuration path
        "path": "./webpack.config.js"
      }
    }
  }
}
```

9. Update `angular.json` at `angular.json > projects > angular-jest-puppeteer-material-tailwindcss-starter > architect > lint` switching typescript config file for e2e from `e2e/tsconfig.json` to `test/e2e/tsconfig.json`;

```json
{
  "lint": {
    "builder": "@angular-devkit/build-angular:tslint",
    "options": {
      "tsConfig": ["tsconfig.app.json", "test/spec/tsconfig.json", "test/e2e/tsconfig.json"],
      "exclude": ["**/node_modules/**"]
    }
  }
}
```

10. Create test scripts in `package.json` to start a server and wait for server to start E2E tests (a remap is done with coverage to show coverage for original non transpiled code).

```json
{
  "scripts": {
    "e2e": "jest --config ./test/e2e/jest.config.js",
    "e2e:start": "concurrently --success first -k -c \"green,yellow\" -n \"Serve,Tests\" \"ng serve\" \"wait-on http-get://localhost:4200/ && jest --config ./test/e2e/jest.config.js\"",
    "e2e:watch": "jest --config ./test/e2e/jest.config.js --watch",
    "e2e:cov": "concurrently --success first -k -c \"green,yellow\" -n \"Serve,Tests\" \"ng serve\" \"wait-on http-get://localhost:4200/ && jest --config ./test/e2e/jest.config.js --coverage && remap-istanbul --input ./coverage/e2e/coverage-puppeteer-istanbul.json --type html --output ./coverage/e2e/html-report\"",
    "e2e:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --config ./test/e2e/jest.config.js --runInBand",
    "e2e:ci": "concurrently --success first -k -c \"green,yellow\" -n \"Serve,Tests\" \"ng serve --configuration=e2e\" \"wait-on http-get://localhost:4200/ && jest --config ./test/e2e/jest.config.js --ci --runInBand --coverage && remap-istanbul --input ./coverage/e2e/coverage-puppeteer-istanbul.json --type lcovonly --output ./coverage/e2e/lcov.info\""
  }
}
```

11. Move E2E tests files to `test/e2e/src`

12. Update `test/e2e/src/app.e2e-spec.ts` to use Puppeeter and Jest:

```typescript
describe('Home page', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:4200');
  });

  it('should be titled "Starter"', async () => {
    expect(await page.title()).toBe('Starter');
  });
});
```

13. If you generated project without `--minimal=true` you could delete some file and configuration:

    1.  Remove Angular e2e target in `angular.json > projects > angular-jest-puppeteer-material-tailwindcss-starter > architect > e2e`

    2.  Remove useless folder and files:

    ```sh
    $ rm -rf e2e
    ```

    3.  Remove Jasmine and Protractor dependencies:

    ```sh
    $ yarn remove jasmine-core jasmine-spec-reporter protractor @types/jasmine @types/jasminewd2
    ```

### Style linting with Stylelint

In order to add linting of style files (css and scss), [Stylelint](https://stylelint.io/) is used with some rules presets.

1.  Install Stylelint dependencies:

```sh
$ yarn add -D stylelint stylelint-config-sass-guidelines stylelint-junit-formatter stylelint-no-unsupported-browser-features stylelint-config-prettier stylelint-prettier
```

2.  Create Stylelint configuration `.stylelintrc.json` file with:

```json
{
  "extends": ["stylelint-prettier/recommended", "stylelint-config-sass-guidelines"],
  "plugins": ["stylelint-no-unsupported-browser-features"],
  "rules": {
    "plugin/no-unsupported-browser-features": [
      true,
      {
        "severity": "warning"
      }
    ]
  }
}
```

### Formatting with Prettier

1.  Install Prettier and dependencies to deal with Typescript and linters:

```sh
$ yarn add -D prettier tslint-config-prettier tslint-plugin-prettier stylelint-config-prettier stylelint-prettier
```

2.  Create Prettier configuration file `.prettierrc` with:

```json
{
  "singleQuote": true,
  "trailingComma": "all",
  "endOfLine": "lf",
  "printWidth": 120,
  "tabWidth": 2
}
```

3.  Add `tslint-config-prettier` preset and `tslint-plugin-prettier` plugin to `tslint.json` to prevent TSLint to use rules that Prettier will take care of:

```json
{
  "extends": ["tslint:recommended", "tslint-plugin-prettier", "tslint-config-prettier"],
  "rules": {
    "prettier": true
  }
}
```

### Git hooks

One pre-commit git hook is activated with [Husky](https://github.com/typicode/husky) to call [lint-staged](https://github.com/okonet/lint-staged) to format and lint files to be commited. If one operation fails commit is canceled. One commit-msg git hook is set to let [@commitlint/cli](https://commitlint.js.org/) lint commit message to ensure that it follows conventional-changelog format.

To configure git hooks you have to:

1.  Add husky, commitlint and cz-conventional-changelog dependencies:

```sh
yarn add -D husky lint-staged @commitlint/cli @commitlint/config-conventional cz-conventional-changelog
```

2.  Add cz-conventional-changelog configuration to `package.json`:

```json
"config": {
  "commitizen": {
    "path": "cz-conventional-changelog"
  }
}
```

3.  Add commitlint configuration to `package.json`:

```json
"commitlint": {
  "extends": [
    "@commitlint/config-conventional"
  ]
}
```

4.  Add husky configuration to `package.json`:

```json
"husky": {
  "hooks": {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    "pre-commit": "yarn workspaces run precommit"
  }
}
```

5.  Create a file `.lintstagedrc` with JSON configuration:

```json
{
  "src/**/*.{json,css,sass,scss,less,html,graphql,yml}": "prettier --write",
  "src/**/*.{ts,tsx,js,jsx}": ["prettier --write", "tslint --fix"]
}
```

### Documentation

Typedoc is used to write documentation.

1. Add dependencies

```sh
$ yarn add -D typedoc typedoc-hopper-theme
```

2. Add `"allowSyntheticDefaultImports": true` to tsconfig.json

3. Add new script to `package.json`

```json
{
  "scripts": {
    "doc": "typedoc ./src"
  }
}
```

### Dependencies

#### Added

- Init

  - [cross-var](https://www.npmjs.com/package/cross-var)

  ```sh
  yarn add -D cross-var
  ```

- Git hooks:

  - [husky](https://github.com/typicode/husky)
  - [@commitlint/cli](https://commitlint.js.org/)
  - [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional)
  - [commitizen](https://www.npmjs.com/package/commitizen)
  - [cz-conventional-changelog](https://www.npmjs.com/package/cz-conventional-changelog)

  ```sh
  yarn add -D husky @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog
  ```

- UI design:

  - [@angular/material](https://material.angular.io/)
  - [@angular/cdk](https://www.npmjs.com/package/@angular/cdk)
  - [hammerjs](https://hammerjs.github.io/)
  - [tailwindcss](https://tailwindcss.com/)
  - [postcss-loader](https://www.npmjs.com/package/postcss-loader)
  - [postcss-scss](https://www.npmjs.com/package/postcss-scss)
  - [postcss-import](https://www.npmjs.com/package/postcss-import)
  - [autoprefixer](https://www.npmjs.com/package/autoprefixer)
  - [@angular-builders/custom-webpack](https://www.npmjs.com/package/@angular-builders/custom-webpack)
  - [@fullhuman/postcss-purgecss](https://www.npmjs.com/package/@fullhuman/postcss-purgecss)

  ```sh
  $ yarn add @angular/material @angular/cdk hammerjs tailwindcss postcss-loader postcss-scss postcss-import autoprefixer @angular-builders/custom-webpack @fullhuman/postcss-purgecss
  ```

- Testing:

  - [jest](https://jestjs.io/)
  - [jest-junit](https://www.npmjs.com/package/jest-junit)
  - [jest-preset-angular](https://www.npmjs.com/package/jest-preset-angular)
  - [jest-puppeteer](https://www.npmjs.com/package/jest-puppeteer)
  - [jest-puppeteer-istanbul](https://www.npmjs.com/package/jest-puppeteer-istanbul)
  - [puppeteer](https://pptr.dev/)
  - [remap-istanbul](https://www.npmjs.com/package/remap-istanbul)
  - [@types/expect-puppeteer](https://www.npmjs.com/package/@types/expect-puppeteer)
  - [@types/jest](https://www.npmjs.com/package/@types/jest)
  - [@types/puppeteer](https://www.npmjs.com/package/@types/puppeteer)
  - [concurrently](https://www.npmjs.com/package/concurrently)
  - [istanbul-instrumenter-loader](https://www.npmjs.com/package/istanbul-instrumenter-loader)
  - [wait-on](https://www.npmjs.com/package/wait-on)
  - [@angular-builders/custom-webpack](https://www.npmjs.com/package/@angular-builders/custom-webpack)

  ```sh
  $ yarn add -D jest jest-junit jest-preset-angular jest-puppeteer jest-puppeteer-istanbul puppeteer remap-istanbul @types/expect-puppeteer @types/jest @types/puppeteer concurrently istanbul-instrumenter-loader wait-on @angular-builders/custom-webpack
  ```

- Documentation:

  - [typedoc](https://www.npmjs.com/package/typedoc)
  - [typedoc-hopper-theme](https://www.npmjs.com/package/typedoc-hopper-theme)

  ```sh
  $ yarn add -D typedoc typedoc-hopper-theme
  ```

- Linting:

  - [stylelint](https://stylelint.io/)
  - [stylelint-config-sass-guidelines](https://www.npmjs.com/package/stylelint-config-sass-guidelines)
  - [stylelint-junit-formatter](https://www.npmjs.com/package/stylelint-junit-formatter)
  - [stylelint-no-unsupported-browser-features](https://www.npmjs.com/package/stylelint-no-unsupported-browser-features)

  ```sh
  $ yarn add -D stylelint stylelint-config-sass-guidelines stylelint-junit-formatter stylelint-no-unsupported-browser-features
  ```

- Formatting:

  - [prettier](https://prettier.io/)
  - [tslint-config-prettier](https://www.npmjs.com/package/tslint-config-prettier)
  - [tslint-plugin-prettier](https://www.npmjs.com/package/tslint-plugin-prettier)
  - [stylelint-config-prettier](https://www.npmjs.com/package/stylelint-config-prettier)
  - [stylelint-prettier](https://www.npmjs.com/package/stylelint-prettier)

  ```sh
  $ yarn add -D prettier tslint-config-prettier tslint-plugin-prettier stylelint-config-prettier stylelint-prettier
  ```

#### Removed (if project generated without _--minimal=true_ option)

- jasmine-core
- jasmine-spec-reporter
- karma
- karma-chrome-launcher
- karma-coverage-istanbul-reporter
- karma-jasmine
- karma-jasmine-html-reporter
- protractor
- @types/jasmine
- @types/jasminewd2

```sh
$ yarn remove jasmine-core jasmine-spec-reporter karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter protractor @types/jasmine @types/jasminewd2
```
