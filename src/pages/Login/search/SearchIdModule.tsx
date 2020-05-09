import React, { Component } from 'react';
import styles from "./SearchId.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

class SearchIdModule extends Component{
    render(){
        return(
        <div className={cx('box-little')}>
            <h2 className={cx('box-little-title')}>아이디 찾기</h2><p/>
            <input type="text" className={cx('input-box')}/><br/><p/>
            <input type="submit" value="로그인" className={cx('submit-login')}/>
        </div>
        );
    }
}

export default SearchIdModule;