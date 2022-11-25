import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import TestRenderer from 'react-test-renderer';
import ButtonComponent from '../app/components/Button';

describe('<Button>', () => {
    it('button clicked', () => {
        const inst = TestRenderer.create(<ButtonComponent />);
        const text = inst.root.findByType(Text);
        expect(text.props.children).toBe("");
    });
});