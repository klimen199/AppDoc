import React from 'react';
import PropTypes from 'prop-types'

import Rewiew from '../Review'
import Card from '../Card'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class Reviews extends React.Component{

    render(){

        return (
            <div className='rewiews-all'>
                <Card title="Новые отзывы" className="reviews" extra={<a href="#"><Icon type="chat" svg size={20}/> Все отзывы</a>}>
                    <Rewiew 
                        name="Иванова А. К." 
                        rewText="Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. " 
                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                        time="5"
                        unit="часов"
                    />

                    <Rewiew 
                        name="Иванова А. К." 
                        rewText="Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты." 
                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                        time="5"
                        unit="часов"
                    />

                    <Rewiew 
                        name="Иванова А. К." 
                        rewText="Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты." 
                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                        time="5"
                        unit="часов"
                    />
                  </Card>
            </div>
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