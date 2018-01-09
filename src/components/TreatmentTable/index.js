import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import TreatmentTableItem from '../TreatmentTableItem'
import Card from '../Card'
import Button from '../Button'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class TreatmentTable extends React.Component{

    render(){
        const rootClass = cn('treatment-all');

        return (
            <div className={rootClass}>
                <Card title="Актуальные обращения" extra={<a href="#"><Icon svg size="16" type="order-form" /> Все обращения</a>}>
                    <div className="tableheader">
                        <div className="flex-col"><div className="tableheader-name">Имя пациента</div></div>
                        <div className="flex-col"><div className="tableheader-name">Дата приема</div></div>
                        <div className="flex-col"><div className="tableheader-name">диагноз</div></div>
                        <div className="flex-col"><div className="tableheader-name">Комментарий к приему</div></div>
                        <div className="flex-col"><div className="tableheader-name">стоимость</div></div>
                        <div className="flex-col"><div className="tableheader-name">заключение</div></div>
                        <div className="flex-col"><div className="tableheader-name">отзыв</div></div>
                        <div className="flex-col"><div className="tableheader-name"></div></div>
                    </div>
                    <TreatmentTableItem 
                        name="Иванова А. К." 
                        date="15.09.2017"
                        time="15:00-16:00"
                        type='chat1'
                        diagnostic='Сахарный диабет'
                        comments='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                        price='112 руб.'
                        conclusion='Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
                        conclusionDownload='Заключение 252525.pdf'
                        review='Lorem ipsum dolor sit amet, consectetuer...'
                    />

                    <TreatmentTableItem 
                        name="Иванова А. К." 
                        date="15.09.2017"
                        time="15:00-16:00"
                        type='chat1'
                        diagnostic='Сахарный диабет'
                        comments='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                        price='112 руб.'
                        conclusion='Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
                        conclusionDownload='Заключение 252525.pdf'
                        review='Lorem ipsum dolor sit amet, consectetuer...'
                    />

                    <TreatmentTableItem 
                        name="Иванова А. К." 
                        date="15.09.2017"
                        time="15:00-16:00"
                        type='chat1'
                        diagnostic='Сахарный диабет'
                        comments='Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
                        price='112 руб.'
                        conclusion='Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
                        conclusionDownload='Заключение 252525.pdf'
                        review='Lorem ipsum dolor sit amet, consectetuer...'
                    />
                  </Card>
            </div>
        )
    }
}

export default TreatmentTable