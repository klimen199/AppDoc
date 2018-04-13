import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Router, Route, Switch } from 'react-router'
import { MemoryRouter } from 'react-router';


import SideNav from '../';
import {menuItems} from './mock-data'

storiesOf('SideNav', module)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ))
    .add('default', () => (
        <div style={{height: 500}}>
            {/*<div style={{backgroundColor:'yellow',height:50, padding:15}}>Top panel with Logo</div>*/}
            <SideNav menuItems={menuItems}
                     img="https://www.proza.ru/pics/2017/06/03/1990.jpg"
                     name='Ивано Иван Иванович'
                     specialty='терапевт'
                     rateValue={2}
                     timesRated={34}
                     onLogoClick = {() => {console.log('logo click')}}
                     online/>
        </div>
    ))
    .add('test', () => (
    <div style={{height: 500}}>
        {/*<div style={{backgroundColor:'yellow',height:50, padding:15}}>Top panel with Logo</div>*/}
        <SideNav menuItems={menuItems}
                 img="https://www.proza.ru/pics/2017/06/03/1990.jpg"
                 name='Ивано Иван Иванович'
                 specialty='терапевт'
                 rateValue={4}
                 timesRated={34}
                 isShort={true}
                 online/>
    </div>
));