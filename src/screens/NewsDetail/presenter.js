import React, { PureComponent } from 'react';
import { Screen, TitleText, NewsListImage } from '../../components';

type Props = {
  newsActions: {
    fetchData: () => {}
  },
  navigation: {
    navigate: (screen: string) => {}
  }
};
export default class NewsDetail extends PureComponent<Props, State> {
  render() {
    const { navigation } = this.props;
    const news = navigation.getParam('newsDetail');
    return (
      <Screen justifyContent="center">
        <TitleText>{news.description}</TitleText>
        <NewsListImage
          source={{
            uri: news.urlToImage
          }}
        />
      </Screen>
    );
  }
}
