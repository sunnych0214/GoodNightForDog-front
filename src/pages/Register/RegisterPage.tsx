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

    // 아이디 Input change 시 호출
    onIdChange = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({ id: e.target.value });
        this.setState({idReg: idRegExp.test(e.target.value)});
    }

    // 아이디 중복 체크
    idDuplicate = (e:ChangeEvent<HTMLInputElement>) => {
        // TODO: api call check
    }

    // 비밀번호 input change 시 호출 -> 비밀번호 형식 및 비밀번호 확인 체크
    onPwChange = (e:ChangeEvent<HTMLInputElement>) => {
        const pwVal = e.target.value;
        const successPW: boolean = pwRegExp.test(pwVal);

        this.setState({ pw: pwVal, pwReg: successPW });
        this.setState({pwConfirm: this.state.pw === e.target.value});
    }

    // 비밀번호와 비밀번호 형식과 같은 지 확인
    isPwEqaul = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({pwConfirm: this.state.pw === e.target.value});
    }

    register(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();

        // TODO: 회원가입 api call하는 로직 필요
    }

    render() {
        return (
            <div className={cx('container')}>
                <div className={cx('register-box')}>
                    <h2 className={cx('register-title')}>회원가입</h2>

                    <form className={cx('register-form')} onSubmit={this.register.bind(this)}>
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