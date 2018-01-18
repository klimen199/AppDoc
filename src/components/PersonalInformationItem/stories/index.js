import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PersonalInformationItem from '../';

const langData = ['Английский', 'Русский', 'Немецкий', 'Японский'];

storiesOf('PersonalInformationItem', module)
    .add('PersonalInformationItem', () => (
        <div>
            <PersonalInformationItem 
                post="Стоматолог"
                placeOfWord="Мед центр «Lorem ipsum dolor sit amet»"
                dateStart="2011"
                expWork="10"
                langData={langData}
            />
        </div>
    ))