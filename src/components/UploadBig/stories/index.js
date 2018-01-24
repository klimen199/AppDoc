import React from 'react';
import { storiesOf } from '@storybook/react';
import PicturesWall from '../';

storiesOf('UploadBig', module)
    .add('upload', () => (
        <div>
            <PicturesWall />
        </div>
    ));