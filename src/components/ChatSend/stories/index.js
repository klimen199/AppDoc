import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChatSend from '../';

storiesOf('ChatSend', module)
    .add('default', () => (
        <div>
            <ChatSend send={message => console.log(message)}
                        disable={false}
                        closeVisit = {() => console.log('close visit')}
                        uploadFiles = {(arr) => console.log('files:',arr)}
                        uploadConclusion = {(arr) => console.log('conclusions:',arr)}
            />
        </div>
    ))