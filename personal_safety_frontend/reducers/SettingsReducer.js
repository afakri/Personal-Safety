const initialState = {
  time: { hours: 8, minutes: 30 },
  questAns: [{ question: "who was your childhood friend", answer: "no one" }],
  numberCheckins: 1,
};

function SettingsReducer(state = initialState, action) {
  switch (action.type) {
    case "SAVE_SETTINGS":
      return action.payload;
    default:
      return state;
  }
}

export default SettingsReducer;
