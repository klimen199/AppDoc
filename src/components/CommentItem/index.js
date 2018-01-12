import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import Icon from '../Icon'
import ProfileAvatar from '../ProfileAvatar'

import './styles.css'

class CommentItem extends React.Component{


    render(){
        const {online, img} = this.props;

        return (
            <div className="commentItem">
                <ProfileAvatar owner="patient" online={online} size='small' img={img}/>
            </div>
        )
    }
}

CommentItem.propTypes ={
    online: PropTypes.oneOf(['online', 'offline']),
    img: PropTypes.string,
};

CommentItem.defaultProps = {

};

export default CommentItem