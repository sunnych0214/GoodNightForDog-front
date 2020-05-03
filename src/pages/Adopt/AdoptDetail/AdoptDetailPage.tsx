import React, { Component } from 'react';
import styles from './AdoptDetailPage.module.scss';
import classnames from 'classnames/bind';
import { AdoptModel } from '../../../models/interfaces';

const cx = classnames.bind(styles);

interface AdoptDetailPropsModel {
    match: {
        params: {
            id: string
        }
    };
}

interface AdoptDetailStateModel {
    adopt: AdoptModel;
}

class AdoptDetailPage extends Component<AdoptDetailPropsModel, AdoptDetailStateModel> {
    constructor(props: Readonly<AdoptDetailPropsModel>) {
        super(props);

        this.state = {
            adopt: {} as AdoptModel,
        };
    }

    componentDidMount() {
        const id: string = this.props.match.params.id;

        // 위 id를 통해 http 통신해 유기견 정보를 가져온다.
        const adoptItem: AdoptModel = mockupAdoptItem;
        adoptItem.dog_info_id = id;

        this.setState({
            adopt: adoptItem
        });
    }

    render() {
        const { adopt }: { adopt: AdoptModel } = this.state;

        const comment: string = `아이의 가족이 되어주시겠습니까?`;
        const subComment = (<div>
            상상은 반드시 반복 행위를 동반한다. 자유의지를 가진 우리는 구조 속에서 정신적,<br />
            시각적 운동을 멈추지 않고, 발견하기를 기다린다. 상상은 그렇게 실현된다.<br /><br />
            이 아이의 가족이 되어주세요!
        </div>);

        return (<div className={cx('container')}>
            <div className={cx('image-slide')}>
                이미지 슬라이드 들어가는 공간
            </div>

            <div className={cx('comment')}>
                {comment}
            </div>

            <div className={cx('info')}>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>공고번호</span>
                    <span className={cx('content')}>{adopt.dog_id}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>접수일</span>
                    <span className={cx('content')}>{adopt.create_date}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>공고시작일</span>
                    <span className={cx('content')}>{adopt.dog_id}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>공고종료일</span>
                    <span className={cx('content')}>{adopt.euthanasia_date}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>나이</span>
                    <span className={cx('content')}>{adopt.age}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>체중(kg)</span>
                    <span className={cx('content')}>{adopt.weight}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>색상</span>
                    <span className={cx('content')}>{adopt.color_cd}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>품종</span>
                    <span className={cx('content')}>{adopt.kind_cd}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>성별</span>
                    <span className={cx('content')}>{adopt.dog_id}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>접종</span>
                    <span className={cx('content')}>{adopt.inoculation_status}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>발견장소</span>
                    <span className={cx('content')}>{adopt.happen_place}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>유기번호</span>
                    <span className={cx('content')}>{adopt.dog_id}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>특이사항</span>
                    <span className={cx('content')}>{adopt.notice_comment}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>특징</span>
                    <span className={cx('content')}>{adopt.special_mark}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>보호소이름</span>
                    <span className={cx('content')}>{adopt.care_nm}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>보호소 전화번호</span>
                    <span className={cx('content')}>{adopt.care_tel}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>담당자</span>
                    <span className={cx('content')}>{adopt.change_nm}</span>
                </div>
                <div className={cx('item', 'col-6')}>
                    <span className={cx('title')}>담당자 연락처</span>
                    <span className={cx('content')}>{adopt.officetel}</span>
                </div>
            </div>

            <div className={cx('sub-comment')}>
                {subComment}
            </div>

            <div className={cx('buttons')}>
                <button>연락</button>
                <button>입양 / 임보 신청</button>
            </div>
        </div>);
    }
}

export default AdoptDetailPage;

const mockupAdoptItem: AdoptModel = {
    dog_info_id: '2',
    color_cd: '흰/갈/검',
    age: '9개월 추정',
    weight: '6.3kg',
    kind_cd: '믹스견',
    notice_comment: '강아지를 굉장히 좋아함',
    neuter_yn: 'y',
    special_mark: '툭하면 누움',
    care_nm: '군산 보호소',
    care_tel: '02-0000-0000',
    care_addr: '군산 보호소',
    org_nm: '김혜진 기관',
    change_nm: '김혜진',
    officetel: '010-4741-7138',
    happen_place: '서울 금천구',
    inoculation_status: '5차까지 완료',
    euthanasia_date: '미정',
    dog_id: '23123',
    create_date: new Date().toString(),
    update_date: new Date().toString()
};
