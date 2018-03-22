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

    diseasesRender = (dataArr) => {
        let diseasesArr = [];

        dataArr.map((item, index) => {
            diseasesArr.push(<DiseasesTableItem {...item} key={item.id + ''+index}/>)
        });

        return diseasesArr;
    };

    render(){
        const rootClass = cn('diseases-all');

        return (
            <div className={rootClass}>
                <Card title="Хронические болезни/аллергии" extra={<div className="right-icon"><Icon svg iconSize="24" type="caution" /></div>}>
                    {this.diseasesRender(this.props.data)}
                  </Card>
            </div>
        )
    }
}

DiseasesTable.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

DiseasesTable.defaultProps = {
    data: [],
};

export default DiseasesTable