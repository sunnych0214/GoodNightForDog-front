import React from 'react';
import styles from './RegisterPage.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

const RegisterPage = () => {
    return (
        <div className={cx('container')}>
            <h2>회원가입</h2>

            <div className={cx('label')}>이메일</div>
            <div>
                <input name="email" placeholder="이메일"/> 
            </div>

            <div className={cx('label')}>아이디</div>
            <div>
                <input name="usrId" placeholder="아이디"/> 
            </div>

            <div className={cx('label')}>비밀번호</div>
            <div>
                <input name="passwd" type="password" placeholder="비밀번호"/> 
            </div>

            <div className={cx('label')}>비밀번호 확인</div>
            <div>
                <input name="passwd" type="password" placeholder="비밀번호 확인"/> 
            </div>
            
            <button className={cx('btn', 'register')}>가입완료</button>
        </div>
    )
}

export default RegisterPage;