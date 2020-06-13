import React, {Component} from "react";
import styles from "./MissingItem.module.scss";
import classNames from "classnames/bind";
import moment from 'moment';
import { MissingModel } from '../../models/interfaces';
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

interface MissingItemProps {
    dog: MissingModel;
}

class MissingItemModule extends Component<MissingItemProps> {
    render () {
      const { dog } = this.props;

      return (
        <Link to={'/missing/' + dog.missing_id}>
            <div className={cx('box')}>
                <div className={cx('missing-info')}>
                    <div className={cx('thumbnail')}>
                        <img src={dog.missing_dog_image[0]} alt="thumbnail" />
                    </div>
                    <div className={cx('title')}>{dog.missing_dog_name}
                        / {dog.missing_dog_kind}({dog.missing_dog_sex})</div>

                    <div className={cx('item')}>
                        <span>{dog.missing_dog_color}</span>
                    </div>
                    <div className={cx('item')}>
                        <span>{dog.missing_dog_age}</span>
                    </div>
                    <div className={cx('item')}>
                        <span>{dog.missing_dog_weight}</span>
                    </div>
                </div>
                <div className={cx('detail-info')}>
                    <div className={cx('location')}>장소 : {dog.missing_dog_place}</div>
                    <div className={cx('date')}>실종일 : {moment(dog.missing_dog_date).format('YYYY.MM.DD')}</div>
                    <div className={cx('reward')}>사례금 : {dog.missing_dog_reward}</div>
                </div>
            </div>
        </Link>
      );
    }
}

export default MissingItemModule;