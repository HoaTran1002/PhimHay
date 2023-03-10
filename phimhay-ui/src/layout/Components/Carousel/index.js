import classNames from "classnames/bind";
import Styles from "./Carousel.module.scss"

const cx = classNames.bind(Styles)

function Carousel() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('card')}>
                    <h3 className={cx('title')}>Card 1</h3>
                    <div className={cx('bar')}>
                    <div className={cx('emptybar')}></div>
                    <div className={cx('filledbar')}></div>
                    </div>
                    <div className={cx('circle')}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    
                    </svg>
                    </div>
                </div>
                <div className={cx('card')}>
                    <h3 className={cx('title')}>Card 2</h3>
                    <div className={cx('bar')}>
                    <div className={cx('emptybar')}></div>
                    <div className={cx('filledbar')}></div>
                    </div>
                    <div className={cx('circle')}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    
                    </svg>
                    </div>
                </div>
                <div className={cx('card')}>
                    <h3 className={cx('title')}>Card 3</h3>
                    <div className={cx('bar')}>
                    <div className={cx('emptybar')}></div>
                    <div className={cx('filledbar')}></div>
                    </div>
                    <div className={cx('circle')}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    
                    </svg>
                    </div>
                </div>
                <div className={cx('card')}>
                    <h3 className={cx('title')}>Card 4</h3>
                    <div className={cx('bar')}>
                    <div className={cx('emptybar')}></div>
                    <div className={cx('filledbar')}></div>
                    </div>
                    <div className={cx('circle')}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    
                    </svg>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Carousel;