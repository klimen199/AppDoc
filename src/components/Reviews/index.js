import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Col, Row, Icon } from 'antd';

import Rewiew from '../Review'
import Card from '../Card'

import './style.css'
import '../../icon/style.css'

class Reviews extends React.Component{

    render(){
        const rootClass = cn('rewiews-all');

        return (
            <div className={rootClass}>
                <Card title="Новые отзывы" extra={<a href="#"><Icon type="message" /> Все отзывы</a>}>
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

export default Reviews