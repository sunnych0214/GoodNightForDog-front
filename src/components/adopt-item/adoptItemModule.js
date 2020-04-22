import React, {Component} from "react";
import styles from "./adoptItem.module.scss";
import classNames from "classnames/bind";

import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const transform = { 'color': '털 색', 'age': '나이', 'weight': '몸무게', 'location': '지역' };

class adoptItemModule extends Component {
  render () {
    const { dog } = this.props;

    return (
      <Link to={'/adopt/' + dog._id}>
        <div className={cx('box')}>
          <div className={cx('d-day')}>
            D - {dog.dDay}
          </div>
          <div className={cx('thumbnail')}>
            <img src={dog.thumbnail} alt="thumbnail" />
          </div>
          <div className={cx('title')}>{dog.species} ({dog.gender})</div>
          {
            ['color', 'age', 'weight', 'location'].map((tag) => <div key={tag} className={cx('item', tag)}>
              <label>{transform[tag]}</label>
              <span>{dog[tag]}</span>
            </div>)
          }
        </div>
      </Link>
    );
  }
}

export default adoptItemModule;
