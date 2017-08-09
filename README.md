# ZIO.html

# Install
`npm install zeriontech/zio.html`
or
`yarn add zeriontech/zio.html`

# Storybook
> Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.
*[Storybook repo](https://github.com/storybooks/storybook)*


# Run Storybook
`npm run storybook`
or
`yarn run storybook`


# Usage

```jsx
import { H } from 'zio.html';
ReactDOM.render(<H size="em">Its Awesome</H>, mountNode);
```

### Use modularized zio.html
- Manually import components
   ```jsx
   import H from 'zio.html/components/H';
   ```

# Testing
**Global Testing**
`$ npm run test`
or
`$ yarn run test`

**Watch files for changes**
`$ npm run test:watch`
or
`$ yarn run test:watch`

**Structure**
```
|-components
|--H
|--- H.story.js //=> Story Component
|--- H.style.js //=>Styled Components
|--- H.test.js //=> Testing file
|--- index.js //=> Component
```


# Jest Snapshots    
> Snapshot tests are a very useful tool whenever you want to make sure your UI does not change unexpectedly.
A typical snapshot test case for a mobile app renders a UI component, takes a screenshot, then compares it to a reference image stored alongside the test. The test will fail if the two images do not match: either the change is unexpected, or the screenshot needs to be updated to the new version of the UI component.

*Example*
```js
it("should be equal to snapshow", () => {
    const component = renderer.create(<H size="xs">I am small 👌</H>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
```

## Components API Docs

- [H](https://github.com/zeriontech/zio.html/wiki/H)
