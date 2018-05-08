import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProfilePatient from '../';

storiesOf('ProfilePatient', module)
    .add('ProfilePatient', () => (
        <div>
            <ProfilePatient
                status='online'
            	name= "тестовый пациент"
            	img="https://24smi.org/public/media/resize/660x-/person/2017/10/25/cdRRFH0JWoYv_supermen.jpg"
            	lastDate={1523610900}
            	doctorType="врач-терапевт"
            	doctor="Тимошенко Т.И"
            	birthday={631271421}
            	age="18"
            	height="187"
				weight="85"
				isMy={true}
				id={2223}
				onAdd={(id) => {console.log(id)}}
            />
        </div>
    ))