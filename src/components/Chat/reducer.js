import CONSTANTS from "../../constants";
const {CHAT_TYPES} = CONSTANTS;

const reducer = (state, action) => {
  switch (action.type) {
    case CHAT_TYPES.DATA_ALL_RESPONSE_SUCCESS: {
      const {data: { users, messages }} = action;
      const usersMap = new Map();
      users.forEach((user) => usersMap.set(user.id, user));
      const messagesWithAuthor = messages.map((message) => ({
        ...message,
        author: usersMap.get(message.authorId),
      }));
      const newState = {
        ...state,
        users,
        messages: messagesWithAuthor,
      };
      return newState;
    }
    case CHAT_TYPES.DATA_ALL_RESPONSE_ERROR: {
      const {data: { error}} = action;
      const newState = {
        ...state,
        error
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};
export default reducer;