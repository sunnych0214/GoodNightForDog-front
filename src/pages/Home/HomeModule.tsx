import React, { Component } from 'react';
import styles from './Home.module.scss';
import classnames from 'classnames/bind';

import { Modal } from '../../components';

// tslint:disable-next-line:no-empty-interface
interface IRecipeProps { }

interface IRecipeState {
  visible: boolean;
}

const cx = classnames.bind(styles);

class HomeModule extends Component<IRecipeProps, IRecipeState> {

  constructor(props: IRecipeProps) {
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