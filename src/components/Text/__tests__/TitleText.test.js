/*
 * Created Date: February 15th 2019, 3:06:44 pm
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */

import React from 'react';
import renderer from 'react-test-renderer';

import { TitleText, BodyText } from '..';

const setup = () => {
  const tree = renderer.create(<TitleText />);

  return { tree };
};

const setupBodyText = () => {
  const tree = renderer.create(<BodyText />);

  return { tree };
};

describe('Title Text', () => {
  const { tree } = setup();
  it('renders component to snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});

describe('Body Text', () => {
  const { tree } = setupBodyText();
  it('renders component to snapshot', () => {
    expect(tree).toMatchSnapshot();
  });
});
