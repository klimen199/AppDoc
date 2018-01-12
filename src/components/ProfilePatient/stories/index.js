import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProfilePatient from '../';

storiesOf('ProfilePatient', module)
    .add('ProfilePatient', () => (
        <div>
            <ProfilePatient/>
        </div>
    ))