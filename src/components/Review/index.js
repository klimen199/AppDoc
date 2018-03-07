import React from 'react';
import PropTypes from 'prop-types'

import MainReview from './MainReview'
import SecondaryReview from './SecondaryReview'

import './style.css'
import '../../icon/style.css'

class Review extends React.Component{

    render(){
        const {date, text, secondary} = this.props;

        return (!secondary) ?
            <MainReview {...this.props}/>
            :
            <SecondaryReview date={date} text={text}/>;
    }
} 

Review.propTypes = {
    author: PropTypes.string,
    avatar: PropTypes.string,
    online: PropTypes.bool,
    text: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    treatmentDate: PropTypes.string,
    rate: PropTypes.number,

    secondaryAllowed: PropTypes.bool,
    comment: PropTypes.object,
    secondary: PropTypes.bool,
    onSend: PropTypes.func,
};

Review.defaultProps = {
    author: '',
    avatar: '',
    text: '',
    treatmentDate: '',
    rate: 0,

    secondaryAllowed: false,
    comment: null,
    secondary: false,
    onSend: () => {},
};

export default Review