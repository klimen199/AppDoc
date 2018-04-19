import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import DownloadLink from '../DownloadLink'

import './style.css'
import '../../icon/style.css'

class ChatComments extends React.Component{
    render(){
        const {comments, files} = this.props;
        const rootClass = cn('message__comments-area');


        return (
            <div className={rootClass}>
                <div className='message__comments-comments'>
                    {comments}
                </div>
                <div className='message__comments-attachment'>
                    {
                        files.map((el,i) => {
                            return (<DownloadLink
                                {...el}
                                size="default" 
                                type="link"
                                download
                                svg
                                icon="file"
                                iconSize={11}
                                key={i}
                            />)
                        })
                    }
                </div>
            </div>
        )
    }
}

ChatComments.propTypes = {
    comments: PropTypes.string,
    files: PropTypes.array,
};

ChatComments.defaultProps = {
    comments: '',
    files: [],
};

export default ChatComments