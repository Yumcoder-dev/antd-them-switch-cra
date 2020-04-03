# Yum Dashboard
yum-dashboard is data intensive software product line web application.

## Available Scripts
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Please contribute!
Thank you very much for volunteering for the **yum-dashboard** project.

## Contact
Feel free to join our teams: email:omid.jn@gmail.com, telegram: @yumcoder


# install the following extensions and config them:

## Prettier

add extension: ```Prettier - Code formatter esbenp.prettier-vscode```

in vscode press ctrl+shift+p and type prettierrc, then select the root
  ```
  {
    "printWidth": 80,
    "tabWidth": 2,
    "singleQuote": true,
    "trailingComma": "all",
    "bracketSpacing": true,
    "semi": true,
    "useTabs": false,
    "arrowParens": "avoid",
    "endOfLine": "lf"
  }
  ```
 
## Lint

add extension: ```ESLint dbaeumer.vscode-eslint```

in vscode press ctrl+shift+p and type eslint and answer questions (select airbnb)

  ```
  module.exports = {
    env: {
      browser: true,
      es6: true,
      jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
      'react/prop-types': 'off',
    },
  };

  ```

## Debugging

add extension: ```Debugger for Chrome msjsdiag.debugger-for-chrome```

Then add the block below to your launch.json file and put it inside the .vscode folder in your app’s root directory.
  ```
  {
    "version": "0.2.0",
    "configurations": [
    {
      "name": "Chrome",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000",
      "runtimeExecutable": "/snap/bin/chromium",
      "webRoot": "${workspaceFolder}",
      "userDataDir": true
    }
   ]
  }
  ```
## Formatting Code Automatically

add the follwing in vscode settings file:
   ```
   "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
   },
   ....
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  }  
  ```


## Git
add extension:```Git History donjayamanne.githistory```

add extension:```GitLens — Git supercharged eamodio.gitlens```

see https://create-react-app.dev/docs/setting-up-your-editor#formatting-code-automatically

## File Header
add extension:```psioniq File Header psioniq.psi-header``` 

add the follwing in vscode settings file:
  ```
  "psi-header.config": {
    "forceToTop": true,
    "blankLinesAfter": 1,
  },
  "psi-header.variables": [
    ["projectCreationYear", "2019"]
  ],
  "psi-header.templates": [
    {
        "language": "*",
        "template": [
            "Copyright (c) <<projectCreationYear>>-present, The Yumcoder Authors. All rights reserved.",
            "Project: <<projectname>>",
            "",
            "This source code is licensed under the license found in the LICENSE file in",
            "the root directory of this source tree."
        ]
    }
  ]  
  ```
## Stylelint
add extension:```stylelint thibaudcolas.stylelint``` 

## SVG Viewer
add extension:```SVG Viewer cssho.vscode-svgviewer``` 

## Vscode-icons
add extension:```vscode-icons vscode-icons-team.vscode-icons``` 

## Storybook
see https://create-react-app.dev/docs/developing-components-in-isolation

## Test
add extension:```JavaScript Test Runner oshri6688.javascript-test-runner```

## Bundle Size
follow https://create-react-app.dev/docs/analyzing-the-bundle-size

open in firefox

## Compatibility
see https://create-react-app.dev/docs/supported-browsers-features/#configuring-supported-browsers

add the following in package.json settings file:
```
"browserslist": {
    "production": [
      ">0.001%",
      "not dead",
      "not op_mini all",
      "ie >= 9"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
```
## Antd
follow: https://ant.design/docs/react/use-with-create-react-app

if err, see https://github.com/arackaf/customize-cra/issues/201

## Autoprefixer

see:https://create-react-app.dev/docs/post-processing-css/

if err, see https://github.com/arackaf/customize-cra/issues/201

# vscode setting

```
{
  "workbench.activityBar.visible": true,
  "C_Cpp.updateChannel": "Insiders",
  "go.formatTool": "goimports",
  "go.languageServerExperimentalFeatures": {
    "format": true,
    "autoComplete": true,
    "rename": true,
    "goToDefinition": true,
    "hover": true,
    "signatureHelp": true,
    "goToTypeDefinition": true,
    "goToImplementation": true,
    "documentSymbols": true,
    "workspaceSymbols": true,
    "findReferences": true,
    "diagnostics": true,
    "documentLink": true
  },
  "go.lintFlags": [
    "--enable-all",
    "--new"
  ],
  "go.useLanguageServer": true,
  "explorer.confirmDragAndDrop": false,
  "task.problemMatchers.neverPrompt": {
    "npm": true
  },
  "git.enableSmartCommit": true,
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  },
  "javascript.updateImportsOnFileMove.enabled": "always",
  "workbench.iconTheme": "vscode-icons",
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "psi-header.config": {
    "forceToTop": true,
    "blankLinesAfter": 1,
  },
  "psi-header.variables": [
    ["projectCreationYear", "2019"]
  ],
  "psi-header.templates": [
    {
        "language": "*",
        "template": [
            "Copyright (c) <<projectCreationYear>>-present, The Yumcoder Authors. All rights reserved.",
            "",
            "This source code is licensed under the license found in the LICENSE file in",
            "the root directory of this source tree."
        ]
    }
  ],
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.autoSave": "afterDelay",
  "javascript.format.enable": false,
  "editor.fontWeight": "500",
  "editor.fontSize": 16,
  "terminal.integrated.fontSize": 16,
  "markdown.preview.fontSize": 16,
  "javascript.suggest.autoImports": true,
  "eslint.alwaysShowStatus": true,
  "stylelint.enable": true,
  "javascript.validate.enable": false,
  "editor.formatOnPaste": false,
  "editor.formatOnSave": false,
  "eslint.packageManager": "yarn",
  "editor.fontLigatures": true,
  "explorer.sortOrder": "type",
  "editor.cursorStyle": "block",
  "editor.cursorBlinking": "smooth",
  "files.trimFinalNewlines": true,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
  },
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/**": true,
    "**/tmp/**": true,
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true,
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist/**": true,
    "**/log/**": true,
    "**/logs/**": true,
    "**/.fdk/**": true
  },
  "workbench.colorTheme": "Monokai",
  "editor.renderWhitespace": "all",
  "editor.renderControlCharacters": true,
  "editor.rulers": [80,120]
}
```

## js Tag
add extension: ```Auto Rename Tag formulahendry.auto-rename-tag```

## Spell Checker
add extension: ```Code Spell Checker streetsidesoftware.code-spell-checker```
