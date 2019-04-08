import { ElementDemoBlockFactory } from '../src/Block';
import { defaultConfig } from '../src/Block/configs';
import { enzymeBlock } from '../../../utils/test-helpers';
import { mockClasses as classes } from './utils/mockClasses';

let props;

describe('The ElementDemoBlock block', () => {
    beforeEach(() => {
        props = { ...defaultConfig, classes };
    });
    it('should match the shallow snapshot', () => {
        const shallowWrapper = enzymeBlock(ElementDemoBlockFactory, props);
        expect(shallowWrapper).toMatchSnapshot();
    });
});
