import PropTypes from 'prop-types'
import React from 'react'
import cn from 'classnames'
import { navigate } from './utils/constants'
import Button from '../../Button'
import Arrow from '../../Arrow'

class Toolbar extends React.Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    views: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.node.isRequired,
    messages: PropTypes.object,
    onNavigate: PropTypes.func.isRequired,
    onViewChange: PropTypes.func.isRequired,
  }

  render() {
    let { messages, label, receptionNum } = this.props

    return (
      <div className="rbc-toolbar">
        <Button
            btnText={messages.today}
            size='small'
            type='dark-blue'
            onClick={this.navigate.bind(null, navigate.TODAY)}/>
        <Arrow type='dark-blue'
               onClickNext={this.navigate.bind(null, navigate.NEXT)}
               onClickPrev={this.navigate.bind(null, navigate.PREVIOUS)}/>

        <span className="rbc-toolbar-label">{label}</span>
        <span className="rbc-toolbar-receptionCount">{receptionNum}</span>

        <span className="rbc-btn-group">{this.viewNamesGroup(messages)}</span>
      </div>
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onViewChange(view)
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return viewNames.map(name => (
        <Button
          key={name}
          size="small"
          btnText={messages[name]}
          onClick={this.view.bind(null, name)}
        />
      ))
    }
  }
}

export default Toolbar
