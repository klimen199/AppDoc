import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PatientCalendarCarousel from '../';

storiesOf('PatientCalendarCarousel', module)
    .add('PatientCalendarCarousel', () => (
        <div>
            <PatientCalendarCarousel />
        </div>
    ))