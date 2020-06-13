import React, { Component, ChangeEvent } from 'react';
import styles from './RegisterPage.module.scss';
import classnames from 'classnames/bind';

const idRegExp = /^[A-za-z0-9]{5,20}/g;
const pwRegExp = /^[A-za-z0-9]{8,20}/g;
const cx = classnames.bind(styles);

interface RegisterInfo {
    email : string;
    id : string;
    idReg : boolean;
    pw : string;
    pwReg : boolean;
    pwConfirm : boolean;
}

class RegisterPage extends Component<RegisterInfo> {
    state:RegisterInfo = {} as RegisterInfo;

    onIdChange = (e:ChangeEvent<HTMLInputElement>) => {
        if(idRegExp.test(e.target.value)) {
            // 정규식 통과
            this.setState(state => ({id:e.target.value}));
            this.setState({idReg:true});
        } else {
            // 정규식 불통과
            this.setState({idReg:false});
        }
    }

    idDuplicate = (e:ChangeEvent<HTMLInputElement>) => {
            // DB 체크
    }

    onPwChange = (e:ChangeEvent<HTMLInputElement>) => {
        const pwVal = e.target.value;

        if(pwRegExp.test(pwVal)) {
            // 정규식 통과
            this.setState(state => ({pw:pwVal}));
            this.setState({pwReg:true});
        } else {
            // 정규식 불통과
            this.setState({pwReg:false});
        }

        this.setState({pwConfirm:false});
    }

    isPwEqaul = (e:ChangeEvent<HTMLInputElement>) => {
        if(this.state.pw === e.target.value) {
            this.setState({pwConfirm:true});
        } else {
            this.setState({pwConfirm:false});
        }
    }


    render() {
        return (
            <div className={cx('container')}>
                <div className={cx('register-box')}>
                    <h2 className={cx('register-title')}>회원가입</h2>

                    <form className={cx('register-form')}>
                        <span className={cx('register-label')}>이메일</span><br/>
                        <input className={cx('register-input')} type="email" name="email" placeholder="이메일" required/> <p/>

                        <span className={cx('register-label')}>아이디</span><br/>
                        <input className={cx('register-input-id')} name="id" placeholder="아이디" onChange={this.onIdChange} required/>
                        <button className={cx('btn-duplicate-check')}>중복체크</button><br/>
                        { this.state.idReg ? <span></span> :
                            <span className={cx('Reg-Nonpass')}>아이디는 5글자 이상이여야 하며 영문과 숫자를 반드시 포함해야 합니다.</span> }
                        <p/>

                        <span className={cx('register-label')}>비밀번호</span><br/>
                        <input className={cx('register-input')} name="pw" type="password" placeholder="비밀번호" onChange={this.onPwChange} required/>
                        { this.state.pwReg ? <span></span> :
                            <span className={cx('Reg-Nonpass')}>비밀번호는 8글자 이상이여야 하며 영문과 숫자를 반드시 포함해야 합니다.</span> }
                        <p/>

                        <span className={cx('register-label')}>비밀번호 확인</span><br/>
                        <input className={cx('register-input')} name="pwConfirm" type="password" placeholder="비밀번호 확인" onChange={this.isPwEqaul} required/>
                        { this.state.pwConfirm ? <span></span> :
                            <span className={cx('Reg-Nonpass')}>비밀번호가 일치하지 않습니다.</span> }
                        <p/>

                        <input type="submit" value="회원가입" className={cx('register-submit')}/>
                    </form>
                </div>
            </div>
        );
    }

}

export default RegisterPage;