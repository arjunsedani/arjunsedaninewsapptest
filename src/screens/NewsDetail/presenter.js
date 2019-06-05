import React, { PureComponent } from 'react';
import { Screen, TitleText, NewsListImage, BodyText, Spacing, Row } from '../../components';

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
        <Spacing hSpacing={20}>
          <Spacing vSpacing={10} />
          <TitleText>{news.title}</TitleText>
          <Spacing vSpacing={10} />
          <Row>
            <BodyText>{news.author}</BodyText>
            <Spacing hSpacing={10} />
            <BodyText>{news.publishedAt.toString().slice(0, 10)}</BodyText>
          </Row>
          <Spacing vSpacing={10} />
          <NewsListImage
            source={{
              uri: news.urlToImage
            }}
          />
          <Spacing vSpacing={10} />
          <BodyText>{news.content}</BodyText>
        </Spacing>
      </Screen>
    );
  }
}
