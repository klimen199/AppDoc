import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProfilePatient from '../';

storiesOf('ProfilePatient', module)
    .add('ProfilePatient', () => (
        <div>
            <ProfilePatient
                status='online'
            	secondname="Петров-Иванов"
            	firstname="Александр"
            	patronymic="Константинович"
            	img="https://24smi.org/public/media/resize/660x-/person/2017/10/25/cdRRFH0JWoYv_supermen.jpg"
            	lastDate={Date.now()/1000}
            	doctorType="врач-терапевт"
            	doctor="Тимошенко Т.И"
            	birthday={Date.now()/1000}
            	age="18"
            	height="187"
            	weight="85"
            />
        </div>
    ))