import React from 'react';
import PropTypes from 'prop-types'
import NotificationCard from '../NotificationCard'
import Notification from '../Notification'
import Icon from '../Icon'
import { Popover } from 'antd';

import './style.css'
import moment from "moment/moment";

class NotificationApp extends React.Component {
    constructor(props) {
        super(props);
        this.data = this.props.data;
        this.state = {
            countNotific: this.getDataLength(),
            visible: false,
            dataWatched: false,
        };
        this.setChange2 = false;
    };

    getDataLength = () => {
        let count = 0;
        for(let i = 0; i < this.data.length; i++){
            if(!this.data[i].watch) count++
        }
        return count;
    };
    setDataWatched = () => {
        for(let i = 0; i < this.data.length; i++){
            this.data[i].watch = true;
        }
        this.setState({countNotific : 0, dataWatched : true});
    };

	handleVisibleChange = (visible) => {
       console.log("visible", visible);
       this.setState({visible});
        //console.log("change1");
	   // if(!this.state.dataWatched) this.setDataWatched();
        
        //if(this.setChange2 === false){
           
        //    this.setState({visible:  !this.state.visible});
       
       
        //}
        //this.setChange2 = false;
	};

    handleVisibleChange2 = () => {
        console.log("change2");
        this.setChange2 = true;
        this.setState({visible:  !this.state.visible});
    };
    render() {
        console.log(this.state.visible);
        const {countNotific: count} = this.state;


        let styleNotf = null;
        if(this.state.countNotific === 0)
            styleNotf = { 'backgroundColor': 'transparent'};


        return (
        <div className="notific_component">
            <div >
                <Popover
                    classname="notific_popover"
                    content={this.state.visible && <NotificationCard
                        data = {this.data} top={this.props.top} />}
                    trigger="click"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                    placement="leftBottom"
                >
                   
                        <div className="notific_container" >
                            <Icon svg type='notification' size={25} />
                            <div className="notific_number" style={styleNotf}>
                                <p className="count_notific">
                                    {count}
                                </p>
                            </div>
                        </div>
                  
                </Popover>
            </div>
        </div>

    );
  }
}


NotificationApp.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

NotificationApp.defaultProps = {
    data: [],
};

export default NotificationApp
