import React from 'react';
import './SideHeader.css';

import SvgIcon from '../../../UI/SvgIcon/SvgIcon';
const sideHeader = () =>{
    return <header className = 'sideHeader'>
        
        <SvgIcon type="chat" />
        <h2>Welcome Back <br/> User Name</h2>
    </header>
}

export default sideHeader;