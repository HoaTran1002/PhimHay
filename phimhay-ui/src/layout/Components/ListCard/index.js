import classNames from "classnames/bind";
import Styles from "./ListCard.module.scss";

const cx = classNames.bind(Styles);
function ListCard() {
    return ( <div className={cx('wrapper')}> 
        <span className={cx('title')}>LIST CARD</span>
        
    </div> );
}

export default ListCard;