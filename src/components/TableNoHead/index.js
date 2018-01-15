import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import TableNoHeadItem from '../TableNoHeadItem'
import Card from '../Card'
import Button from '../Button'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class TableNoHead extends React.Component{

    render(){
        const rootClass = cn('schedule-all');

        return (
            <div className={rootClass}>
                <Card title="График работы на сегодня" extra={<div class="sum">Приемы: 12</div>}>
                    <div className="tableheader">
                        <div className="flex-col">
                            <Button
                                btnText='Добавить'
                                size='default'
                                type='yellow'
                                icon='plus'
                                iconSize={11}
                                svg
                            />
                        </div>
                        <div className="flex-col ico-btn">
                            <Button 
                                size='link'
                                type='link'
                                icon='printer'
                                svg
                            />
                            <Button 
                                size='link'
                                type='link'
                                icon='pdf-file'
                            />
                            <Button 
                                size='link'
                                type='link'
                                icon='xls-file'
                            />
                        </div>
                    </div>
                    <TableNoHeadItem 
                        name="Иванова А. К." 
                        infoText="Консультация по результатам анализа крови. Консультация по результатам анализа крови. Консультация по результатам анализа крови." 
                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                        time="08:15"
                        type='chat1'
                    />
                    <TableNoHeadItem 
                        name="Иванова А. К." 
                        infoText="Консультация по результатам анализа крови." 
                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                        time="08:15"
                        type='chat1'
                    />
                    <TableNoHeadItem 
                        name="Иванова А. К." 
                        infoText="Консультация по результатам анализа крови." 
                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                        time="08:15"
                        type='chat1'
                    />
                    <TableNoHeadItem 
                        name="Иванова А. К." 
                        infoText="Консультация по результатам анализа крови." 
                        img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                        time="08:15"
                        type='chat1'
                    />
                  </Card>
            </div>
        )
    }
}

export default TableNoHead