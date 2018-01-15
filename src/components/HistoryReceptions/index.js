import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import HistoryReceptionsItem from '../HistoryReceptionsItem'
import Card from '../Card'
import Button from '../Button'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class HistoryReceptions extends React.Component{

    render(){
        const rootClass = cn('receptions-all');

        return (
            <div className={rootClass}>
                <Card title="Актуальные обращения">
                    <div className="tableheader">
                        <div className="flex-col"><div className="receptions-status new">Новые</div></div>
                        <div className="flex-col"><div className="receptions-status topical">Актуальные</div></div>
                        <div className="flex-col"><div className="receptions-status completed">Завершенные</div></div>
                        <div className="flex-col"><div className="receptions-status extra">Экстренные</div></div>
                    </div>
                    <div className="tableheader menu-header">
                        <div className="flex-col"><div className="tableheader-name">Дата приема</div></div>
                        <div className="flex-col"><div className="tableheader-name">диагноз</div></div>
                        <div className="flex-col"><div className="tableheader-name">Комментарий к приему</div></div>
                        <div className="flex-col"><div className="tableheader-name">стоимость</div></div>
                        <div className="flex-col"><div className="tableheader-name">заключение</div></div>
                        <div className="flex-col"><div className="tableheader-name">отзыв</div></div>
                        <div className="flex-col"><div className="tableheader-name"></div></div>
                    </div>
                    <HistoryReceptionsItem
                        status="new"
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
                    <HistoryReceptionsItem
                        status="topical"
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
                    <HistoryReceptionsItem
                        status="completed"
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
                    <HistoryReceptionsItem
                        status="extra"
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
                    <HistoryReceptionsItem 
                        status="new"
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

export default HistoryReceptions