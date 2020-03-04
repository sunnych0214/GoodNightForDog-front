import React, {Component} from 'react';
import styles from './Home.module.scss';
import classnames from 'classnames/bind';

import { Modal } from "components";

const cx = classnames.bind(styles);

class HomeModule extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };
  }

  toggleModal = () => {
    this.setState({
      visible: !this.state.visible
    });
  }

  render () {
    return (
      <div className={cx('container')}>
        홈
        <button onClick={this.toggleModal}>토글</button>
        <Modal visible={this.state.visible} close={this.toggleModal} />
      </div>
    );
  }
}

export default HomeModule;