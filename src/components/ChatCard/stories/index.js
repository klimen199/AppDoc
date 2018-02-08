import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChatCard from '../';

import {filesArr} from './mock-data.js'

storiesOf('ChatCard', module)
    .add('ChatCard', () => (
        <div>
            <ChatCard 
            	patientName='Иванова Александра Константиновна'
            	online='online'
            />
        </div>
    ))

    .add('ChatCard Files', () => (
        <div>
            <ChatCard data={filesArr}
            	patientName='Иванова Александра Константиновна'
            	online='offline'
            	isActive
            />
        </div>
    ))