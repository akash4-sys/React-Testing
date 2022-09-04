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

----
Some important points
- In unit tests we only have one expect statement per test
- In Functional tests since we test the behavior of our application it's not reasonable to limit to just one expect statement per test
- If you don't want jest to run all your test every time you do `npm test` or automatically in watch mode, you have to commit it and then push it as well.
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