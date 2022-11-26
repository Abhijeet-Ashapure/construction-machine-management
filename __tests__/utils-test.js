/**
 * @format
 */

import 'react-native';
import React from 'react';
import getDayOfWeek, { isEmpty, createImageUrl } from '../app/utils/utilFunctions';

describe('isEmpty', () => {
  it('test1', () => {
    const str = "";
    expect(isEmpty(str)).toEqual(true);
  });
  it('test2', () => {
    const str = "not_empty";
    expect(isEmpty(str)).toEqual(false);
  });
});



