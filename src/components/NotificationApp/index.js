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
            countNotific: this.getDataLength(),
            visible: false,
            dataWatched: false,
        };
        this.setChange2 = false;
    };

    /*shouldComponentUpdate(nextProps, nextState){

    }*/

    getDataLength = () => {
        let count = 0;
        for(let i = 0; i < this.props.data.length; i++){
            if(!this.props.data[i].watch) count++
        }
        return count;
    };


	handleVisibleChange = () => {
		this.setState({visible: !this.state.visible });
    };

    render() {

        console.log('NotificationApp', this.props.data)
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
                content={<NotificationCard data = {this.props.data}
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
