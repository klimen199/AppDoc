import React from 'react'
import { storiesOf } from '@storybook/react'

import Icon from '../'
import { iconsList } from '../IconsList'

const iconTypes = Object.keys(iconsList);

const showIcons = () => {
    return (<div>
        {iconTypes.map(type => (
            <div key={type}>
                <Icon svg type={type} size={40} />
                <p>{type}</p>
            </div>
        ))}
    </div>);
};

import './lol.css'

storiesOf('Icon', module)
    .add('Custom SVG icon', showIcons)
    .add('test', () => (
        <div className="lol">
            <Icon svg type="arrowLeft"/>
            <span>lolol </span>
        </div>
    ))
    .add('Antd icons', () => <Icon type="check" />);