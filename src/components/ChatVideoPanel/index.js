import React from 'react';
import PropTypes from 'prop-types'

import Button from '../Button'
import Hoc from '../Hoc'

import './style.css'
import '../../icon/style.css'

class ChatVideoPanel extends React.Component{

    checkTimeFormat = (number) => {
        return (''+number).length < 2 ? '0'+number : number;
    }

    render(){
        const { duration, isCalling} = this.props;


        return (
            <div className='message__panel'>

                {isCalling ? 
                <Hoc>
                    <div className="message__panel-duration">
                        {duration}
                    </div>
                    <div className="message__panel-btns">
                        <Button
                            btnText=''
                            size='small'
                            type='no-brd'
                            icon='clip'
                            iconSize={20}
                            title='Отключить микрофон'
                        />
                        <Button
                            btnText=''
                            className='btn-endcall'
                            size='small'
                            type='no-brd'
                            icon='end-call-button'
                            iconSize={9}
                            title='Завершить звонок'
                            onClick={this.props.onStop}
                        />
                    </div>
                    <div className="message__panel-full">
                        <Button
                            btnText=''
                            size='small'
                            type='no-brd'
                            icon='plus'
                            iconSize={16}
                            onClick={this.props.onPlus}
                        />
                        <Button
                            btnText=''
                            size='small'
                            type='no-brd'
                            icon='chat1'
                            iconSize={16}
                            onClick={this.props.onChat}
                        />
                    </div>
                </Hoc>
                : 
                <Hoc>

                    <div className="message__panel-btns startcall">
                        <Button
                            className='btn-call'
                            btnText=''
                            size='small'
                            type='no-brd'
                            icon='phone-call-outcoming'
                            iconSize={15}
                            title='Начать разговор'
                            onClick={this.props.onCall}
                        />
                    </div>
                    <div className="message__panel-full">

                        <Button
                            btnText=''
                            size='small'
                            type='no-brd'
                            icon='chat1'
                            iconSize={16}
                            onClick={this.props.onChat}
                        />
                    </div>
                </Hoc>
                }
            </div>
        )
    }
}

ChatVideoPanel.propTypes = {
    sec: PropTypes.number,
    min: PropTypes.number,
    hour: PropTypes.number,
    isCalling: PropTypes.bool,
    onStop: PropTypes.func,
    onCall: PropTypes.func,
    onPlus: PropTypes.func,
    onChat: PropTypes.func,
};

ChatVideoPanel.defaultProps = {
    sec: 0,
    min: 0,
    hour: 0,
    isCalling: false,
    onStop: () => {},
    onCall: () => {},
    onPlus: () => {},
    onChat: () => {},
};

export default ChatVideoPanel