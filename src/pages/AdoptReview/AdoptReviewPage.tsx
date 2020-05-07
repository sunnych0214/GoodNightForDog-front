import React, { Component, ChangeEvent } from 'react';
import styles from './AdoptReviewPage.module.scss';
import classnames from 'classnames/bind';
import { Dropdown, DropdownProps, Pagination, PaginationProps } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { AdoptReviewModel } from '../../models/interfaces';

const cx = classnames.bind(styles);
const SearchOptions = [{
    key: 'titleAndContent',
    text: '제목 + 내용',
    value: 'titleAndContent'
}, {
    key: 'writer',
    text: '작성자',
    value: 'writer'
}];
const FilterOptions = [{
    key: 'latest',
    text: 'latest',
    value: 'latest'
}];

type SearchType = 'titleAndContent' | 'writer';
type FilterType = 'latest';

// tslint:disable-next-line:no-empty-interface
interface AdoptReviewProps {
}

interface AdoptReviewState {
    reviews: AdoptReviewModel[];
    searchOption: SearchType;
    searchText: string;
    filterOption: FilterType;
}

class AdoptReviewPage extends Component<AdoptReviewProps, AdoptReviewState> {
    totalPage: number = 10; // 전체 페이지 count
    activePage: number = 1; // 현재 페이지

    constructor(props: Readonly<AdoptReviewProps>) {
        super(props);

        this.state = {
            reviews: [],
            searchOption: 'titleAndContent',
            searchText: '',
            filterOption: 'latest',
        };
    }

    /**
     * 페이지 진입 시 입양 후기 리스트를 받아온다.
     */
    componentDidMount() {
        this.getReviews();
    }

    /**
     * 후기 리스트를 받아오는 함수
     * 페이지 진입 시 & 검색 시 & 필터 변경 시 & 페이지 변경 시
     */
    getReviews(): void {
        this.setState({ reviews: Reviews });
    }

    /**
     * 검색 옵션 변경 시
     */
    changeSearchOption(e: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps): void {
        if (!data.value) { return; }
        this.setState({ searchOption: data.value as SearchType });
    }

    /**
     * 검색 텍스트 입력 시
     */
    changeSearchText(evt: ChangeEvent<HTMLInputElement>): void {
        this.setState({ searchText: evt.target.value });
    }

    /**
     * 검색 버튼 클릭 시
     */
    searchReview(): void {
        // 검색 옵션 / 검색 텍스트가 입력이 안 되어 있을 경우 alert
        if (!this.state.searchOption || !this.state.searchText) {
            alert((this.state.searchText ? '검색 옵션을' : '검색 텍스트를') + '입력해주세요.');
            return;
        }

        this.getReviews();
    }

    /**
     * 필터 옵션 변경 시
     */
    changeFilterOption(e: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps): void {
        if (!data.value) { return; }
        this.setState({ filterOption: data.value as FilterType });
        this.getReviews();
    }

    /**
     * 페이지 변경 시
     */
    changePage(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: PaginationProps) {
        if (!data.activePage) { return; }
        this.activePage = Number(data.activePage);
        this.getReviews();
    }

    render() {
        const { searchOption, filterOption, searchText, reviews } = this.state;

        return (<div>
            <div className={cx('search-filter-container')}>
                <div className={cx('search-box')}>
                    <Dropdown value={searchOption} selection search
                        options={SearchOptions} onChange={this.changeSearchOption.bind(this)} />
                    <input type="text" value={searchText} onChange={this.changeSearchText.bind(this)}></input>
                    <button onClick={() => this.searchReview()}>검색</button>
                </div>
                <div className={cx('filter-box')}>
                    <Dropdown value={filterOption} selection search
                        options={FilterOptions} onChange={this.changeFilterOption.bind(this)} />
                </div>
            </div>

            <div className={cx('divider')}></div>

            <div className={cx('container')}>
                <div className={cx('adopt-review-list')}>
                    {
                        reviews.map((review: AdoptReviewModel, index: number) => <div key={index} className={cx('adopt-review-item')}>
                            <div className={cx('image')}>
                                <img src={review.image} alt="adopt-review"></img>
                            </div>
                            <div className={cx('content')}>
                                <div className={cx('title')}>{review.adopt_review_title}</div>
                                <div className={cx('article')}>{review.adopt_review_article.split('\n').map((text: string, i: number) =>
                                    <span key={'article_' + i}>{text}<br /></span>)}</div>
                                <Link to={'adopt-review/' + review.adopt_info_id}>
                                    <button className={cx('view-detail')}>자세히 보기</button>
                                </Link>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <div className={cx('pagination')}>
                <Pagination defaultActivePage={1} totalPages={this.totalPage}
                    onPageChange={this.changePage.bind(this)}/>
            </div>
        </div>);
    }
}

export default AdoptReviewPage;

const Reviews: AdoptReviewModel[] = [{
    adopt_review_id: 1,
    adopt_writer_id: 'hyejin',
    image: 'images/slide1.png',
    adopt_info_id: 1,
    adopt_review_title: '우리집 막둥이 뿌요',
    adopt_review_article: '우리 집에 새로운 활기를 전해준 우리 뿌요.\n이제는 완전한 저희 집 귀염둥이 막둥이인데요, 뿌요가 와서 정말 행...',
    adopt_review_comment: '',
    adopt_review_createDate: new Date().toISOString()
}, {
    adopt_review_id: 2,
    adopt_writer_id: 'hyejin',
    image: 'images/slide1.png',
    adopt_info_id: 2,
    adopt_review_title: '우리집 막둥이 뿌요',
    adopt_review_article: '우리 집에 새로운 활기를 전해준 우리 뿌요.\n이제는 완전한 저희 집 귀염둥이 막둥이인데요, 뿌요가 와서 정말 행...',
    adopt_review_comment: '',
    adopt_review_createDate: new Date().toISOString()
}];
