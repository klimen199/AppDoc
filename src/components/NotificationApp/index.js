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
        this.setState({countNotific : 0});
    };

	handleVisibleChange = () => {
	    if(this.state.dataWatched) this.setDataWatched();
		this.setState({visible: !this.state.visible, dataWatched : true });
	};

    render() {
        const {countNotific: count} = this.state;

        return (
        <div>
           <div className="notific_container" onClick={this.handleVisibleChange}>
               <Icon svg type='notification' size={25} />
               <div className="notific_number">
                   <p className="count_notific">
                       {count}
                   </p>
               </div>
           </div>

            <Popover
                classname="notific_popover"
                content={<NotificationCard data = {this.data}
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
