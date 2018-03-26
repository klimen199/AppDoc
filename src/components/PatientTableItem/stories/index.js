import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PatientTableItem from '../';

storiesOf('PatientTableItem', module)
    .add('PatientTableItem', () => (
        <div>
            <PatientTableItem 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                name="Иванова А. К." 
                age="37" 
                date="15.09.2017"
                time="15:00-16:00"
                onGoto={()=>console.log('click')}
            />
        </div>
    ))