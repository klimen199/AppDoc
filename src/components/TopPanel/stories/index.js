import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TopPanel from '../';
import TopPanelItem from '../../TopPanelItem/';
import { Row, Col } from 'antd';

storiesOf('TopPanel', module)
    .add('TopPanel', () => (
          <div>
              <Row> 
                <div className='topPanel'>
                 <Col span={6} className='flexCol'>
                    <TopPanelItem
                    className='first-col'
                    PanelTitle="10 сентября 2017"
                    PanelText="Вторник  13:25"
                    svg
                    icon='calendar'
                    ></TopPanelItem>
                  </Col>

                  <Col span={6} className='flexCol'>
                    <TopPanelItem
                    PanelTitle="Приемы сегодня"
                    PanelText="12"
                    icon='info'
                    ></TopPanelItem>
                  </Col>

                  <Col span={6} className='flexCol'>
                    <TopPanelItem
                    PanelTitle="Актуальные обращения"
                    PanelText="2"
                    svg
                    icon='clock'
                    ></TopPanelItem>
                  </Col>

                  <Col span={6} className='flexCol'>
                    <TopPanelItem
                    PanelTitle="Мои пациенты"
                    PanelText="37"
                    icon='user'
                    ></TopPanelItem>
                  </Col>
                </div>
              </Row>
             
          </div>
    ))