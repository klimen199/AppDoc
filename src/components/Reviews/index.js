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
                      extra={<a onClick={this.props.redirect}><Icon type="chat" svg size={20}/> <span>Все отзывы</span></a>}>
                    {this.reviewRender(this.props.data)}
                </Card>
        )
    }
}

Reviews.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    redirect: PropTypes.func,
};

Reviews.defaultProps = {
    data: [],
    redirect: () => {},
};

export default Reviews