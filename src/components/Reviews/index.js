import React from 'react';
import PropTypes from 'prop-types'

import Review from '../Review'
import Card from '../Card'
import Icon from '../Icon'

import './style.css'

class Reviews extends React.Component{

    reviewRender = (dataArr) => {
        const num = this.props.numToDisplay;
        let revArr = [];

        for (let i = 0, len = dataArr.length; i < num && i < len; i++){
            revArr.push(<Review {...dataArr[i]}
                                isSecondAllowed={false}
                                key={dataArr[i].id}/>)
        }

        return revArr;
    };

    render(){
        const {data} = this.props;

        return (
                <Card title="Новые отзывы"
                      className="reviews"
                      extra={<a onClick={this.props.redirect}>
                                <Icon type="chat" svg size={20}/> 
                                <span>Все отзывы</span>
                            </a>}>
                    {data.length ? 
                        this.reviewRender(data) 
                        : <div classname='entry-list'>Отзывов нет</div>}
                </Card>
        )
    }
}

Reviews.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
    numToDisplay: PropTypes.number,
    redirect: PropTypes.func,
};

Reviews.defaultProps = {
    data: [],
    numToDisplay: 7,
    redirect: () => {},
};

export default Reviews