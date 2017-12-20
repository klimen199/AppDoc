import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Table from '../';

import {dataSource, columns} from './mock-data'


storiesOf('Table', module)
    .add('basic', () => (<div>
            <Table dataSource={dataSource} columns={columns} />
            <p className="lol">asd</p>
            <p>wertyuiuytr</p>
        </div>
    ))