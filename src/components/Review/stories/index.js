import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Rewiew from '../';

storiesOf('Rewiew', module)
    .add('Rewiew', () => (
        <div>
            <Rewiew 
                name="Иванова А. К." 
                rewText="Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана." 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                time="5"
                unit="часов"
            />
        </div>
    ))