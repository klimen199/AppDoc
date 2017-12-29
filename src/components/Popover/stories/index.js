import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Popover from '../';
import Icon from '../../Icon';
import Link from '../../Links'
import Button from '../../Button'

const content = (
  <div>
    <Link btnText="Прикрепленный файл с длинным предлинным названием.doc"
          size="default" 
          type="link"
          download
          svg
          icon="file"
          iconSize={16}
    />
    <Link btnText="Файл.doc"
          size="default" 
          type="link"
          download
          svg
          icon="file"
          iconSize={16}
    />
    <Link btnText="52525.pdf"
          size="default" 
          type="link"
          download
          svg
          icon="file"
          iconSize={16}
    />

    <Button onClick={action('clicked')}
            btnText=''
            size='file all-download'
            type='file'
            icon='download'
            svg
            iconSize={28}
    />
  </div>
);

storiesOf('Popover', module)
    .add('Popover', () => (
        <div style={{ padding: '30px' }}>
            <Popover placement="bottomRight" content={content} trigger="click">
                 <Icon svg type={"file-download popover-nun"} size={30}  num={3}/>
            </Popover>
        </div>
    ))