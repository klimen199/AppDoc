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
        this.state = {
            visible: false,
            notif: this.props.data,
        };


    };

    getDataLength = () => {
        let count = 0;
        for(let i = 0; i < this.state.notif.length; i++){
            if(!this.state.notif[i].watch) count++
        }
        return count;
    };


	handleVisibleChange = () => {
		this.setState({visible: !this.state.visible });
	};

    render() {

        console.log('NotificationApp', this.state.notif)
        return (
        <div>
           <div className="notific_container" onClick={this.handleVisibleChange}>
               <Icon svg type='notification' size={25} />
               <div className="notific_number">
                   <p className="count_notific">
                       {this.getDataLength()}
                   </p>
               </div>
           </div>

            <Popover
                classname="notific_popover"
                content={<NotificationCard data = {this.state.notif}
                                           onClose={() => this.setState({visible: false})}/>}
                trigger="click"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
                placement="leftBottom"
            />
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
