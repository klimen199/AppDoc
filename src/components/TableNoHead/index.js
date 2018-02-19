import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import TableNoHeadItem from '../TableNoHeadItem'
import Card from '../Card'
import Button from '../Button'

import './style.css'
import '../../icon/style.css'

class TableNoHead extends React.Component{

    scheduleRender = (dataArr) => {
        let scheduleArr = [];

        dataArr.map((item,index) => {
            scheduleArr.push(<TableNoHeadItem {...item} key={'nogead-item'+index}/>)
        });

        return scheduleArr;
    };

    render(){
        const rootClass = cn('schedule-all');
        const {data} = this.props;
        
        return (
            <div className={rootClass}>
                <Card title="График работы на сегодня" extra={<div className="sum">Приемы: {data.length}</div>}>
                    <div className="tableheader">
                        <div className="flex-col">
                            <Button
                                btnText='Добавить'
                                size='default'
                                type='yellow'
                                icon='plus'
                                iconSize={11}
                                svg
                                title='Добавить новый приём'
                            />
                        </div>
                        <div className="flex-col ico-btn">
                            <Button 
                                size='link'
                                type='link'
                                icon='printer'
                                svg
                                title='Распечатать'
                            />
                            <Button 
                                size='link'
                                type='link'
                                icon='pdf-file'
                                title='Скачать pdf-файл'
                            />
                            <Button 
                                size='link'
                                type='link'
                                icon='xls-file'
                                title='Скачать xls-файл'
                            />
                        </div>
                    </div>
                    {this.scheduleRender(this.props.data)}
                  </Card>
            </div>
        )
    }
}

TableNoHead.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

TableNoHead.defaultProps = {
    data: [],
};


export default TableNoHead