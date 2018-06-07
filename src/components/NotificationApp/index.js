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
        };
    };

    getDataLength = () => {
        let count = 0;
        for(let i = 0; i < this.props.data.length; i++){
            if(!this.props.data[i].watch) count++
        }
        return count;
    };


	handleVisibleChange = (visible) => {
       this.setState({visible});
	};

    render() {
        let styleNotf = null;
        let notifCount = this.getDataLength();
        if(notifCount === 0)
            styleNotf = { 'backgroundColor': 'transparent'};


        return (
        <div className="notific_component">
            <div >
                <Popover
                    classname="notific_popover"
                    content={this.state.visible && <NotificationCard
                        data = {this.props.data} top={this.props.top} />}
                    trigger="click"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                    placement="leftBottom"
                >
                   
                        <div className="notific_container" >
                            <Icon svg type='notification' size={25} />
                            <div className="notific_number" style={styleNotf}>
                                <p className="count_notific">
                                    {notifCount}
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
