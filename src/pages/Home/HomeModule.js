import React, {Component} from 'react';
import styles from './Home.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class HomeModule extends Component {
  render () {
    return (
      <div className={cx('container')}>
        홈
      </div>
    );
  }
}

export default HomeModule;