import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ArrowGroup from '../';
// import Fonts from '../../fonts.css';

storiesOf('ArrowGroup', module)
    .add('ArrowGroup', () => (
            <div className="flexTest">
                <ArrowGroup onClick={action('clicked')}
                        type='dark-blue'
                />
            </div>

    ))