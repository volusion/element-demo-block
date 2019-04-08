import { factory } from '../src';
import { defaultConfig } from '../src/Block/configs';
import { createFactoryEnzymeBlock } from '../../../utils/test-helpers';

let props;

describe('The ElementDemoBlock when rendered with createFactory', () => {
    beforeEach(() => {
        props = { ...defaultConfig };
    });
    it('should match the shallow block snapshot', () => {
        const block = createFactoryEnzymeBlock(factory, props)
            .dive()
            .dive();
        expect(block).toMatchSnapshot();
    });
});
