/*
 * Created Date: February 2nd 2019, 10:53:47 pm
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */

import glamorous from 'glamorous-native';
import { palette } from '../../theme/common';

export const TitleText = glamorous.text({
  fontSize: 20, // TODO: Font size update when it becomes available on zeplin
  textAlign: 'center'
});

export const BodyText = glamorous.text({
  fontSize: 14,
  textAlign: 'left',
  color: palette.primaryBlack,
  alignSelf: 'stretch'
});
