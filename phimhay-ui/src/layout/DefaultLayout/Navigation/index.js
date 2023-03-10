
import className from 'classnames/bind'
import Styles from './Navigation.module.scss'
import Button from '~/layout/Components/Button';

const cx = className.bind(Styles);

function Navigation() {
    return ( 
        <div className={cx('wrapper-1')}>
            <div className={cx('wrapper-2')}>
                <div className={cx('wrapper-3')}>
                    <nav className={cx('navigation')}>
                            <div className={cx('content')}>
                                <Button square>
                                    HOME
                                </Button>
                                <Button square>
                                    BLOGS
                                </Button>
                                <Button square>
                                    MOVIES
                                </Button>
                                <Button square>
                                    SHORT VIDEOS
                                </Button>
                                <Button square>
                                    MUSIC
                                </Button>
                                <Button square>
                                    GAME
                                </Button>
                                <Button square>
                                    TRANSACTION
                                </Button>
                                
                            </div>
                    </nav>
                </div>
            </div>
        </div>
     );
}

export default Navigation;