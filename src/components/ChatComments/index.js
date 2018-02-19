import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import DownloadLink from '../DownloadLink'

import './style.css'
import '../../icon/style.css'

class ChatComments extends React.Component{
    render(){
        const {comments, attachment} = this.props;
        const rootClass = cn('message__comments-area');


        return (
            <div className={rootClass}>
                <div className='message__comments-comments'>
                    {comments}
                </div>
                <div className='message__comments-attachment'>
                    {attachment}
                    <DownloadLink
                        btnText="Прикрепленный файл с длинным предлинным названием.doc"
                        size="default" 
                        type="link"
                        download
                        svg
                        icon="file"
                        iconSize={11}
                    />

                    <DownloadLink
                        btnText="Прикрепленный файл с длинным предлинным названием.doc"
                        size="default" 
                        type="link"
                        download
                        svg
                        icon="file"
                        iconSize={11}
                    />
                </div>
            </div>
        )
    }
}

ChatComments.propTypes = {
    comments: PropTypes.string,
    attachment: PropTypes.string,
};

ChatComments.defaultProps = {
    comments: '',
    attachment: '',
};

export default ChatComments