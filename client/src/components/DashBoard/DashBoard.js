import React,{Component} from 'react';
import {Aux} from '../../utils/utils';
import ToolBar from './ToolBar/ToolBar';
import SideBar from './SideBar/SideBar';
import  './DashBoard.css'
class DashBoard extends Component {
    render() {
        return <div className="dashBoard">
            <ToolBar />
        <SideBar />
        <div>this is content</div>

        </div>
    }
}

export default DashBoard;

