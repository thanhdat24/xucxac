import "./GameXucXac.css";

import React, { Component } from "react";

import InFoGame from "./InFoGame";
import XucXac from "./XucXac";

export default class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="game__title text-center mt-5">Game đổ xúc xắc</div>
        <div className="row text-center ">
          <div className="col-4">
            <button className="game__button">Tài</button>
          </div>
          <div className="col-4">
            <XucXac />
          </div>
          <div className="col-4">
            <button className="game__button">Xỉu</button>
          </div>
        </div>
        <div className="infoGame text-center">
          <InFoGame />
        </div>
      </div>
    );
  }
}
