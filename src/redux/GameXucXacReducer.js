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
    case "PLAY_GAME": {
      // B1: xử lý random xúc xắc
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // Mỗi lần lặp random ra số ngẫu nhiên từ 1 -> 6
        let soNgauNhien = Math.floor(Math.random() * 6) + 1;
        // Tạo ra 1 đối tượng xúc xắc từ số ngẫu nhiên
        let xucXacNgauNhien = {
          ma: soNgauNhien,
          hinhAnh: `./images/${soNgauNhien}.png`,
        };
        // Push vào mảng xúc xắc ngẫu nhiên
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      // Xử lý tổng số lần chơi
      state.tongLanChoi += 1;
      // Xử lý bàn thắng
      let tongSoDiem = mangXucXacNgauNhien.reduce((tongDiem, xucXac, index) => {
        return (tongDiem += xucXac.ma);
      }, 0);

      if (
        (tongSoDiem > 11 && state.taiXiu) ||
        (tongSoDiem <= 11 && state.taiXiu !== true)
      )
        state.soBanThang += 1;

      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default GameXucXacReducer;
