
import classNames from "classnames/bind";
import styles from './Account.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Account() {
    return ( 
    <div className={cx('wrapper')}>
        <img className={cx('user-logo-image')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/05aa222706c452c8ad0ea7d2e719a745~c5_100x100.jpeg?x-expires=1677895200&x-signature=TG%2BGBlayFOlHiU4Pu%2B7q5QvGMA8%3D" alt="imagelogo" />
        <div className={cx('content')}>
            <div className={cx('user-name')}>phuonghoa.hoa.hanasagi <FontAwesomeIcon className={cx('ticked-blue')} icon={faCheckCircle}/></div>
            <div className={cx('description')}>Đào Lê Phương Hoa</div>
        </div>
    </div>
    );
}

export default Account;