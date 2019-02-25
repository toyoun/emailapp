import { createSlice } from 'redux-starter-kit';

const emailsSlice = createSlice({
  initialState: [],
  reducers: {
    createEmail(state, action) {
      state.push(action.payload);
    },
  },
});

const { actions, reducer } = emailsSlice;
export const { createPost, updatePost, deletePost } = actions;
export default reducer;
