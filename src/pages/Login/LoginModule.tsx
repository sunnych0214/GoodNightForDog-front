import React, { Component, FormEvent, ChangeEvent } from "react"
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const testIdPw = {
    id : 'testid1234',
    pw : 'testpw1234'
}

interface LoginInfo {
    id : string;
    pw : string;
}

interface UserInfo {
    name : string;
}

class LoginModule extends Component<UserInfo,LoginInfo>{
    constructor(props : UserInfo){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            id : '',
            pw : ''
        }
    }
    
    

    onChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        //todo : set state when on change
    }


    onSubmit = (e:FormEvent<HTMLFormElement>):void => {
        const { id, pw } = this.state;
        //todo : id,pw check, print red error line
        if(id !== testIdPw.id){
            //id not exist
        }
        else if(pw !== testIdPw.pw){
            //worng password
        }
    }

    render(){
        const id = this.state.id;
        const pw = this.state.pw;
        
        return(
            <div className={cx('login-box')}>
                <h2 className={cx('login-title')}>로그인</h2><p/>
                <form onSubmit={this.onSubmit} className={cx('form-login')}>
                    <span className={cx('input-info')}>아이디</span><br/>
                    <input type="text" className={cx('input-box')} value={id} onChange={this.onChange}/><br/><p/>

                    <span className={cx('input-info')}>비밀번호</span><br/>
                    <input type="password" className={cx('input-box')} value={pw} onChange={this.onChange}/><br/>

                    <span className={cx('span-little float-left')}>
                        <Link to="/login/searchID">아이디</Link>
                        &nbsp;·&nbsp;
                        <Link to="/login/searchPW">비밀번호</Link>
                        찾기
                    </span>
                    <span className={cx('span-little float-right')}>
                        <Link to="/signin">회원가입</Link>
                    </span><br/>
                    <span className={cx('span-little')}>

                    </span>

                    <input type="submit" value="로그인" className={cx('submit-login')}/>
                </form>
            </div>
        );
    }
}

export default LoginModule;