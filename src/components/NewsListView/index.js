/*
 * Created Date: February 15th 2019, 11:55:09 am
 * Copyright (c) 2019 Arjun Sedani
 *
 * @flow
 */

import React, { PureComponent } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { CardSection } from '../CardSection';
import { FlexContainer } from '../Containers';
import { NewsListImage } from '../NewsListImage';

type Props = {
  data: {
    alias: string
  },
  onPress: () => void
};

export default class NewsListView extends PureComponent<Props, State> {
  render() {
    const { data, onPress } = this.props;
    return (
      <CardSection hairlineBorder fullBleed flex={1}>
        <TouchableOpacity onPress={onPress}>
          <FlexContainer
            flexDirection="row"
            justifyContent="space-evenly"
            alignItems="center"
            flex={1}
          >
            <FlexContainer flex={1} marginLeft={15}>
              <Text>{data.title}</Text>
            </FlexContainer>
            <NewsListImage
              source={{
                uri: data.urlToImage
              }}
            />
          </FlexContainer>
        </TouchableOpacity>
      </CardSection>
    );
  }
}
