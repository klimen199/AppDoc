import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Button from '../Button'
import Rate from '../Rate'
import Radio from '../Radio'
import Icon from '../Icon'
import ChatDialog from '../ChatDialog'
import ChatFiles from '../ChatFiles'
import ChatSend from '../ChatSend'
import ChatComments from '../ChatComments'
import ChatInMessage from '../ChatInMessage'
import ChatOutMessage from '../ChatOutMessage'

import './style.css'
import '../../icon/style.css'

class ChatCard extends React.Component{

    filesRender = (dataArr) => {
        let filesArr = [];

        dataArr.map((item, index) => {
            filesArr.push(<ChatFiles {...item} key={item.id + ''+index}/>)
        });

        return filesArr;
    };

    constructor(props){
        super(props);
        this.state = {
            isActive: false,
        }
    }

    render(){
        const { patientName, online, isActive, onClick } = this.props;

        const rootClass = cn('chat-card');
        const statusClass = cn('chat-card-status', `chat-card-${online}`);

        const filesClass = cn('chat-card-files', {'chat-card-files-active' : isActive});
        const dialogsClass = cn('chat-card-dialogs', {'chat-card-dialogs-active' : isActive});

        const icons = ['chat1', 'telephone', "video-camera"];

        return (
            <div className={rootClass}>
                <div className='chat-card-head'>
                    <div className='chat-card-title'>
                        <Button
                            btnText=''
                            size='small'
                            type='no-brd'
                            icon='file-download'
                            title='Открыть прикреплённые файлы'
                            onClick={onClick}
                        />
                        <div className='chat-card-namePatient'>{patientName}</div>
                        <div className={statusClass}>{online}</div>
                    </div>
                    <div className='chat-card-btns'>
                        <Radio icons={icons} />
                        <div className='chat-card-archive'>
                            <Button
                                btnText=''
                                size='small'
                                type='no-brd'
                                icon='archive-box'
                                title='В архив'
                            />
                        </div>
                    </div>
                </div>
                <div className='chat-card-body'>
                    <div className={dialogsClass}>
                        <div className='chat-card-message__area'>
                            {/*<div className='chat-card-message__comments'>
                                <ChatComments 
                                    comments="Жалоба пациента или комментарий к приему. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах." 
                                />
                            </div>*/}
                             <div className='chat-card-message__box'>
                                <div className='chat-card-message__overlay'>
                                    <ChatInMessage 
                                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                                        message="Здарова!" 
                                        time="15:00"
                                    />
                                    <ChatOutMessage 
                                        message="Здоровей видали!!" 
                                        time="15:00"
                                    />
                                    <ChatInMessage 
                                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                                        message="Здарова!" 
                                        time="15:00"
                                    />
                                    <ChatOutMessage 
                                        message="Здоровей видали!!" 
                                        time="15:00"
                                    />
                                    <ChatInMessage 
                                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                                        message="Здарова!" 
                                        time="15:00"
                                    />
                                    <ChatOutMessage 
                                        message="Здоровей видали!!" 
                                        time="15:00"
                                    />
                                    <ChatInMessage 
                                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                                        message="Здарова!" 
                                        time="15:00"
                                    />
                                    <ChatOutMessage 
                                        message="Здоровей видали!!" 
                                        time="15:00"
                                    />
                                    <ChatInMessage 
                                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                                        message="Здарова!" 
                                        time="15:00"
                                    />
                                    <ChatOutMessage 
                                        message="Здоровей видали!!" 
                                        time="15:00"
                                    />
                                    <ChatInMessage 
                                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                                        message="Здарова!" 
                                        time="15:00"
                                    />
                                    <ChatOutMessage 
                                        message="Здоровей видали!!" 
                                        time="15:00"
                                    />
                                    <ChatInMessage 
                                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                                        message="Здарова!" 
                                        time="15:00"
                                    />
                                    <ChatOutMessage 
                                        message="Здоровей видали!!" 
                                        time="15:00"
                                    />
                                    <ChatInMessage 
                                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                                        message="Здарова!" 
                                        time="15:00"
                                    />
                                    <ChatOutMessage 
                                        message="Здоровей видали!!" 
                                        time="15:00"
                                    />
                                    <ChatInMessage 
                                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                                        message="Здарова!" 
                                        time="15:00"
                                    />
                                    <ChatOutMessage 
                                        message="Здоровей видали!!" 
                                        time="15:00"
                                    />
                                </div>
                             </div>
                        </div>
                        <div className='chat-card-message__send'>
                            <ChatSend />
                        </div>
                    </div>
                    <div className={filesClass}>
                        <div className='chat-card-files__close'>
                            <Button
                                btnText=''
                                size='small'
                                type='no-brd'
                                icon='arrow_up'
                                title='Закрыть'
                            />
                        </div>
                        <div className='chat-card-files__items'>
                            {this.filesRender(this.props.data)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ChatCard.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    patientName: PropTypes.string,
    online: PropTypes.oneOf(['offline', 'online']),
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    
};

ChatCard.defaultProps = {
  data: [],
  patientName: '',
  online: 'offline',
  isActive: false,
  onClick: () => {},
  
};

export default ChatCard