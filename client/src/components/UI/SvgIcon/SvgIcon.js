import React from 'react';
import sprite from './sprite.svg';
const icons ={
    profile:"#icon-profile",
    address:"#icon-address-book",
    exit:"#icon-exit",
    calendar:"#icon-calendar",
    airplane:"#icon-airplane",
    clipboard:"#icon-clipboard",
    cog:"#icon-cog",
    user:"#icon-user",
    chat:"#icon-bubbles2"

}
const svgIcon = (props) => {
    return <svg>
        <use xlinkHref={sprite+icons[props.type]}></use>
        </svg>
}

export default svgIcon;