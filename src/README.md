# Folder Structure

This will be the basic folder structure for `3.0`.

Due to the complex folder structure in `2.0`, which made finding some components/screens confusing or just being difficult to follow and understand, this new folder structure will try to minimize confusion by following proper folder structures used in other React Native Apps.

## Basic Folder Outline

This is the basic folder outline for each individual main folders in `src` directory.

src
- components
  - someCommonComponent
      - `__tests__`
      - index.js
      - styled.js
    - index.js
  - redux
    - someFeature
      - `__tests__`
      - actions.js
      - epic
      - index.js
      - reducer.js
      - selectors.js
      - types.js
      - index.js
    - index.js
  - screens
    - someFeature
      - `__tests__`
      - components (as needed)
      - screens (as needed)
      - index.js
    - index.js
  - theme
    - someCommonStyles

This will be the starting folder structure for `3.0`. Any new folders such as `store`, `storybook`, or `navigation` will be created and added to appropriate places accordingly when needed.

### TODO: temp description, add more later on
