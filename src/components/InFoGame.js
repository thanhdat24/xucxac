import React, { Component } from "react";

export default class InfoGame extends Component {
  render() {
    return (
      <div className="info">
        <div className="info__select">
          Bạn chọn: <span className="text-danger">Xỉu</span>
        </div>
        <div className="info__goals">
          Số bàn thắng: <span className="text-success">1</span>
        </div>
        <div className="info__total">
          Tổng số bàn chơi: <span className="text-primary">3</span>
        </div>
        <button className="info__button">Play game</button>
      </div>
    );
  }
}
