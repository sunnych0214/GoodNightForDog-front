import React, { Component } from 'react';
import styles from "./../Login.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class SearchPwModule extends Component{
    render(){
        return(
        <div className={cx('box-little')}>
            <h2 className={cx('box-little-title')}>비밀번호 찾기</h2><p/>
            <div className={cx('comment')}>비밀번호를 찾기 위해 이메일과 아이디를 입력해 주세요.</div><p/>
            <span className={cx('input-info')}>이메일</span><br/>
            <input type="text" className={cx('input-box')}/><br/><p/>
            <span className={cx('input-info')}>아이디</span><br/>
            <input type="text" className={cx('input-box')}/><br/><p/>
            <div className={cx('span-little')}>
                <Link to="/searchId">아이디 찾기</Link>
            </div><br/>
            <input type="submit" value="비밀번호 찾기" className={cx('submit')}/>
        </div>
        );
    }
}

export default SearchPwModule;