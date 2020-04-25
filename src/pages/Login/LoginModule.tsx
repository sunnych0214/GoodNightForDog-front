import React, { Component, FormEvent, ChangeEvent } from "react"
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const testIdPw = {
    id : 'test',
    pw : 'test1234'
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

        this.onIdChange = this.onIdChange.bind(this);
        this.onPwChange = this.onPwChange.bind(this);

        this.state = {
            id : '',
            pw : ''
        }
    }
    
    

    onIdChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({id:e.target.value});
    }
    
    onPwChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({pw:e.target.value});
    }


    onSubmit = (e:FormEvent<HTMLFormElement>):void => {
        const { id, pw } = this.state;
        console.log("id : "+id+" pw : "+pw);

        //todo : id,pw check, print red error line
        if(id !== testIdPw.id){
            //id not exist
            alert("존재하지 않는 아이디입니다!");
        }
        else if(pw !== testIdPw.pw){
            //password wrong
            alert("비밀번호를 다시 한 번 확인해 주세요");
        }
    }

    render(){
        const { id, pw } = this.state;
        const { onIdChange, onPwChange } = this;
        
        return(
            <div className={cx('box-little')}>
                <h2 className={cx('box-little-title')}>로그인</h2><p/>
                <form onSubmit={this.onSubmit} className={cx('form-login')}>
                    <span className={cx('input-info')}>아이디</span><br/>
                    <input type="text" className={cx('input-box')} value={id} onChange={onIdChange}/><br/><p/>

                    <span className={cx('input-info')}>비밀번호</span><br/>
                    <input type="password" className={cx('input-box')} value={pw} onChange={onPwChange}/><br/>

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