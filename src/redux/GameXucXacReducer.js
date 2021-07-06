const stateDefault = {
  taiXiu: true, // true: Tai (3-11), false: Xiu (12-18)
  mangXucXac: [
    {
      ma: 1,
      hinhAnh: "./images/1.png",
    },
    {
      ma: 1,
      hinhAnh: "./images/1.png",
    },
    {
      ma: 1,
      hinhAnh: "./images/1.png",
    },
  ],
  soBanThang: 0,
  tongLanChoi: 0,
};

const GameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      state.taiXiu = action.taiXiu;
      return { ...state };
    default:
      return { ...state };
  }
};

export default GameXucXacReducer;
