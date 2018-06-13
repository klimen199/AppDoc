import React from 'react';
import PropTypes from 'prop-types'
import NotificationCard from '../NotificationCard'
import Icon from '../Icon'
import { Popover } from 'antd';

import './style.css'

class NotificationApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            count: this.getDataLength(props.data),
        };
    };

    getDataLength = (arr) => {
        let count = 0;
        for(let i = 0; i < arr.length; i++){
            if(!arr[i].watch) count++
        }
        return count;
    };


	handleVisibleChange = (visible) => {
       this.setState({visible});
	};

    getIdHandle = (id) => {
        this.props.getId(id);
        this.setState(prevState => {return {...prevState, count: prevState.count - 1}});
    }

    componentDidUpdate(){
        this.getDataLength(this.props.data)
    }

    render() {
        let styleNotf = null;
        //let notifCount = this.getDataLength(this.props.data);
        if(this.state.count === 0)
            styleNotf = { 'backgroundColor': 'transparent'};


        return (
        <div className="notific_component">
            <div >
                <Popover
                    classname="notific_popover"
                    content={this.state.visible && <NotificationCard
                        data = {this.props.data} 
                        top={this.props.top} 
                        getId={this.getIdHandle}/>}
                    trigger="click"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                    placement="leftBottom"
                >
                   
                        <div className="notific_container" >
                            <Icon svg type='notification' size={25} />
                            <div className="notific_number" style={styleNotf}>
                                <p className="count_notific">
                                    {this.state.count}
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
