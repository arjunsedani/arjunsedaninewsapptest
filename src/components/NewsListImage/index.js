import React from 'react';

import { BaseContainer, BackgroundImage } from './styled';

type Props = {
  source: object,
  marginTop: number,
  onPress?: () => {}
};

export const NewsListImage = (props: Props) => {
  const { source, onPress, marginTop } = props;
  return (
    <BaseContainer onPress={onPress} marginTop={marginTop}>
      <BackgroundImage source={source} />
    </BaseContainer>
  );
};

NewsListImage.defaultProps = {
  onPress: () => {}
};
