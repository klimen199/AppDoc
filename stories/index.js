import React from 'react'
import { configure, addDecorator } from '@storybook/react'

import StorybookStylesProvider from './StorybookStylesProvider'

const LocalProviderDecorator = story => (
    <div>
        <StorybookStylesProvider>{story()}</StorybookStylesProvider>
    </div>
);

const loadStories = () => {
    addDecorator(LocalProviderDecorator);

    require('../src/components/Arrow/stories');
    require('../src/components/Button/stories');
    require('../src/components/Checkbox/stories');
    require('../src/components/Input/stories');
    require('../src/components/Table/stories');
    require('../src/components/Select/stories');
    require('../src/components/Switch/stories');
    require('../src/components/SwitchPanel/stories');
    require('../src/components/DatePicker/stories');
    require('../src/components/Modal/stories');
    require('../src/components/CompleteAppeal/stories');
    require('../src/components/Rate/stories');
    require('../src/components/RatePanel/stories');
    require('../src/components/TextArea/stories');
    require('../src/components/Icon/stories');
    require('../src/components/Tabs/stories');
    require('../src/components/CancelVisitModal/stories');
};

configure(loadStories, module);