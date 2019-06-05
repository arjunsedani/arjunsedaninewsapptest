// @flow
import glamorous from 'glamorous-native';

type CSProps = {
  fullBleed: boolean,
  hairlineBorder: boolean
};

export const CardSection = glamorous.view(
  {
    borderColor: '#AAB1B3',
    paddingVertical: 30,
    backgroundColor: 'white'
  },
  (props: CSProps) => ({
    paddingHorizontal: props.fullBleed ? 0 : 30,
    borderBottomWidth: props.hairlineBorder ? 1 : 2
  })
);
