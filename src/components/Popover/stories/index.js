import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Popover from '../';
import Icon from '../../Icon';
import Link from '../../Links'
import Button from '../../Button'

const content = (
  <div className='default-popover'>
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

    <Button 
            size='file all-download'
            type='file'
            icon='download'
            svg
            iconSize={28}
    />
  </div>
);

const content2 = (
  <div className='calendar-body'>
    <a className='calendar-name'>Иванова Александра</a>
    <div className='calendar-date'>23 ноября  
      <Button 
        size='file'
        type='file'
        icon='telephone'
        svg
        iconSize={21}
      />
    </div>
    
    <div className='calendar-time'>08:15 - 08:20</div>
    <div className='calendar-text'>Консультация по результатам анализа крови.</div>

    <div className='calendar-block'>
      <Button 
        size='file'
        type='file'
        icon='mail'
        svg
        iconSize={16}
      />
      <Button 
        size='file'
        type='file'
        icon='circle_close'
        svg
        iconSize={18}
      />
    </div>
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
    .add('CalendarPopover', () => (
        <div style={{ padding: '30px' }}>
            <Popover className='calendar-popover' placement="rightTop" content={content2} trigger="click">
                 <Button btnText='Right' />
            </Popover>
        </div>
    ))