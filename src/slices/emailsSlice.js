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
    deleteEmail(state, action) {
      return {
        ...state,
        messages: state.messages.filter((message) => Number(message.id) !== action.payload)
      }
    },
    readEmail(state, action) {
      state.messages.forEach((message) => {
        if (message.id === action.payload) {
          message.read = true;
          console.log(message.read)
        }
      })
    }
  },
});

const { actions, reducer } = emailsSlice;
export const { toggleFetch, createEmail, deleteEmail, readEmail } = actions;
export default reducer;
