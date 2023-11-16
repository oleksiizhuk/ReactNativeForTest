import React from 'react';
import { View } from 'react-native';

export const JSTestScreen = () => {
  // @ts-ignore
  function foo(bar, getBar = () => bar) {
    // @ts-ignore
    var bar = 10;
    console.log('getBar() = ', getBar());
  }
  foo(5);
  function Operations(coef: any) {
    return {
      sum: (...args: any[]) => {
        console.log('args = ', args);
        console.log('arguments[0] = ', arguments[0]);
        console.log('coef = ', coef);
        return arguments[0] + coef;
      },
    };
  }

  const ops = Operations(0.1);
  console.log('ops.sum(1, 2, 3)= ', ops.sum(1, 2, 3));

  return <View />;
};
