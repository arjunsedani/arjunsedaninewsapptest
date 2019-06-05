/*
 * Created Date: February 2nd 2019, 11:32:29 am
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */

import * as React from 'react';

import { View } from './styled';

type Props = {
  children: React.Node
};

export function Screen(props: Props) {
  const { children } = props;
  return <View>{children}</View>;
}
