import React from 'react'
import { eventLevels } from './utils/eventLevels'
import cn from 'classnames'
import Icon from '../../Icon'


class EventRowMonth extends React.Component {
    constructor(props){
        super(props);
        this.now = new Date();
    }

    isSegmentInSlot = (seg, slot) => seg.left <= slot && seg.right >= slot

    renderRow = (row) => {

        return row.map((el, i) => {
            let cellClass;

            let div = el ? (
                    cellClass = cn(
                        'month-row-segment',
                        {'month-row-segment-coming':
                        this.now.getDate() <= el.date.getDate() &&
                        this.now.getMonth() <= el.date.getMonth() &&
                        this.now.getYear() <= el.date.getYear()}),

                        <div key={'_lvl_' + i}
                             className={cellClass}
                             style={{width: `${100 / 7}%`}}>
                            <div className="month-row-segment-content">
                                <div className="icon-count">
                                    <Icon type="user" size={28}/>
                                </div> {el.gap}
                            </div>
                        </div>
                ) :
                <div key={'_lvl_' + i}
                     className="rbc-row-segment"
                     style={{width: `${100/7}%`}}/>


            return (div)
        });
    }

    render() {
        let { segments, slots: slotCount = 7 } = this.props
        let rowSegments = eventLevels(segments).levels[0]
        if (!rowSegments) rowSegments = [];

        let current = 1,
            row = [],
            currentInSeg = 0;

        while (current <= slotCount) {
            let { event, left, right, span } =
                rowSegments.filter(seg => this.isSegmentInSlot(seg, current))[0] || {}

            if (!event) {
                row.push(null)
                current++;
                continue
            }

            let gap =0;
            for (let i =0, len = segments.length; i < len; i++){
                if(segments[i].left == current){
                    gap++;
                    continue;
                }
                if(segments[i].left > current){
                    break
                }
            }
            if (gap) {
                row.push({
                    gap: gap,
                    date: rowSegments[currentInSeg].event.start
                })
            }
            currentInSeg++;
            current++

        }

        return <div className="month-row">
            {this.renderRow(row)}
                </div>
    }

}

export default EventRowMonth
