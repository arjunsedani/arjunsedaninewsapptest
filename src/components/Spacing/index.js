// @flow
import glamorous from 'glamorous-native';

type SpacingProps = {
  vSpacing: number,
  vOffset: number,
  hSpacing: number,
  hOffset: number,
  vSpacingTop: number,
  vSpacingBottom: number,
  vOffsetTop: number,
  vOffsetBottom: number,
  hSpacingLeft: number,
  hSpacingRight: number,
  hOffsetLeft: number,
  hOffsetRight: number
};

export const Spacing = glamorous.view(
  {
    padding: 0,
    margin: 0
  },
  (props: SpacingProps) => ({
    paddingTop: props.vSpacingTop || props.vSpacing,
    paddingBottom: props.vSpacingBottom || props.vSpacing,
    marginTop: props.vOffsetTop || props.vOffset,
    marginBottom: props.vOffsetBottom || props.vOffset,

    paddingLeft: props.hSpacingLeft || props.hSpacing,
    paddingRight: props.hSpacingRight || props.hSpacing,
    marginLeft: props.hOffsetLeft || props.hOffset,
    marginRight: props.hOffsetRight || props.hOffset
  })
);
