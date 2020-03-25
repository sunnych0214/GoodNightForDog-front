import React, {Component} from 'react';
import styles from './Home.module.scss';
import classnames from 'classnames/bind';

import { AdoptItem } from 'components';
import { Slide } from 'react-slideshow-image';
import { Link } from 'react-router-dom';

const mockupData = {
  slideImages: ['images/slide1.png', 'images/slide2.png'],
  euthanasiaDogs: [
    {
      _id: '0',
      dDay: 5,
      thumbnail: 'images/thumbnail.png',
      species: '믹스견',
      gender: '남',
      color: '흰&갈&검',
      age: '8개월 추정',
      weight: '6KG',
      location: '서울특별시 금천구'
    }, {
      _id: '1',
      dDay: 5,
      thumbnail: 'images/thumbnail.png',
      species: '믹스견',
      gender: '남',
      color: '흰&갈&검',
      age: '8개월 추정',
      weight: '6KG',
      location: '서울특별시 금천구'
    }, {
      _id: '2',
      dDay: 5,
      thumbnail: 'images/thumbnail.png',
      species: '믹스견',
      gender: '남',
      color: '흰&갈&검',
      age: '8개월 추정',
      weight: '6KG',
      location: '서울특별시 금천구'
    }, {
      _id: '3',
      dDay: 5,
      thumbnail: 'images/thumbnail.png',
      species: '믹스견',
      gender: '남',
      color: '흰&갈&검',
      age: '8개월 추정',
      weight: '6KG',
      location: '서울특별시 금천구'
    }, {
      _id: '4',
      dDay: 5,
      thumbnail: 'images/thumbnail.png',
      species: '믹스견',
      gender: '남',
      color: '흰&갈&검',
      age: '8개월 추정',
      weight: '6KG',
      location: '서울특별시 금천구'
    }
  ]
};
const cx = classnames.bind(styles);
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
}; // react slide properties

class HomeModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideImages: mockupData.slideImages,
      euthanasiaDogs: mockupData.euthanasiaDogs
    };
  }

  render () {
    return (
      <div className={cx('container')}>
        <div className={cx('slide-container')}>
          <Slide {...properties}>
            {
              this.state.slideImages.map((image, index) => <div className={cx('each-slide')} key={index}>
                <img className={cx('image')} src={image} alt="slide" />
              </div>)
            }
          </Slide>
        </div>

        <div className={cx('divider')}></div>

        <div className={cx('dog-list-wrap')}>
          <div className={cx('header')}>
            <span className={cx('title')}>안락사 임박인 아이들</span>
            <Link to="/adopt"><span className={cx('more')}>더보기 ></span></Link>
          </div>
          <div className={cx('dog-list-container')}>
            {
              this.state.euthanasiaDogs.map(dog => <div key={dog._id} className={cx('dog')}>
                <AdoptItem dog={dog} />
              </div>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default HomeModule;