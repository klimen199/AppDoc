import PropTypes from 'prop-types'
import React from 'react'
import EventRowMixin from './EventRowMixin'
import { eventLevels } from './utils/eventLevels'
import message from './utils/messages'
import range from 'lodash/range'
import Icon from '../../Icon'

let isSegmentInSlot = (seg, slot) => seg.left <= slot && seg.right >= slot
let eventsInSlot = (segments, slot) =>
  segments.filter(seg => isSegmentInSlot(seg, slot)).length

class EventEndingRow extends React.Component {
  static propTypes = {
    segments: PropTypes.array,
    slots: PropTypes.number,
    messages: PropTypes.object,
    onShowMore: PropTypes.func,
    ...EventRowMixin.propTypes,
  }
  static defaultProps = {
    ...EventRowMixin.defaultProps,
  }

  render() {
    let { segments, slots: slotCount } = this.props
    let rowSegments = eventLevels(segments).levels[0]
      if (!rowSegments) rowSegments = [];

    let current = 1,
      lastEnd = 1,
      row = []

    while (current <= slotCount) {
      let key = '_lvl_' + current

      let { event, left, right, span } =
        rowSegments.filter(seg => isSegmentInSlot(seg, current))[0] || {} //eslint-disable-line

      if (!event) {
        current++
        continue
      }

      let gap = Math.max(0, left - lastEnd)

        if (gap) {
          row.push(EventRowMixin.renderSpan(this.props, gap, key + '_gap'))
        }

        row.push(
          EventRowMixin.renderSpan(
            this.props,
            1,
            key,
            this.renderShowMore(segments, current)
          )
        )
        lastEnd = current = current + 1
    }

    return <div className="rbc-row">{row}</div>
  }

  canRenderSlotEvent(slot, span) {
    let { segments } = this.props

    return range(slot, slot + span).every(s => {
      let count = eventsInSlot(segments, s)

      return count === 1
    })
  }

  renderShowMore(segments, slot) {
    let messages = message(this.props.messages)
    let count = eventsInSlot(segments, slot)

    return count && (
      <div
        key={'sm_' + slot}
        className='rbc-month-receptionNum'
        onClick={e => this.showMore(slot, e)}
      >
        <Icon type="user"/> {count}
      </div>
    )
  }

  showMore(slot, e) {
    e.preventDefault()
    this.props.onShowMore(slot)
  }
}

export default EventEndingRow
