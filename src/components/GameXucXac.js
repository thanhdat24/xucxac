import "./GameXucXac.css";

import React, { Component } from "react";

import InFoGame from "./InFoGame";
import XucXac from "./XucXac";
import { connect } from "react-redux";

class GameXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="game__title text-center mt-5">Game đổ xúc xắc</div>
        <div className="row text-center ">
          <div className="col-4">
            <button
              onClick={() => {
                this.props.datCuoc(true);
              }}
              className="game__button"
            >
              Tài
            </button>
          </div>
          <div className="col-4">
            <XucXac />
          </div>
          <div className="col-4">
            <button
              onClick={() => {
                this.props.datCuoc(false);
              }}
              className="game__button"
            >
              Xỉu
            </button>
          </div>
        </div>
        <div className="infoGame text-center">
          <InFoGame />
          <button
            onClick={() => {
              this.props.playGame();
            }}
            className="info__button"
          >
            Play game
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (taiXiu) => {
      let action = {
        type: "DAT_CUOC",
        taiXiu,
      };
      dispatch(action);
    },

    playGame: () => {
      dispatch({
        type: "PLAY_GAME",
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(GameXucXac);
