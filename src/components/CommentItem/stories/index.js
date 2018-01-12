import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CommentItem from '../';

storiesOf('Comment - CommentItem', module)
    .add('primary', () => (
        <div>
            <CommentItem online='online'/>
        </div>
    ))
    .add('secondary', () => (
        <div>
            <CommentItem online='offline'/>
        </div>
    ));