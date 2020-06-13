import React, { Component, ChangeEvent } from 'react';
import styles from './MissingWritePage.module.scss';
import classnames from 'classnames/bind';
import { Dropdown, DropdownProps } from 'semantic-ui-react';
import { BREEDS } from '../../../data';


const cx = classnames.bind(styles);

// tslint:disable-next-line:no-empty-interface
interface MissingWritePageProps {}

interface MissingWritePageState {
    missing: {
        name: string;
        age: string;
        weight: number;
        comment: string;
        special: string;
        reward: string;
        place: string;
        breed: string;
        color: string;
        date: string;
        gender: 'male' | 'female';
        images: string[];
        thumbnail_index: number;
    };
}

class MissingWritePage extends Component<MissingWritePageProps, MissingWritePageState> {
    breeds: {
        key: number,
        text: string,
        value: string
    }[] = [];

    constructor (props: Readonly<MissingWritePageProps>) {
        super(props);

        this.state = { missing: { gender: 'male', images: ['', '', ''] } } as MissingWritePageState;

        BREEDS.forEach((value: string, index: number) => {
            this.breeds.push({ key: index, text: value, value });
        });
    }

    /**
     * Input Tag On Change -> state 변경
     */
    changeInput(type: string, evt: ChangeEvent<HTMLInputElement>): void {
        this.setState({ missing: Object.assign({}, this.state.missing, { [type]: evt.target.value }) });
    }

    /**
     * 성별 radio change
     * @param gender male | female
     */
    changeGender(gender: 'male' | 'female'): void {
        this.setState({ missing: Object.assign({}, this.state.missing, { gender }) });
    }

    /**
     * 견종 DropDown 선택 시
     */
    changeBreed(e: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps) {
        if (!data.value) { return; }
        this.setState({ missing: Object.assign({}, this.state.missing, { breed: data.value.toString() }) });
    }

    /**
     * 이미지 변경 시
     *
     * @param index 변경 한 이미지의 index
     * @param event 파일 event
     */
    changeImage(index: number, event: React.ChangeEvent<HTMLInputElement>): void {
        if (this.state.missing.thumbnail_index === undefined) {
            this.setState({ missing: Object.assign({}, this.state.missing, { thumbnail_index: index })});
        }
        if (!event.target.files) { return; }
        const url = URL.createObjectURL(event.target.files[0]);
        const images = JSON.parse(JSON.stringify(this.state.missing.images));
        images[index] = url;
        this.setState({ missing: Object.assign({}, this.state.missing, { images })});
    }

    /**
     * 실종 글 생성
     */
    // tslint:disable-next-line:no-empty
    create(): void { }

    render() {
        const { images } = this.state.missing;

        return (<div>
            <div className={cx('input-box')}>
                <div className={cx('input')}>
                    <label>이름</label>
                    <input type="text" placeholder="Ex) 뿌요"
                        onChange={this.changeInput.bind(this, 'name')} />
                </div>
                <div className={cx('input')}>
                    <label>나이</label>
                    <input type="text" placeholder="Ex) 8개월"
                        onChange={this.changeInput.bind(this, 'age')} />
                </div>
                <div className={cx('input')}>
                    <label>채중(KG)</label>
                    <input type="number" placeholder="6"
                        onChange={this.changeInput.bind(this, 'weight')} />
                </div>
                <div className={cx('input')}>
                    <label>견종</label>
                    <Dropdown placeholder='Ex) 믹스견' search selection options={this.breeds}
                        onChange={this.changeBreed.bind(this)} />
                </div>
                <div className={cx('input')}>
                    <label>색상</label>
                    <input type="text" placeholder="Ex) 갈 / 검 / 흰"
                        onChange={this.changeInput.bind(this, 'color')} />
                </div>
                <div className={cx('input', 'gender')}>
                    <label>성별</label>
                    <input type="radio" name="gender" value="male" onClick={this.changeGender.bind(this, 'male')} />수컷
                    <input type="radio" name="gender" value="female" onClick={this.changeGender.bind(this, 'female')} />암컷
                </div>
                <div className={cx('input')}>
                    <label>특이사항</label>
                    <input type="text" placeholder="Ex) 없음"
                        onChange={this.changeInput.bind(this, 'comment')} />
                </div>
                <div className={cx('input')}>
                    <label>특징</label>
                    <input type="text" placeholder="Ex) 사회성이 좋음"
                        onChange={this.changeInput.bind(this, 'special')} />
                </div>
                <div className={cx('input')}>
                    <label>실종일자</label>
                    <input type="date" onChange={this.changeInput.bind(this, 'date')} />
                </div>
                <div className={cx('input')}>
                    <label>실종 장소</label>
                    <input type="text" placeholder="Ex) 서울 금천구"
                        onChange={this.changeInput.bind(this, 'place')} />
                </div>
                <div className={cx('input')}>
                    <label>사례금</label>
                    <input type="text" placeholder="Ex) 추후 협의"
                        onChange={this.changeInput.bind(this, 'reward')} />
                </div>
                <div className={cx('input')}>
                    <label>첨언</label>
                    <textarea></textarea>
                </div>

                <div className={cx('images')}>
                    {
                        images.map((image, index) => <div className={cx('image')} key={'image_' + index}>
                            <input type="file" onChange={this.changeImage.bind(this, index)}></input>
                            <img src={image} alt="" />
                            <input type="radio" name="image" value={index} />
                        </div>)
                    }
                </div>

                <div className={cx('buttons')}>
                    <button onClick={() => this.create()}>생성</button>
                </div>
            </div>
        </div>);
    }
}

export default MissingWritePage;
