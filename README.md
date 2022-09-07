# Getting Started with Tests in React

- Unit test

  - Test one unit of code in isolation

- Integration Tests
  - How multiple tests work together

#### React testing library suggests functional test over unit tests as it defines behaviour more properly

- Functional tests

  - This kind of tests checks the behaviour of the app not the implementation
  - This are rigid and only fails when behaviour/functionality changes

- Acceptance tests/ End to end Tests
  - Use a actual browser using cypress or selenium

In tests regex `i` means case insensitive

On react testing library you can find which queries are better to use than which query
For Example - Like get getByRole is better than getByText

If you are not sure about roles you can always go to [W3C Roles Definition](https://www.w3.org/TR/wai-aria/#role_definitions) to check out possible roles.

---

Some important points

- In unit tests we only have one expect statement per test
- In Functional tests since we test the behavior of our application it's not reasonable to limit to just one expect statement per test

### More Jest Controls
- Use `p` to *select a specific test file* for jest to run
- Use `test.only(...)` while writing test to run only that test from that file and skip other tests
- Use `test.skip(...)` while writing test to skip one test from that file and run other tests
- If you don't want jest to run all your test every time you do `npm test` or automatically in watch mode, you have to commit it.

---

### Css Module Imports

- `.toHaveStyle()` does not work with classes from imported CSS module. Jest simply ignores any imported css modules.
- CSS are not usually tested because they are cosmetic rather than functionality but not like in every application. Here the course [link](https://www.udemy.com/course/react-testing-library/learn/lecture/30436464#content) for more details

---

### When to use Unit Test

- Logic is complicated enough to check via functional tests
- If there are too many edge cases
- Determining what caused functional tests to fail

---

### Describe statement

It is used to group tests together

---

Note: `Quit jest in terminal using q`

---

### Some eslint configuration for jest

Note: `Make sure your remove eslint config from package.json`

You have to use both the config to make the eslint for jest work

<details>
<summary>Eslint Config for .eslintrc.json file</summary>
<br>

Create the file on same level as gitignore file.

`Install these libraries first.`

```
npm i eslint-plugin-testing-library eslint-plugin-jest-dom
```

```
{
  "plugins": ["jest-dom", "testing-library"],
  "extends": ["react-app", "react-app/jest", "plugin:testing-library/react", "plugin:jest-dom/recommended"]
}
```

</details>

<details>
<summary>Eslint Config for settings.json file</summary>
<br>

Create a folder with name .vscode on same level as gitignore file and settings.json file inside it.

```
{
  "eslint.options": {
    "overrideConfigFile": ".eslintrc.json"
  },
  "eslint.validate": ["javascript", "javascriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

</details>

<br/>

To test the above configuration try replacing

```
expect(linkElement).toBeInTheDocument();
```

with :

```
expect(linkElement).not.toBeEnabled();
```

<details>
<summary>Udemy Course Author's config for the .eslintrc.json file</summary>
<br>

This one's optional to above eslintrc file.
`This settings might not work as some of things might not be supported now. But worth a try.`

```
{
  "extends": [
    "airbnb",
    "plugin:testing-library/react",
    "react-app",
    "react-app/jest",
    "plugin:jsx-a11y/recommended"
  ],
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".jsx", ".ts", ".tsx"],
        "paths": ["src"]
      }
    }
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "plugins": [
    "testing-library",
    "jest-dom",
    "sonarjs",
    "jsx-a11y",
    "@typescript-eslint",
    "simple-import-sort",
    "prettier"
  ],
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true
  },
  "rules": {
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    "testing-library/await-async-query": "error",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-debug": "warn",
    "jest-dom/prefer-checked": "error",
    "jest-dom/prefer-enabled-disabled": "error",
    "jest-dom/prefer-required": "error",
    "jest-dom/prefer-to-have-attribute": "error",
    "react/prop-types": ["off"],
    "sonarjs/cognitive-complexity": ["error", 5],
    "max-lines-per-function": ["warn", 50],
    "react/jsx-filename-extension": [1, { "extensions": [".tsx", ".jsx"] }],
    "import/extensions": ["error", "never"],
    "import/no-unresolved": 2,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-imports": "off",
    "import/order": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-curly-newline": "off",
    "import/prefer-default-export": "off"
  }
}
```

</details>

### User-Events

It's recommended to use userEvents over fireEvents
`fireEvent` dispatches DOM events, whereas user-event simulates full interactions, which may fire multiple events and do additional checks along the way.

To use User-Events downloading following dependencies

```
npm i @testing-library/user-event@14.4.0 @testing-library/dom
```

### Different Methods For Screen Queries

- get: expect element to be in DOM
- query: expect element to not be in DOM
- find: expect element to appear async
- ALL
	- (exclude) expect only one match
	- (include) expect more than one match

- QueryType
	- Role (most preferred)
	- AltText (images)
	- Text
	- Form elements
		- Placeholder Texts
		- Label Texts
		- DisplayValue

### Mock Service Workers
Mock Service workers are used to mock the functioning of api calls for testing purposes.
Documentation Link [MSW](https://mswjs.io/docs/)

Install it `npm i msw`

There are two handlers type in msw REST or GRAPHQL

For Setup Documentation [MSW Setup](https://mswjs.io/docs/getting-started/integrate/node)

For Setting up Mock Service worker add the following lines in `setupTests.js` file

```
// src/setupTests.js
import { server } from './mocks/server.js'
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
```
Note- 
Whenever you are waiting for something to appear asynchronously on the page you must use `await findBy`

### Alert and await problem - Soluton waitFor
await doesn't works for Alerts as their could be multiple alerts and each one will come at different time..

So instead use `waitFor`

WaitFor Example
```
    await waitFor(async () => { 
        const alerts = await screen.findAllByRole('alert');
        expect(alerts).toHaveLength(2);
    });
```