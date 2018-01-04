import React from 'react';
import { storiesOf } from '@storybook/react';
import CompletionReceptionModal from '../';

storiesOf('Modal - CompletionReceptionModal', module)
    .add('modal', () => (
        <div>
            <CompletionReceptionModal visible={true} />
        </div>
    ));