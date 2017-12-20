import React from 'react'
import { configure, addDecorator } from '@storybook/react'

import StorybookStylesProvider from './StorybookStylesProvider'

const LocalProviderDecorator = story => (
    <div>
        <StorybookStylesProvider>{story()}</StorybookStylesProvider>
    </div>
)

const loadStories = () => {
    addDecorator(LocalProviderDecorator)

    require('../src/components/Button/stories')
    require('../src/components/Table/stories')
}

configure(loadStories, module)