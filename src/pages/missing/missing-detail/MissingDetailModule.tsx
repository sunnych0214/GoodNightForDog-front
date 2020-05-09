import React, { Component, FormEvent, ChangeEvent } from "react";
import styles from "./missingDetail.module.scss";
import classNames from "classnames/bind";
import { MissingModel } from '../../../models/interfaces';
import { Link } from 'react-router-dom';
import moment from 'moment';

const cx = classNames.bind(styles);

interface MissingDogProps{
    _id : number;       // 아이디
}

interface MissingDogState{
    missing : MissingModel;
}



class MissingdetailModule extends Component<MissingDogProps,MissingDogState>{
    constructor(props:MissingDogProps){
        super(props);

        // 데이터 받아오기
        this.state = {
            missing : {} as MissingModel,
        };
    }
    componentDidMount() {
        const MissingTestData : MissingModel = mockupData;
        MissingTestData.missing_id = this.props._id;
        this.setState({
            missing : MissingTestData
        });
    }

    render(){
        const { _id } = this.props;
        const { missing } : { missing : MissingModel } = this.state;

        return(
            <div className={cx('container')}>
                <div className={cx('info')}>
                    <div className={cx('item')}>
                            <span className={cx('title')}>이름</span>
                            <span className={cx('content')}>{missing.missing_dog_name}</span>
                    </div>
                    <div className={cx('item')}>
                            <span className={cx('title')}>견종</span>
                            <span className={cx('content')}>{missing.missing_dog_kind}</span>
                    </div>
                    <div className={cx('item')}>
                            <span className={cx('title')}>나이</span>
                            <span className={cx('content')}>{missing.missing_dog_age}살</span>
                    </div>
                    <div className={cx('item')}>
                            <span className={cx('title')}>털 색깔</span>
                            <span className={cx('content')}>{missing.missing_dog_color}</span>
                    </div>
                    <div className={cx('item')}>
                            <span className={cx('title')}>성별</span>
                            <span className={cx('content')}>{missing.missing_dog_sex}</span>
                    </div>
                    <br/>
                    <div className={cx('item')}>
                            <span className={cx('title')}>실종 장소</span>
                            <span className={cx('content')}>{missing.missing_dog_place}</span>
                    </div>
                    <div className={cx('item')}>
                            <span className={cx('title')}>실종 일자</span>
                            <span className={cx('content')}>{moment(missing.missing_dog_date).format('YYYY.MM.DD')}</span>
                    </div>
                    <div className={cx('item')}>
                            <span className={cx('title')}>사례금</span>
                            <span className={cx('content')}>{missing.missing_dog_reward}</span>
                    </div>
                    <br/><br/>
                    <div>
                        <span className={cx('comment')}>{missing.missing_dog_content}</span>
                    </div>
                    <br/><br/>
                    <div>
                        <input type='button' value='연락' className={cx('button-contact')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default MissingdetailModule;

const mockupData : MissingModel = {
        missing_id : -1,
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
};