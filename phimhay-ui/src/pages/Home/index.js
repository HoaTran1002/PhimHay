import classNames from 'classnames/bind';
import Styles from './Home.module.scss';
import Carousel from '~/layout/Components/Carousel';
import ListCard from '~/layout/Components/ListCard';

const cx = classNames.bind(Styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Carousel />
            <div className={cx('list-movies')}>
                <ListCard />
            </div>
            <div className={cx('hot-movies')}>
                <span>hot movies</span>
            </div>
        </div>
    );
}

export default Home;
