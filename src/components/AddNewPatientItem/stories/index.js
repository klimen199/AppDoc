import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AddNewPatientItem from '../';

storiesOf('AddNewPatientItem', module)
    .add('AddNewPatientItem', () => (
        <div>
            <AddNewPatientItem 
                name="Иванова А. К." 
                age="35" 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                online={true}
            />
        </div>
    ))