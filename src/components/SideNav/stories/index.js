import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SideNav from '../';
import {menuItems} from './mock-data'

storiesOf('SideNav', module)
    .add('default', () => (
        <div>
            <div style={{backgroundColor:'yellow',height:50, padding:15}}>Top panel with Logo</div>
            <SideNav menuItems={menuItems}/>
        </div>
    ));