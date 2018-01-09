import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TableNoHead from '../';

storiesOf('TableNoHead', module)
    .add('TableNoHead', () => (
        <div>
            <TableNoHead/>
        </div>
    ))