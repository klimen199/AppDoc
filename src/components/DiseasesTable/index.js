import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'

import DiseasesTableItem from '../DiseasesTableItem'
import Card from '../Card'
import Button from '../Button'
import Icon from '../Icon'

import './style.css'
import '../../icon/style.css'

class DiseasesTable extends React.Component{

    render(){
        const rootClass = cn('diseases-all');

        return (
            <div className={rootClass}>
                <Card title="Хронические болезни/аллергии" extra={<div className="right-icon"><Icon svg iconSize="24" type="caution" /></div>}>
                    <DiseasesTableItem 
                        date="15.09.2017"
                        diseases='Хроническое заболевание длинное название длинное название.'
                    />
                    <DiseasesTableItem 
                        date="15.09.2017"
                        diseases='Хроническое заболевание длинное название длинное название.'
                    />
                    <DiseasesTableItem 
                        date="15.09.2017"
                        diseases='Хроническое заболевание длинное название длинное название.'
                    />
                  </Card>
            </div>
        )
    }
}

export default DiseasesTable