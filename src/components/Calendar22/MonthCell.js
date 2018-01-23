import React from 'react'
import EventRowMixin from './libr/EventRowMixin'


const MonthCell = (props) => {

    let { segments } = props

    let lastEnd = 1

    return (<div>
        {segments.reduce((row, { event, left, right, span }, li) => {
            let key = '_lvl_' + li
            let gap = left - lastEnd

            let content = EventRowMixin.renderEvent(props, event)

            if (gap)
                row.push(EventRowMixin.renderSpan(props, gap, key + '_gap'))

            row.push(EventRowMixin.renderSpan(props, span, key, content))

            lastEnd = right + 1

            return row
        }, [])}
    </div>)
};

export default MonthCell;