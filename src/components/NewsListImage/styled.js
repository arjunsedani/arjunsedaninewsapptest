import { Image } from 'react-native';
import glamorous from 'glamorous-native';

type BaseContainerProps = {
  marginTop: number,
  onPress: () => {}
};

export const BaseContainer = glamorous.touchableOpacity(
  {
    minHeight: 150,
    maxHeight: 250,
    flex: 1,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    overflow: 'hidden'
  },
  (props: BaseContainerProps) => ({
    onPress: props.onPress,
    marginTop: props.marginTop
  })
);

export const BackgroundImage = glamorous(Image)({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  flex: 1,
  width: null,
  height: null,
  borderRadius: 10,
  resizeMode: 'stretch'
});
