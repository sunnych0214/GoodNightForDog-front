import React, { Component, FormEvent, ChangeEvent } from "react";
import styles from "./missingDetail.module.scss";
import classNames from "classnames/bind";
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface MissingDogProps{
    _id : number;       // 아이디
}

interface MissingDogStates{
    missing : {
        missing_id : number;    // 실종게시글 아이디
        category_id : number;   // 카테고리 아이디
                                // 1:주인을 찾습니다 2: 반려견을 찾습니다
        user_id :number;        // 유저 프라이머리 오토인크리먼트. 아이디는 조인으로
        missing_dog_name : string;      // 유기견 이름
        missing_dog_color : string;     // 유기견 색
        missing_dog_age : number;       // 유기견 나이
        missing_dog_weight : number;    // 유기견 몸무게
        missing_dog_kind : string;      // 견종
        missing_dog_sex : string;       // 성별
        missing_dog_comment : string;   // 특이사항
        missing_dog_special : string;   // 특징
        missing_dog_date : Date;        // 실종일자
        missing_dog_place : string;     // 실종장소
        missing_dog_reward : string;    // 사례금
        missing_dog_image : string[];   // 이미지
        missing_dog_content : string;   // 추가 코멘트
        missing_dog_registered : Date;  // 작성일
        missing_status : number;        // 게시글 상태
        missing_dog_status : number;    // 강아지 상태
        missing_delete_date? : Date;     // 게시글 중단(삭제)일
        missing_update_date? : Date;     // 게시글 수정일
        missing_create_date : Date;     // 게시글 작성일
    };
}



class MissingdetailModule extends Component<MissingDogProps,MissingDogStates>{
    constructor(props:MissingDogProps){
        super(props);

        // 데이터 받아오기
        this.state = mockupData;
    }

    render(){
        const { _id } = this.props;
        const { missing } = this.state;

        return(
            <div>
                this is missing detail : { _id }
                <table>
                    <thead>
                    <tr>
                        <td>이름</td>
                        <td>{missing.missing_dog_name}</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>견종</td>
                        <td>{missing.missing_dog_kind}</td>
                    </tr>
                    <tr>
                        <td>나이</td>
                        <td>{missing.missing_dog_age}</td>
                    </tr>
                    <tr>
                        <td>털 색깔</td>
                        <td>{missing.missing_dog_color}</td>
                    </tr>
                    <tr>
                        <td>성별</td>
                        <td>{missing.missing_dog_sex}</td>
                    </tr>

                    <tr>
                        <td>(공백)</td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>실종 장소</td>
                        <td>{missing.missing_dog_place}</td>
                    </tr>
                    <tr>
                        <td>실종 일자</td>
                        <td>
                            
                            </td>
                    </tr>
                    <tr>
                        <td>사례금</td>
                        <td>{missing.missing_dog_reward}</td>
                    </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>
            </div>
        );
    }
}

export default MissingdetailModule;

const mockupData : MissingDogStates = {
    missing : {
        missing_id : 1,
        category_id : 2,
        user_id :1,
        missing_dog_name : '보미',
        missing_dog_color : '흰색',
        missing_dog_age : 10,
        missing_dog_weight : 5.5,
        missing_dog_kind : '믹스',
        missing_dog_sex : '남',
        missing_dog_comment : '코가 분홍색입니다',
        missing_dog_special : '분홍색 코, 사람 경계, 눈이 살짝 탁함',
        missing_dog_date : new Date(),
        missing_dog_place : '서울특별시 양천구, 목동문화체육센터 앞',
        missing_dog_reward : '100만원',
        missing_dog_image : [
            'images/missing1.png'
        ],
        missing_dog_content : '사랑스러운 10살 할아버지 멍멍 입니다. 말티즈와 슈나우저를 닮았어요. 사람을 경계하니 제보만 해주셔도 감사하겠습니다.',
        missing_dog_registered : new Date(),
        missing_status : 0,
        missing_dog_status : 0,
        missing_delete_date : new Date(),
        missing_update_date : new Date(),
        missing_create_date : new Date(),
    }
};