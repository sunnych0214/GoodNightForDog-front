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
    }
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
        const { name, uid } = this.state.userInfo;

        return (<div>
            <div className={cx('user-info-box')}>
                <div className={cx('profile')}>
                    <div className={cx('avatar')}>
                        <img src="images/slide1.png" alt="profile_image"></img>
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
        </div>);
    }

}

export default MyPage;

const mockupUserData = {
    name: '혜진',
    uid: 'hyejin'
}