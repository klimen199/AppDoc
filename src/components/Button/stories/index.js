import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../';

storiesOf('Button', module)
    .add('Small', () => (
        <div className='flexTest'>
            <Button onClick={action('clicked')}
                    btnText="Добавить"
                    size="small" 
                    type="float"
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='small'
                    type='blue'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='small'
                    type='dark-blue'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='small'
                    type='yellow'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='small'
                    type='gradient'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='small'
                    type='gradient'
                    disable
            />
        </div>
    ))
    .add('Default', () => (
        <div>
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='float'
            />
            <span> size='default'
            type='float' </span>
            <br/>
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='blue'
            />
            <span> size='default'
                type='blue'</span>
            <br/>
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='dark-blue'
            />
            <span> size='default'
                type='dark-blue'</span>
            <br/>
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='yellow'
            />
            <span> size='default'
                type='yellow'</span>
            <br/>
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='gradient'
            />
            <span> size='default'
                type='gradient'</span>
            <br/>
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='gradient'
                    disable
            />
            <span> size='default'
                type='gradient'
                disable</span>
        </div>
    ))
    .add('Large', () => (
        <div className='flexTest'>
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='large'
                    type='float'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='large'
                    type='blue'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='large'
                    type='dark-blue'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='large'
                    type='yellow'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='large'
                    type='gradient'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='large'
                    type='gradient'
                    disable
            />
        </div>
    ))
    .add('Icon', () => (
        <div>
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='small'
                    type='float'
                    icon='form'
            />
            <br/>
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='blue'
                    icon='clock'
                    svg
            />
            <br/>
            <Button onClick={action('clicked')}
                    btnText='Добавить (antIcon)'
                    size='large'
                    type='yellow'
                    icon='plus-square'
                    iconSize={15}
            />
            <br/>
            <Button onClick={action('clicked')}
                    btnText=''
                    size='icon'
                    type='icon'
                    icon='clock'
                    svg
            />
            <br/>
            <Button onClick={action('clicked')}
                    btnText=''
                    size='icon'
                    type='light-blue'
                    icon='clock'
                    svg
                    iconSize={30}
            />
        </div>
    ))
    .add('Link', () => (
        <div className='flexTest'>
            <Button onClick={action('clicked')}
                    btnText='Показать еще'
                    size='link'
                    type='link'
                    icon='play-circle'
            />
            <Button onClick={action('clicked')}
                    btnText='Отменить приемы'
                    size='link'
                    type='link'
                    icon='circle_close'
                    svg
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить интервал'
                    size='file'
                    type='file'
                    icon='add-button'
                    svg
            />
            <Button onClick={action('clicked')}
                    btnText='Обращение от 13.09.2017'
                    size='go'
                    type='go'
                    icon='circle_arrow_right'
                    svg
            />
        </div>
    ))