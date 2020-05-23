import React, { Component } from 'react';
import styles from './MyPage.module.scss';
import classnames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classnames.bind(styles);

interface MyPageProps {

}

interface MyPageState {
    userInfo: {
        name: string;
        uid: string;
        image: string;
        recently_viewing: {
            _id: string;
            image: string;
            name: string;
        }[];
    };
}

class MyPage extends Component<MyPageProps, MyPageState> {
    constructor(props: Readonly<MyPageProps>) {
        super(props);

        this.state = { userInfo: {} } as MyPageState;
    }

    /**
     * 페이지 진입 시 유저의 정보를 가져온다.
     */
    componentDidMount() {
        this.setState({ userInfo: mockupUserData });
    }

    render() {
        const { image, name, uid, recently_viewing } = this.state.userInfo;

        return (<div>
            <div className={cx('user-info-box')}>
                <div className={cx('profile')}>
                    <div className={cx('avatar')}>
                        <img src={image} alt="profile_image"></img>
                    </div>
                    <div className={cx('user-info')}>
                        <div className={cx('name')}>
                            { name } <span className={cx('uid')}>({ uid })</span>
                        </div>
                        <div className={cx('change-pw')}>
                            <Link to="/change-password">
                                <button>비밀번호 변경</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('button-list')}>
                <button>
                    다시 보고싶은 강이지
                </button>
                <button>
                    입양 신청 현황 확인하기
                </button>
            </div>
            <div className={cx('button-list')}>
                <button>
                    입양 신청서 관리
                </button>
                <button>
                    입양 신청 내역 관리
                </button>
            </div>

            <div className={cx('recently-seen')}>
                <div className={cx('header')}>최근 본 강아지</div>
                <div className={cx('list')}>
                    {
                        recently_viewing && recently_viewing.map((view, index) => <Link to={'adopt/' + view._id } key={'recently_' + index}>
                            <div className={cx('view-item')}>
                                <img src={view.image} alt="view_image"></img>
                                <div className={cx('name')}>{view.name}</div>
                            </div>
                        </Link>)
                    }
                </div>
            </div>
        </div>);
    }

}

export default MyPage;

const mockupUserData = {
    name: '혜진',
    uid: 'hyejin',
    image: 'images/slide1.png',
    recently_viewing: [{
        _id: '1',
        name: '뿌요',
        image: 'images/slide1.png',
    }, {
        _id: '2',
        name: '뿌요',
        image: 'images/slide1.png',
    }]
}