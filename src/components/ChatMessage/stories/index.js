import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChatMessage from '../';

storiesOf('ChatMessage', module)
    .add('default', () => (
        <div>
            <ChatMessage 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                message="Консультация по результатам анализа..." 
                time={Date.now()}
                isMy
            />

            <ChatMessage 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                message="Да"
                time={Date.now()}
                isDate
            />

            <ChatMessage 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                message="Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах."
                time={Date.now()}
            />
        </div>
    ))