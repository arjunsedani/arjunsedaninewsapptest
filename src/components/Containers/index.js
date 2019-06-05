// @flow
import glamorous from 'glamorous-native';

export const Container = glamorous.view({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white'
});

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

type FlexProps = {
  flexDirection: FlexDirection,
  alignItems: string,
  justifyContent: string,
  flexWrap: string,
  flex: number
};

type TouchProps = {
  width: number,
  height: number,
  justifyContent?: string,
  alignItems?: string
};

export const FlexContainer = glamorous.view({}, (props: FlexProps) => ({
  flexDirection: props.flexDirection,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
  flex: props.flex,
  flexWrap: props.flexWrap
}));

export const TouchableContainer = glamorous.touchableOpacity({}, (props: TouchProps) => ({
  width: props.width,
  height: props.height,
  justifyContent: props.justifyContent ? props.justifyContent : 'center',
  alignItems: props.alignItems ? props.alignItems : 'center'
}));
