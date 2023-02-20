import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Images from '~/assets/Images';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={Images.logo} alt="Movies" />
                </div>
                <div className={cx('navigation')}></div>
                <div className={cx('search-block')}>
                    <div className={cx('search-input')}></div>
                    <div className={cx('search-button')}></div>
                </div>
            </div>
        </header>
    );
}

export default Header;
