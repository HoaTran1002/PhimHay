import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { faCircleXmark, faSpinner,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

import Images from '~/assets/images';
const cx = classNames.bind(styles);
function Header() {

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('controll')}>
                    <div classNames={cx('sidebar-btn')}>

                    </div>
                    <div className={cx('logo')} >
                        <Images/>
                    </div>
                </div>
                <div className={cx('search')}>
                    
                        <input placeholder='Search account and videos'/>
                        <button className={cx('btn-clear')}> 
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                        <Tippy content="Hello" placement="Search">
                            <button className={cx('btn-search')} >
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </button>
                        </Tippy>
                    
                </div>
                <div className={cx('right-header')}>
                    <div className={cx('')}>

                    </div>
                    <div className={cx('')}>
                        
                    </div>
                    <div className={cx('')}>
                        
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
