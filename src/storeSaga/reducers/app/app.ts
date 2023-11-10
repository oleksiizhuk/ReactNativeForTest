import {createReducer} from '@reduxjs/toolkit';
import {firstAction} from '../../actions';

const initialState: {
  first: number;
} = {
  first: 0,
};

export const app = createReducer(initialState, builder => {
  builder.addCase(firstAction, state => ({
    ...state,
    first: 1,
  }));
});
