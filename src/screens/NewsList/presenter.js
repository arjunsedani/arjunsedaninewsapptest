import { FlatList } from 'react-native';
import React, { PureComponent } from 'react';
import { Screen, Spacing, NewsListView } from '../../components';

type Props = {
  newsActions: {
    fetchData: () => {}
  },
  newsInfo: Array,
  navigation: {
    navigate: (screen: string) => {}
  }
};
export default class NewsList extends PureComponent<Props, State> {
  componentDidMount() {
    const { newsActions } = this.props;
    newsActions.fetchData();
  }

  renderExtension = ({ item: n }) => {
    const {
      navigation: { navigate }
    } = this.props;
    return (
      <NewsListView
        data={n}
        onPress={() => {
          navigate('NewsDetail', {
            newsDetail: n
          });
        }}
      />
    );
  };

  render() {
    const { newsInfo } = this.props;
    return (
      <Screen justifyContent="center">
        <Spacing hSpacing={20} vSpacing={20}>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={newsInfo}
            renderItem={this.renderExtension}
          />
        </Spacing>
      </Screen>
    );
  }
}
