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

    scheduleRender = (dataArr) => {
        let scheduleArr = [];

        dataArr.map((item) => {
            scheduleArr.push(<TableNoHeadItem {...item} key={item.id}/>)
        });

        return scheduleArr;
    };

    render(){
        const rootClass = cn('schedule-all');

        return (
            <div className={rootClass}>
                <Card title="График работы на сегодня" extra={<div className="sum">Приемы: 12</div>}>
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