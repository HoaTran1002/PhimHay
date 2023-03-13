import Styles from './GridCard.module.scss';
import classNames from 'classNames/bind';

const cx = classNames.bind(Styles);

function GridCard() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('introduce')}>
                <span className={cx('title')}></span>
                <span className={cx('description')}></span>
            </div>
            <div className={cx('table-card')}>
                <table className={cx('content')}>
                    <tr className={cx('row-content')}>
                        <td className={cx('item')}>Ed</td>
                        <td className={cx('item')}>Wood</td>
                        <td className={cx('item')}>William</td>
                    </tr>
                    <tr className={cx('row-content')}>
                        <td className={cx('item')}>Albert</td>
                        <td className={cx('item')}>Schweitzer</td>
                        <td className={cx('item')}>William</td>
                    </tr>
                    <tr className={cx('row-content')}>
                        <td className={cx('item')}>Jane</td>
                        <td className={cx('item')}>Fonda</td>
                        <td className={cx('item')}>William</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default GridCard;
