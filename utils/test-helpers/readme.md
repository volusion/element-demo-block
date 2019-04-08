## Test Helper Functions

-   Isolates commonly used test helpers in a single global location.

### Import statment for all helpers

```javascript
import {
    enzymeBlock,
    createFactoryEnzymeBlock,
    expect,
    mockGlobalProps,
    updateProp
} from "../../utils/test-helpers";
```

## How each one works:

### enzymeBlock

-   Allows you to easily create an enzyme block of your block/component's factory function.
-   Faster than running the whole block through createFactory, and easier to parse the returned data.
-   Should always be utilized over `createFactoryEnzymeBlock` if possible.

```javascript
// Usage
const shallowBlock = enzymeBlock(factoryFn, props);
const mountedBlock = enzymeBlock(factoryFn, props, mount);
const renderedBlock = enzymeBlock(factoryFn, props, render);

// Example
import { enzymeBlock } from "../../utils/test-helpers";
import { factory as featuredContentFactory } from "...";

const props = {...};

describe("The Featured Content Block", () => {
    it("should have an Image component", () => {
        const shallowBlock = enzymeBlock(featuredContentFactory, props);
        expect(shallowBlock.exists("Image")).toBeTruthy();
    });
});
```

### createFactoryEnzymeBlock

-   Creates an enzyme element from the block after being passed through the createFactory function.
-   Useful when testing items that are handled as part of the createFactory function.

```javascript
// Usage
const shallowBlock = createFactoryEnzymeBlock(factoryFn, props);
const mountedBlock = createFactoryEnzymeBlock(factoryFn, props, mount);
const renderedBlock = createFactoryEnzymeBlock(factoryFn, props, render);

// Example
import { createFactoryEnzymeBlock } from "../../utils/test-helpers";
import { factory as featuredContentFactory } from "...";

const props = {...};

describe("The Featured Content Block", () => {
    it("should should use the default props if none are provided", () => {
        const shallowDefaultsBlock = createFactoryEnzymeBlock(featuredContentFactory, props);
        const shallowNoPropsBlock = createFactoryEnzymeBlock(featuredContentFactory, {});
        expect(shallowDefaultsBlock).toEqual(shallowNoPropsBlock);
    });
});
```

### expect

-   Extends expect to add a custom test function to check for container classes which every stand alone block should have.

```javascript
// Example
import { expect } from "../../utils/test-helpers";
expect(enzymeBlockNode).toHaveContainerClasses();
expect(enzymeBlockNode).not.toHaveContainerClasses();
```

### mockGlobalProps

-   Allows you to pass an object of the default global props into your tests.

```javascript
// Example
import { mockGlobalProps } from "../../utils/test-helpers";
import {styles} from '...';

const props = {...};

expect(styles(mockGlobalProps, props).backgroundColor).toEqual('...')
```

### updateProp

-   Validates the prop before updating it in your tests.
-   Prevents creating a new prop due to a typo or change in prop names.
-   If the prop you're trying to update does not exist, it throws an error in the tests.

```javascript
// Usage
updateProp(propsObj, "prop name as string", "value of prop");

// Example
import { updateProp } from "../../utils/test-helpers";
const props = { fullWidthSection: false };
updateProp(props, "fullWidthSection", true); // works
updateProp(props, "fullwidthSection", true); // throws an error because the `w` is the wrong case
```
