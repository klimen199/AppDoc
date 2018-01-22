import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ArrowGroup from '../';

storiesOf('ArrowGroup', module)
    .add('ArrowGroup', () => (
            <div className="flexTest">
                <ArrowGroup
                        type='dark-blue'
                />
            </div>

    ))