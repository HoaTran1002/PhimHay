import classNames from 'classnames/bind';
import Styles from './Card.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Styles);

function CardMovie() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-card')}>
                <span className={cx('status')}>Hot Movie</span>
                <span className="quality">FUll HD</span>
            </div>
            <div className={cx('detail')}>
                <div className={cx('rate')}>
                    <span className={cx('rate-item')}>
                        <FontAwesomeIcon className={cx('star-item')} icon={faStar} />
                    </span>
                    <span className={cx('rate-item')}>
                        <FontAwesomeIcon className={cx('star-item')} icon={faStar} />
                    </span>
                    <span className={cx('rate-item')}>
                        <FontAwesomeIcon className={cx('star-item')} icon={faStar} />
                    </span>
                    <span className={cx('rate-item')}>
                        <FontAwesomeIcon className={cx('star-item')} icon={faStar} />
                    </span>
                    <span className={cx('rate-item')}>
                        <FontAwesomeIcon className={cx('star-item')} icon={faStar} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CardMovie;
