import React from 'react';
import { storiesOf } from '@storybook/react';
import Upload from '../';

storiesOf('Upload', module)
    .add('upload', () => (
        <div>
            <Upload/>
        </div>
    ));