import React from 'react';
import { Button, LinkButton } from '@volusion/element-components';
import { ElementPropTypes } from '@volusion/element-proptypes';
import { StyleSheet, css } from 'aphrodite';
import { shallow } from 'enzyme';
import { mockGlobalProps } from './mockGlobalProps';

function enzymeBlock(factory, blockConfig = {}, creationMethod = shallow) {
    if (typeof factory !== 'function')
        throw new Error(
            'First argument for "enzymeBlock()" must be a factory function.'
        );
    if (typeof blockConfig !== 'object')
        throw new Error(
            'Second argument for "enzymeBlock()" must be a block props object.'
        );
    const Button = () => <div>Mock Button</div>;
    const LinkButton = () => <div>Mock Button</div>;
    const mockComponents = { Button, LinkButton };
    const ReactBlock = factory(React, mockComponents);
    function processCss() {
        const arrayOfArguments = [...arguments];
        return arrayOfArguments
            .map(arg => {
                if (arg === undefined) return 'NO_MOCK_CLASS_PROVIDED';
                if (typeof arg === 'string') return arg;
                return css(arg);
            })
            .join(' ');
    }

    const enzymeBlockConfig = {
        ...blockConfig,
        StyleSheet,
        css: processCss
    };
    return creationMethod(<ReactBlock {...enzymeBlockConfig} />);
}

function createFactoryEnzymeBlock(
    factory,
    blockConfig = {},
    creationMethod = shallow
) {
    if (typeof factory !== 'function')
        throw new Error(
            'First argument for "createFactoryEnzymeBlock()" must be a factory function.'
        );
    if (typeof blockConfig !== 'object')
        throw new Error(
            'Second argument for "createFactoryEnzymeBlock()" must be a block props object.'
        );
    const Components = { Button, LinkButton };
    const utils = {};
    const globalConfig = { ...mockGlobalProps };
    const ReactBlock = factory(
        { React, ElementPropTypes, Components },
        utils,
        { StyleSheet, css },
        globalConfig,
        blockConfig
    ).block;
    const enzymeBlockConfig = { ...blockConfig, StyleSheet, css };
    return creationMethod(<ReactBlock {...enzymeBlockConfig} />);
}

export { createFactoryEnzymeBlock, enzymeBlock };
