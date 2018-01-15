import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import HistoryReceptions from '../';

storiesOf('HistoryReceptions', module)
    .add('HistoryReceptions', () => (
        <div>
            <HistoryReceptions/>
        </div>
    ))