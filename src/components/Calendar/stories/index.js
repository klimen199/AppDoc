import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

// import Calendar from '../';
import {events} from './mock-data'

storiesOf('Calendar', module)
    .add('default', () => (
        <div>
            {/*<Calendar events = {events}/>*/}
        </div>
    ));