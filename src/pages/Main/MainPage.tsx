import React from 'react';
import styles from './MainPage.module.scss';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AdoptItem } from '../../components';

const cx = classnames.bind(styles);

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

const MainPage = () => {

    return (
        <div className={cx('container')}>
            <div className={cx('side-container')}>
                <div id="carouselExampleIndicators" className={cx('carousel', 'slide')} data-ride="carousel">
                    <ol className={cx('carousel-indicators')}>
                        {
                            mockupData.slideImages.map((_, index: number) => <li key={`indicators_index_${index}`} data-target="#carouselExampleIndicators" data-slide-to={index} className={cx(index === 0 && 'active')}></li>)
                        }
                    </ol>
                    <div className={cx('carousel-inner')}>
                        {
                            mockupData.slideImages.map((imageSrc: string, index: number) => <div key={`slide_image_${index}`} className={cx('carousel-item', index === 0 && 'active')}>
                                <img className={cx('d-block', 'slide_image')} src={imageSrc} alt="slide_image"></img>
                            </div>)
                        }
                    </div>
                    <a className={cx('carousel-control-prev', 'control-btn')} href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <div className={cx('icon')}>
                            <span className={cx('carousel-control-prev-icon')} aria-hidden="true"></span>
                            <span className={cx('sr-only')}>Previous</span>
                        </div>
                    </a>
                    <a className={cx('carousel-control-next', 'control-btn')} href="#carouselExampleIndicators" role="button" data-slide="next">
                        <div className={cx('icon')}>
                            <span className={cx('carousel-control-next-icon')} aria-hidden="true"></span>
                            <span className={cx('sr-only')}>Next</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className={cx('divider')}></div>

            <div className={cx('dog-list-wrap')}>
                <div className={cx('header')}>
                    <span className={cx('title')}>안락사 임박인 아이들</span>
                    <Link to="/adopt"><span className={cx('more')}>더보기 ></span></Link>
                </div>
                <div className={cx('dog-list-container')}>
                    {
                        mockupData.euthanasiaDogs.map(dog => <div key={dog._id} className={cx('dog')}>
                            <AdoptItem dog={dog} />
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MainPage;
