# Common-level Components
These are the common components that will be utilized throughout the entire app.

Any common component placed here will be used globally by other common components or features. Otherwise, if the component is specific to a particular feature, the component should be placed inside the `screens\yourFeature\components` folder.

A common component will contain these files: `index.js` and `styled.js`.

#### `index.js`
Exports the component to be imported for other modules to use. Depending on the common component, it can either be a `presentational component` or a `container component`.

A `presentational component` basically displays the component.
- ex. `button` -- displays a button, doesn't need to talk with `Redux` to get more information

A `container component` has the capability to communicate with `Redux` in addition to displaying the component.
- ex. `Avatar Badge` -- a common component that displays a round image with the user's initials, but to make it unique to each user, this common component needs to communicate with `Redux` to get the current user's name or initials in order to display it

This is to avoid passing multiple props unnecessarily from one common component to another common component.

#### `styled.js`
Contains any internal stylings the `index.js` might need through the usage of `glamorous-native` and other stylesheets.

## Adding a Component
Adding a compoennt that is to be shared by the entire app must meet the following criteria:

#### 1. It has Flow types enabled
Ensure that the `Props` and `State` have Flow types defined. This lets someone using the component to quickly be able to glance at the API the component exposes.

#### 2. It has unit tests
Add tests to the `__tests__` folder within. These tests should cover all props passed in, as well as functionalities which include actions with correct and incorrect arguments, and expected right and wrong results.

#### 3. It utilizes `glamorous-native` for styling wherever possible
Avoid the `react-native/StyleSheet` if possible.

#### 4. It uses common units and color palettes
The `styled.js` should use commonly used units for font-size, color theme, and spacing as used in other common components to express a uniform appearance throughout. The common units and color palettes can be found in the `theme` folder.

### `components/index.js`
Imports and exports all of the common components. This `index.js` file exists in the `components` folder but outside of each individual common component folder.

### `story.js`
The common component should contain some example usages, for use with React Native Storybook. You will need to manually add an import into the `stories/index.js` file in the root `storybook` folder.

### TODO: temp description, add more later on
