import React, { Component } from 'react';
import styles from './AdoptPage.module.scss';
import classnames from 'classnames/bind';
import InputRange from 'react-input-range';
import { Dropdown, Pagination, PaginationProps, DropdownProps } from 'semantic-ui-react';
import { AdoptItem } from '../../components';
import 'react-input-range/lib/css/input-range/input-range.css';

const cx = classnames.bind(styles);

const MIN_WEIGHT: number = 0;
const MAX_WEIGHT: number = 50;

// DropDown Location List
// TODO: List 형식 바꿔야함
const locations = [{
    key: '1',
    text: '서울특별시',
    value: '서울특별시',
}];

interface RangeModel {
    min: number;
    max: number;
}

type SortingType = 'imminent' | 'alphabetically';

// tslint:disable-next-line:no-empty-interface
interface AdoptProps {
}
interface AdoptState {
    weightRange: RangeModel;    // 몸무게 filter range
    adoptFilter: boolean;       // 입양 checkbox flag
    temporaryFilter: boolean;   // 임시보호 checkbox flag
    locationFilter: string;     // 지역 filter string
    sorting: SortingType;       // sorting value
    adoptList: any[];           // 입양 리스트
}

class AdoptPage extends Component<AdoptProps, AdoptState> {
    totalPage: number = 10; // 전체 페이지 count
    activePage: number = 1; // 현재 페이지

    constructor(props: Readonly<AdoptProps>) {
        super(props);

        this.state = {
            weightRange: {
                min: MIN_WEIGHT,
                max: MAX_WEIGHT
            },
            adoptFilter: true,
            temporaryFilter: true,
            sorting: 'imminent',
            locationFilter: '',
            adoptList: [],
        };

        this.changeAdoptOrTemporary.bind(this);
    }

    // 페이지 진입했을 때 리스트를 받아온다.
    componentDidMount() {
        this.getAdoptList();
    }

    /**
     * 입양 리스트를 받아오는 함수
     * 페이지 처음 진입 시 & filter | sorting 변경 시 호출
     */
    getAdoptList(): void {
        this.setState({ adoptList: AdoptList });
        // TODO: Api Call
    }

    /**
     * 지역 DroptDown 변경
     */
    changeLocation(e: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) {
        if (!data.value) { return; }
        this.setState({ locationFilter: data.value.toString() });

        this.getAdoptList();
     }

    /**
     * 입양 / 임시보호 checkbox onChange 때마다 호출되는 함수
     * 입양 / 임시보호 setState & 입양 리스트 다시 get
     */
    changeAdoptOrTemporary(type: 'adopt' | 'temporary'): void {
        if (type === 'adopt') {
            this.setState({ adoptFilter: !this.state.adoptFilter });
        } else {
            this.setState({ temporaryFilter: !this.state.temporaryFilter });
        }

        this.getAdoptList();
    }

    /**
     * Sorting 변경 시
     * @param value 변경 될 sorting value
     */
    changeSorting(value: SortingType): void {
        // 이미 그 sorting이면 api call을 하지 않음
        if (this.state.sorting === value) { return; }
        this.setState({ sorting: value });
        this.getAdoptList();
    }

    /**
     * 페이지 변경 시
     */
    changePage(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: PaginationProps) {
        if (!data.activePage) { return; }
        this.activePage = Number(data.activePage);
        this.getAdoptList();
    }

    render() {
        const { weightRange, adoptFilter, temporaryFilter, sorting } = this.state;

        return (<div className={cx('container')}>
            <div className={cx('filter')}>
                <div className={cx('range')}>
                    <InputRange
                        maxValue={MAX_WEIGHT}
                        minValue={MIN_WEIGHT}
                        formatLabel={value => `${value} kg`}
                        value={weightRange}
                        onChange={(value) => this.setState({ weightRange: value as RangeModel })}
                        onChangeComplete={() => this.getAdoptList} />
                </div>
                <div className={cx('checkboxes')}>
                    <input className={cx('checkbox')} type="checkbox"
                        checked={adoptFilter} onChange={() => this.changeAdoptOrTemporary('adopt')} />입양
                    <input className={cx('checkbox')} type="checkbox"
                        checked={temporaryFilter} onChange={() => this.changeAdoptOrTemporary('temporary')} />임시보호
                </div>
                <div className={cx('location')}>
                    <Dropdown placeholder='지역' search selection options={locations}
                        onChange={this.changeLocation.bind(this)}/>
                </div>
            </div>

            <div className={cx('sorting')}>
                <span className={cx(sorting === 'imminent' && 'checked')}
                    onClick={() => this.changeSorting('imminent')}>임박순</span>
                <span className={cx(sorting === 'alphabetically' && 'checked')}
                    onClick={() => this.changeSorting('alphabetically')}>가나다순</span>
            </div>

            <div className={cx('adopt-list')}>
                {
                    this.state.adoptList.map((data) => <div key={data._id} className={cx('adopt-item')}>
                        <AdoptItem dog={data} />
                    </div>)
                }
            </div>

            <div className={cx('pagination')}>
                <Pagination defaultActivePage={1} totalPages={this.totalPage} 
                    onPageChange={this.changePage.bind(this)}/>
            </div>
        </div>);
    }
}

export default AdoptPage;

/**
 * mockup Data
 */

const AdoptList = [
    {
      _id: '0',
      dDay: 5,
      thumbnail: 'images/thumbnail.png',
      species: '믹스견',
      gender: '남',
      color: '흰&갈&검',
      age: '8개월 추정',
      weight: '6KG',
      location: '서울특별시 금천구'
    }, {
      _id: '1',
      dDay: 5,
      thumbnail: 'images/thumbnail.png',
      species: '믹스견',
      gender: '남',
      color: '흰&갈&검',
      age: '8개월 추정',
      weight: '6KG',
      location: '서울특별시 금천구'
    }, {
      _id: '2',
      dDay: 5,
      thumbnail: 'images/thumbnail.png',
      species: '믹스견',
      gender: '남',
      color: '흰&갈&검',
      age: '8개월 추정',
      weight: '6KG',
      location: '서울특별시 금천구'
    }, {
      _id: '3',
      dDay: 5,
      thumbnail: 'images/thumbnail.png',
      species: '믹스견',
      gender: '남',
      color: '흰&갈&검',
      age: '8개월 추정',
      weight: '6KG',
      location: '서울특별시 금천구'
    }, {
      _id: '4',
      dDay: 5,
      thumbnail: 'images/thumbnail.png',
      species: '믹스견',
      gender: '남',
      color: '흰&갈&검',
      age: '8개월 추정',
      weight: '6KG',
      location: '서울특별시 금천구'
    }, {
        _id: '5',
        dDay: 10,
        thumbnail: 'images/thumbnail.png',
        species: '믹스견',
        gender: '남',
        color: '흰&갈&검',
        age: '8개월 추정',
        weight: '6KG',
        location: '서울특별시 금천구'
      }
];