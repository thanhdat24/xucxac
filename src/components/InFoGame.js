import React, { Component } from "react";

import { connect } from "react-redux";

class InfoGame extends Component {
  render() {
    return (
      <div className="info">
        <div className="info__select">
          Bạn chọn:{" "}
          <span className="text-danger">
            {this.props.taiXiu ? "Tài" : "Xỉu"}
          </span>
        </div>
        <div className="info__goals">
          Số bàn thắng:{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div className="info__total">
          Tổng số bàn chơi:{" "}
          <span className="text-primary">{this.props.tongLanChoi}</span>
        </div>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taiXiu: state.GameXucXacReducer.taiXiu,
    soBanThang: state.GameXucXacReducer.soBanThang,
    tongLanChoi: state.GameXucXacReducer.tongLanChoi,
  };
};
export default connect(mapStateToProps)(InfoGame);
