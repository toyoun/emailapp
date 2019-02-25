import { createSlice } from 'redux-starter-kit';

const emailsSlice = createSlice({
  initialState: {
    fetching: false,
    messages: [],
  },
  reducers: {
    toggleFetch(state) {
      state.fetching = !state.fetching; // eslint-disable-line no-param-reassign
    },
    createEmail(state, action) {
      state.messages.push(action.payload);
    },
  },
});

const { actions, reducer } = emailsSlice;
export const { toggleFetch, createEmail } = actions;
export default reducer;
