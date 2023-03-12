import classNames from "classnames/bind";
import Styles  from "./Button.module.scss";


const cx = classNames.bind(Styles);
function Button({
    to =false,
    href =false,
    children=false,
    primary = false,
    outline = false,
    none=false,
    small = false,
    large =false ,
    sliderPre,
    sliderNext,
    icon,
    square,
    onClick,
    ...passProps}) {
    const props = {
        onClick,
        ...passProps
    }

    let Comp =''
    if(to){
        props.to = to
        Comp = 'link'
    }else if(href){
        props.href = href
        Comp = 'a'
    }else{
        Comp = 'button'
    }

    const classed = cx('wrapper',{
        primary,
        outline,
        none,
        small,
        large,
        square,
        sliderNext,
        sliderPre
        
    })
    return ( 
        <Comp className={classed}{...props}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <span className={cx('title')}>
                {children}
            </span>
        </Comp>
    );
}

export default Button;
