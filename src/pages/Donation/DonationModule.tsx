import React, { Component } from "react";
import style from "./Donation.module.scss";
import classNames from "classnames/bind";
import { DonationPreviewModel } from "./../../models/donation";
import no_img from "./../../assets/imgs/no-img.png";

const cx = classNames.bind(style);

interface Props {}

interface State {
  donations: DonationPreviewModel[];
  today_donation: {
    person_cnt: number;
    total_money: number;
  };
}

class DonationModule extends Component<Props, State> {
  state: State = {
    donations: [
      {
        title: "뿌요, 사람보다 강아지를 좋아하는 강아지",
        goal_money: 45488500,
        now_money: 3434000,
        thumb: "/images/thumbnail.png",
      },
      {
        title: "뿌요, 사람보다 강아지를 좋아하는 강아지",
        goal_money: 45488500,
        now_money: 3434000,
        thumb: "",
      },
      {
        title: "뿌요, 사람보다 강아지를 좋아하는 강아지",
        goal_money: 45488500,
        now_money: 3434000,
        thumb: "",
      },
    ],
    today_donation: {
      person_cnt: 20,
      total_money: 233000,
    },
  };

  render() {
    return (
      <div className={cx("donation-container")}>
        <div className={cx("donation-total")}>
          모금 진행 중: <span>{this.state.donations.length}</span> 개
        </div>
        <div className={cx("today-donation")}>
          <div className={cx("today")}>today</div>
          {this.state.today_donation.person_cnt}명이{" "}
          {this.state.today_donation.total_money}원을 기부하였습니다.
        </div>
        <div className={cx("donation-list")}>
          {this.state.donations.map((value) => {
            return (
              <div className={cx("item")}>
                <div className={cx("thumb")}>
                  <img src={value.thumb ? value.thumb : no_img} alt="" />
                </div>
                <div className={cx("item-wrapper")}>
                  <div className={cx("title")}>{value.title}</div>
                  <div className={cx("progress")}>
                    <div
                      className={cx("percent")}
                      style={{ width: value.goal_money / value.now_money }}
                    ></div>
                  </div>
                  <div className={cx("goal")}>
                    <span>
                      {(value.goal_money / value.now_money).toFixed(3)}%
                    </span>
                    <span>{value.goal_money.toLocaleString()}원</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={cx("apply-wrapper")}>
          <button className={cx("apply")}>
            Apply
          </button>
        </div>
      </div>
    );
  }
}

export default DonationModule;
