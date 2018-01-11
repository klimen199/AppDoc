import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DiseasesTable from '../';

storiesOf('DiseasesTable', module)
    .add('DiseasesTable', () => (
        <div>
            <DiseasesTable/>
        </div>
    ))