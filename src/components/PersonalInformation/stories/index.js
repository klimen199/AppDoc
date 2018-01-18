import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PersonalInformation from '../';

const langData = ['Английский', 'Русский', 'Немецкий', 'Японский'];

storiesOf('PersonalInformation', module)
    .add('PersonalInformation', () => (
        <div>
            <PersonalInformation 
                post="Стоматолог"
                placeOfWord="Мед центр «Lorem ipsum dolor sit amet»"
                dateStart="2011"
                expWork="10"
                langData={langData}
            />
        </div>
    ))