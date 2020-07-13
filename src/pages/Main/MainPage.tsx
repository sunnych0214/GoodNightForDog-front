import React from 'react';
import styles from './MainPage.module.scss';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { AdoptItem } from '../../components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const cx = classnames.bind(styles);

const mockupData = {
    slides: [{
        title: '사이트를 통해\n입양된 아이들',
        content: '하룻강아지를 통해 소중한 인연을 맺고\n행복한 일상을 살아가는 반려견들의 이야기',
        image: 'images/slide1.png',
    }, {
        title: '사이트를 통해\n입양된 아이들',
        content: '하룻강아지를 통해 소중한 인연을 맺고\n행복한 일상을 살아가는 반려견들의 이야기',
        image: 'images/slide2.png'
    }],
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
      }
    ]
};

const MainPage = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('slide-container')}>
                <div id="carouselExampleIndicators" className={cx('carousel', 'slide')} data-ride="carousel">
                    <ol className={cx('carousel-indicators', 'pager-box')}>
                        {
                            mockupData.slides.map((_, index: number) => <li key={`indicators_index_${index}`} data-target="#carouselExampleIndicators" data-slide-to={index} className={cx('pager', index === 0 && 'active', index === 0 && 'active-pager')}></li>)
                        }
                    </ol>

                    <div className={cx('carousel-inner')}>
                        {
                            mockupData.slides.map((slide, index) => <div key={`slide_content_${index}`} className={cx('carousel-item', index === 0 && 'active')}>
                                <div className={cx('slide-item')}>
                                    <div className={cx('slide-content')}>
                                        <div className={cx('content-box')}>
                                            <div className={cx('title')}>
                                                {slide.title.split('\n').map((text: string, i: number) => <div key={`slide_title_${i}`}>{text}</div>)}
                                            </div>
                                            <div className={cx('content')}>
                                                {slide.content.split('\n').map((text: string, i: number) => <div key={`slide_content_${i}`}>{text}</div>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('slide-img-box')}>
                                        <img className={cx('d-block', 'slide_image')} src={slide.image} alt="slide_image"></img>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                    <div className={cx('arrow-box')}>
                        <a className={cx('control-btn')} href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <div className={cx('icon')}>
                                <BsChevronLeft></BsChevronLeft>
                                <span className={cx('sr-only')}>Previous</span>
                            </div>
                        </a>
                        <a className={cx('control-btn')} href="#carouselExampleIndicators" role="button" data-slide="next">
                            <div className={cx('icon')}>
                                <BsChevronRight></BsChevronRight>
                                <span className={cx('sr-only')}>Next</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

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
