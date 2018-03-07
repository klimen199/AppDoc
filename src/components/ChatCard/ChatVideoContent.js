import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Radio from '../Radio'
import ChatFiles from '../ChatFiles'
import ChatSend from '../ChatSend'
import ChatMessage from '../ChatMessage'
import ChatVideoPanel from '../ChatVideoPanel'
import Hoc from '../Hoc'

import './style.css'
import '../../icon/style.css'

class ChatVideoContent extends React.Component {
    constructor(props){
        super(props);
        this.state={
            calling: false,
        }
    }

    stop = () => {
        console.log('stop')
        this.setState({calling: false});

        this.props.onStopCall();
    }

    call = () => {
        console.log('call')
        this.setState({calling: true});

        let options = {
            localVideo : this.videoInput,
		    remoteVideo : this.videoOutput,
		    onicecandidate : onIceCandidate
        }

        this.props.onCall(options);
    }

    render() {
        const dialogsClass = cn('chat-card-dialogs', {'chat-card-dialogs-active': this.props.isActive});
        console.log(this.videoInput, this.videoOutput)

        

        return (

            <div className={dialogsClass}>
                <div className='chat-card-message__area'>
                {this.state.calling ?  
                <Hoc>
                    <div className='chat-card-video__box'>
                        <video
                            ref={(video) => this.videoInput = video}
                            autoplay 
                            poster="https://i.pinimg.com/736x/44/ce/2c/44ce2cfa6267fde44790205135a78051--hello-sunshine-beautiful-sunset.jpg"></video>
                    </div>
                    <div className='chat-card-video__mini'>
                        <video 
                            ref={(video) => this.videoOutput = video}
                            autoplay 
                            poster="https://i.pinimg.com/736x/44/ce/2c/44ce2cfa6267fde44790205135a78051--hello-sunshine-beautiful-sunset.jpg"></video>
                    </div>
                    <div className='chat-card-video__panel'>
                        <ChatVideoPanel duration={this.props.duration}
                            onStop={this.stop}/>
                    </div>
                    </Hoc> 
                    : <Button
                    onClick={this.call}
                    btnText=''
                    size='small'
                    type='no-brd'
                    icon='telephone'
                    svg
                    iconSize={18}
                    title='Позвонить'
                />
                }

                </div>
            </div>

        )
    }
}

ChatVideoContent.propTypes = {
    duration: PropTypes.string,
};

ChatVideoContent.defaultProps = {
    duration: '00:00:34'
};

export default ChatVideoContent