import classNames from 'classnames/bind';
import styles from './SideBar.module.scss';
const cx = classNames.bind(styles);

function Sidebar() {
    return <div className={cx('wrapper')}>sidebar</div>;
}

export default Sidebar;
