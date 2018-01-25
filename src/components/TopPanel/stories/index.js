import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TopPanel from '../';
import TopPanelItem from '../../TopPanelItem/';
import { Row, Col } from 'antd';

storiesOf('TopPanel', module)
    .add('TopPanel', () => (
          <div>
            <Row className='section'>
              <div className='topPanel'>
                <Col span={6}>
                  <div className='flexCol'>
                    <TopPanelItem
                      className='first-col'
                      panelTitle="10 сентября 2017"
                      panelText="Вторник  13:25"
                      svg
                      icon='calendar'
                    >
                    </TopPanelItem>
                  </div>
                </Col>

                <Col span={6}>
                  <div className='flexCol'>
                    <TopPanelItem
                      panelTitle="Приемы сегодня"
                      panelText="12"
                      icon='info'
                    >
                    </TopPanelItem>
                  </div>
                </Col>

                <Col span={6}>
                  <div className='flexCol'>
                    <TopPanelItem
                        panelTitle="Актуальные обращения"
                        panelText="2"
                        svg
                        icon='clock'
                    >
                    </TopPanelItem>
                  </div>
                </Col>

                <Col span={6}>
                  <div className='flexCol'>
                    <TopPanelItem
                      panelTitle="Мои пациенты"
                      panelText="37"
                      icon='user'
                    >
                    </TopPanelItem>
                  </div>
                </Col>
              </div>
            </Row>
          </div>
    ))