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

describe('createImageUrl', () => {
  it('test1', () => {
    const str = "test";
    expect(createImageUrl(str)).toEqual("https://openweathermap.org/img/w/test.png");
  });
  it('test2', () => {
    const str = "";
    expect(createImageUrl(str)).toEqual("https://openweathermap.org/img/w/demo.png");
  });
});

describe('getDayOfWeek', () => {
  it('test1', () => {
    const str = "2022-02-10";
    expect(getDayOfWeek(str)).toEqual("Thursday");
  });
  it('test2', () => {
    const str = "2015-05-12";
    expect(getDayOfWeek(str)).toEqual("Tuesday");
  });
  it('test1', () => {
    const str = "2022-06-19";
    expect(getDayOfWeek(str)).toEqual("Sunday");
  });
  it('test2', () => {
    const str = "2017-06-05";
    expect(getDayOfWeek(str)).toEqual("Monday");
  });
});


