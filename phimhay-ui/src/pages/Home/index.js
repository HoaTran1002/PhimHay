import classNames from 'classnames/bind';
import Styles from './Home.module.scss';
import Carousel from '~/layout/Components/Carousel';
import ListCard from '~/layout/Components/ListCard';
import Slider from '~/layout/Components/Slider';

const cx = classNames.bind(Styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <Carousel />
            <div className={cx('list-movies')}>
                <ListCard />
            </div>
            <div className={cx('hot-movies')}>
                <span className={cx('title')}>hot movies</span>
                <Slider />
            </div>
        </div>
    );
}

export default Home;
