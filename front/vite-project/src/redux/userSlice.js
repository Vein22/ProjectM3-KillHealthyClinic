import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = createSelector(
  (state) => state.user,
  (user) => user.value
);

export default userSlice.reducer;