//import {useState,useEffect} from 'react'
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import {Wrapper as PopperWrapper} from '~/layout/Components/Popper'
import Account from '~/layout/Components/Account'

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
                <Tippy
                    interactive
                    visible//={searchResult.length > 0}
                    render={attrs => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper >
                                <h3>Account</h3>
                                <Account/>
                                <Account/>
                                <Account/>
                                <Account/>
                                <Account/>
                                <Account/>
                                <Account/>
                                <Account/>
                                <Account/>
                                <Account/>
                                <Account/>
                                <Account/>
                                <Account/>
                                <Account/>
                            </PopperWrapper>
                        </div>
                )}>
                    <div className={cx('search')}>
                    
                        <input  placeholder='Search account and videos'/>
                        <button className={cx('btn-clear')}> 
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/>
                        <button className={cx('btn-search')} >
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                    </div>
                
                </Tippy>
                
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
