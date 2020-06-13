import React, { Component } from 'react';
import styles from './MissingPage.module.scss';
import classnames from 'classnames/bind';
import { MissingModel } from '../../models/interfaces';
import { Tab, Dropdown, DropdownProps } from 'semantic-ui-react';
import InputRange from 'react-input-range';
import { LOCATIONS } from '../../data';
import { MissingItem } from '../../components';

const cx = classnames.bind(styles);

const MIN_WEIGHT: number = 0;
const MAX_WEIGHT: number = 50;

interface MissingState {
    missings: MissingModel[];   // 실종 list
    locationFilter: string;     // 지역 filter string
    weightRange: RangeModel;    // 몸무게 range
}

// tslint:disable-next-line:no-empty-interface
interface MissingProps {
}

interface RangeModel {
    min: number;
    max: number;
}

class MissingPage extends Component<MissingProps, MissingState> {
    panes = [
        { menuItem: '전체', render: () => {
            return (<div key="tab1">
                { this.renderFilter() }
                { this.renderMissings() }
            </div>);
        }},
        { menuItem: '반려견을 찾아요', render: () => {
            return (<div key="tab2">
                { this.renderFilter() }
                { this.renderMissings() }
            </div>);
        }},
        { menuItem: '주인을 찾아요' , render: () => {
            return (<div key="tab3">
                { this.renderFilter() }
                { this.renderMissings() }
            </div>);
        }},
    ];

    constructor(props: Readonly<MissingProps>) {
        super(props);

        this.state = { weightRange: { min: 0, max: 10 } } as MissingState;
    }

    // 페이지 진입 시 리스트 데이터를 받아오는 작업
    componentDidMount() {
        this.getMissingList();
    }

    /**
     * 실종 리스트를 가져오는 함수
     */
    getMissingList(): void {
        // TODO: Api Call
        this.setState({ missings: missingList });
    }

    changeTab(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        //
    }

    /**
     * 지역 DroptDown 변경
     */
    changeLocation(e: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) {
        if (!data.value) { return; }
        this.setState({ locationFilter: data.value.toString() });

        this.getMissingList();
    }

    renderMissings() {
        return (<div className={cx('missing-list')}>
            { this.state.missings && this.state.missings.map((missing) => <div className={cx('missing-item')}>
                <MissingItem dog={missing}></MissingItem>
            </div>)}
        </div>);
    }

    renderFilter() {
        const { weightRange } = this.state;

        return (<div className={cx('filter')}>
            <div className={cx('range')}>
                <InputRange
                        maxValue={MAX_WEIGHT}
                        minValue={MIN_WEIGHT}
                        formatLabel={value => `${value} kg`}
                        value={weightRange}
                        onChange={(value) => this.setState({ weightRange: value as RangeModel })}
                        onChangeComplete={() => this.getMissingList()} />
            </div>

            <div className={cx('location')}>
                <Dropdown placeholder='지역' search selection options={LOCATIONS}
                    onChange={this.changeLocation.bind(this)}/>
            </div>
        </div>);
    }

    render() {
        return (<div className={cx('wrap')}>
            <div className={cx('header')}>
                <div className={cx('title')}>
                    "소중한 가족을 찾고 있습니다."
                </div>
            </div>

            <div className={cx('container')}>
                <div className={cx('tabs')}>
                    <Tab panes={this.panes} onTabChange={this.changeTab.bind(this)}></Tab>
                </div>
            </div>
        </div>);
    }
}

export default MissingPage;

const missingList: MissingModel[] = [{
    missing_id: 1,
    category_id: 1,
    user_id: 1,
    missing_dog_name: '또자',
    missing_dog_color: '크림색',
    missing_dog_age: 14,
    missing_dog_weight: 11,
    missing_dog_kind: '진도믹스',
    missing_dog_image: [
        'images/thumbnail.png'
    ],
    missing_dog_sex: '여',
    missing_dog_place: '서울시 금천구',
    missing_dog_date: new Date('2020-01-01'),
    missing_dog_reward: '추후 협의'
} as MissingModel, {
    missing_id: 1,
    category_id: 1,
    user_id: 1,
    missing_dog_name: '또자',
    missing_dog_color: '크림색',
    missing_dog_age: 14,
    missing_dog_weight: 11,
    missing_dog_kind: '진도믹스',
    missing_dog_image: [
        'images/thumbnail.png'
    ],
    missing_dog_sex: '여',
    missing_dog_place: '서울시 금천구',
    missing_dog_date: new Date('2020-01-01'),
    missing_dog_reward: '추후 협의'
} as MissingModel, {
    missing_id: 1,
    category_id: 1,
    user_id: 1,
    missing_dog_name: '또자',
    missing_dog_color: '크림색',
    missing_dog_age: 14,
    missing_dog_weight: 11,
    missing_dog_kind: '진도믹스',
    missing_dog_sex: '여',
    missing_dog_image: [
        'images/thumbnail.png'
    ],
    missing_dog_place: '서울시 금천구',
    missing_dog_date: new Date('2020-01-01'),
    missing_dog_reward: '추후 협의'
} as MissingModel];
