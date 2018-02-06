import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Rate from '../Rate'
import Icon from '../Icon'
import ChatDialog from '../ChatDialog'

import './style.css'
import '../../icon/style.css'

class ChatDialogs extends React.Component{

    dialogRender = (dataArr) => {
        let dialogArr = [];

        dataArr.map((item, index) => {
            dialogArr.push(<ChatDialog {...item} key={item.id + ''+index}/>)
        });

        return dialogArr;
    };

    render(){
        const { name, consultation, size, time, online, img, status, data} = this.props;
        const rootClass = cn('dialog');


        return (
            <div className={rootClass}>
                <div className='dialog-title'>Ожидают приема<span className='dialog-num_item'>{data.length}</span></div>
                {this.dialogRender(this.props.data)}
            </div>
        )
    }
}

ChatDialogs.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

ChatDialogs.defaultProps = {
    data: [],
};

export default ChatDialogs