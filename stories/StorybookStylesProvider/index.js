import React from 'react'
import PropTypes from 'prop-types'
import { LocaleProvider } from 'antd'
import ruRu from 'antd/lib/locale-provider/ru_RU'

//import '../../node_modules/antd/dist/antd.less';

const StylesProvider = props => {
    const { children } = props

    return <LocaleProvider locale={ruRu}>{children}</LocaleProvider>
}

StylesProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default StylesProvider