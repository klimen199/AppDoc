import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ChatInMessage from '../';

storiesOf('ChatInMessage', module)
    .add('default', () => (
        <div>
            <ChatInMessage 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                message="Консультация по результатам анализа..." 
                time="15:00"
            />

            <ChatInMessage 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                message="Да" 
                time="15:00"
            />

            <ChatInMessage 
                img="https://www.proza.ru/pics/2017/06/03/1990.jpg" 
                message="Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах." 
                time="15:00"
            />
        </div>
    ))