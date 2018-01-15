import React from 'react';
import PropTypes from 'prop-types'

import Review from '../Review'
import Card from '../Card'
import Icon from '../Icon'

import './style.css'

class Reviews extends React.Component{

    reviewRender = (dataArr) => {
        let revArr = [];

        dataArr.map((item) => {
            revArr.push(<Review {...item} key={item.id}/>)
        });

        return revArr;
    };

    render(){

        return (
                <Card title="Новые отзывы"
                      className="reviews"
                      extra={<a href="#"><Icon type="chat" svg size={20}/> Все отзывы</a>}>
                    {this.reviewRender(this.props.data)}
                </Card>
        )
    }
}

Reviews.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

Reviews.defaultProps = {
    data: [],
};

export default Reviews