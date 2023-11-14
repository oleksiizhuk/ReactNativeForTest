import { NavigatorScreenParams } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

export type MainParamsList = {
  Home: undefined;
};

export type ApplicationStackParamList = {
  Startup: undefined;
  Main: NavigatorScreenParams<MainParamsList>;
  Camera: undefined;
  Topic: undefined;
  AnimationTopicScreen: undefined;
  AnimatedAPIScreen: undefined;
  LayoutAnimationScreen: undefined;
  ReanimatedScreen: undefined;
  HookTopicScreen: undefined;
  UseDeferredValueScreen: undefined;
};

export type ApplicationScreenProps =
  StackScreenProps<ApplicationStackParamList>;
