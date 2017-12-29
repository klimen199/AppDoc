import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Link from '../';

storiesOf('Link', module)
    .add('Link ico', () => (
        <div className='flexTest'>
            <Link onClick={action('clicked')}
                    btnText="Прикрепленный файл с длинным предлинным названием.doc"
                    size="default" 
                    type="link"
                    download
                    svg
                    icon="file"
                    iconSize={16}
            />
        </div>
    ))