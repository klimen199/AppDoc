import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChatOutMessage from '../';

storiesOf('ChatOutMessage', module)
    .add('default', () => (
        <div>
            <ChatOutMessage 
                message="Консультация по результатам анализа..." 
                time="15:00"
            />

            <ChatOutMessage 
                message="Да" 
                time="15:00"
            />

            <ChatOutMessage 
                message="Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах." 
                time="15:00"
            />
        </div>
    ))