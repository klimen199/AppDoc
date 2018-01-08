import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Reviews from '../';

storiesOf('Reviews', module)
    .add('Review1', () => (
        <div>
            <Reviews/>
        </div>
    ))