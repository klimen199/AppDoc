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
        <div className='flexTest'>
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='float'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='blue'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='dark-blue'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='yellow'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='gradient'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='gradient'
                    disable
            />
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
        <div className='flexTest'>
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='small'
                    type='float'
                    icon='form'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='default'
                    type='blue'
                    icon='plus'
            />
            <Button onClick={action('clicked')}
                    btnText='Добавить'
                    size='large'
                    type='yellow'
                    icon='plus'
            />
            <Button onClick={action('clicked')}
                    btnText=''
                    size='icon'
                    type='icon'
                    icon='phone'
            />
        </div>
    ))