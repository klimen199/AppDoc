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
        <div>
            <div style={{backgroundColor:'yellow',height:50, padding:15}}>Top panel with Logo</div>
            <SideNav menuItems={menuItems}/>
        </div>
    ));