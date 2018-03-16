import React from 'react';
import PropTypes from 'prop-types'

import MainReview from './MainReview'
import SecondaryReview from './SecondaryReview'

import './style.css'
import '../../icon/style.css'

class Review extends React.Component{

    render(){
        const {date, text, fio, commentDoc} = this.props;
        let authorFIO = fio.split(' ');
        let author = authorFIO[0] + " "
                    + authorFIO[1].slice(0,1) + ". " 
                    + authorFIO[2].slice(0,1) + "."

        return <MainReview {...this.props} author={author}/>;
    }
} 

Review.propTypes = {
    id_zap: PropTypes.string,
    id_user: PropTypes.string,

    fio: PropTypes.string,
    comment: PropTypes.string,
    date: PropTypes.string,
    makingAppDate: PropTypes.string,
    rate: PropTypes.number,
    commentDoc: PropTypes.string,

    avatar: PropTypes.string,
    online: PropTypes.bool,

    onSend: PropTypes.func,
    onTreatmentClick: PropTypes.func,
};

Review.defaultProps = {
    id_zap: "0",
    id_user: "0",

    fio: '',
    comment: '',
    makingAppDate: '',
    rate: 0,
    commentDoc: "",

    onSend: () => {},
    onTreatmentClick: () => {},
};

export default Review