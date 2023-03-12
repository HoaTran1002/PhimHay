import { useState } from 'react';
import classNames from 'classnames/bind';
import Styles from './Slider.module.scss';
import SliderAPI from './SliderAPI';
import Button from '~/layout/Components/Button';
const cx = classNames.bind(Styles);
const movies = SliderAPI;
function Slider() {
    const [slideIndex, setSlideIndex] = useState(1);
    const nextSlide = () => {
        if (slideIndex !== movies.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === movies.length) {
            setSlideIndex(1);
        }
    };
    const preSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(movies.length);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list-item')}>
                {movies.map((movie, index) => {
                    return (
                        <li key={movie.id} className={slideIndex === index + 1 ? cx('active') : cx('item')}>
                            <img src={movie.src} className={cx('background')} />
                            <div className={cx('content')}>
                                <span className={cx('name')}>{movie.name}</span>
                                <div className={cx('description')}>
                                    <span className={cx('text')}>{movie.description}</span>
                                </div>
                                <span className={cx('price')}>{movie.price}</span>
                            </div>
                        </li>
                    );
                })}
                <Button className={cx('btn-pre')} sliderPre onClick={preSlide}>
                    Pre
                </Button>
                <Button className={cx('btn-next')} sliderNext onClick={nextSlide}>
                    Next
                </Button>
            </ul>
        </div>
    );
}

export default Slider;
