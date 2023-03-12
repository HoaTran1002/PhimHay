import classNames from 'classnames/bind';
import Styles from './ListCard.module.scss';
import { CardMovie as Card } from '~/layout/Components/Card';

const cx = classNames.bind(Styles);
function ListCard() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('title')}>CARD MOVIES</span>
            <ul className={cx('list-item')}>
                <li className={cx('item')}>
                    <Card />
                </li>
                <li className={cx('item')}>
                    <Card />
                </li>
                <li className={cx('item')}>
                    <Card />
                </li>
                <li className={cx('item')}>
                    <Card />
                </li>
                <li className={cx('item')}>
                    <Card />
                </li>
            </ul>
        </div>
    );
}

export default ListCard;
