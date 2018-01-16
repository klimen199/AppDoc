import React from 'react';

import ProfileAvatar from '../ProfileAvatar'
import Rate from '../Rate'
import Button from '../Button'
import SecondaryReview from './SecondaryReview'
import AnswerArea from './AnswerArea'

import {dateToString} from '../../helpers/prepareDate'

class MainReview extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showComment: false,
            showAnswerArea: false, // TO FIX -> false
        }
    }

    showComment = () => {
        this.setState(prev => ({showComment:!this.state.showComment}));
    };

    showAnswArea = () => {
        this.setState(prev => ({showAnswerArea:!this.state.showAnswerArea}));
    };

    answAreaHandler = (message) => {
        this.setState(prev => ({showAnswerArea:false}));
        this.props.onSend(message);
    };

    render(){
        const {author, avatar, date, online, text, rate, treatmentDate, secondaryAllowed, comment} = this.props;
        let treatment = `Обращение от ${treatmentDate}`;
        let time = dateToString(date);

        const commentDisplay = this.state.showComment ? 'block' : 'none';
        const answAreaDisplay = this.state.showAnswerArea ? 'block' : 'none';

        return (
            <div className='review-root'>
                <div className='review'>
                <ProfileAvatar owner="patient" img={avatar} online={online} size='small'/>
                <div className="patient-info">
                    <div className="flex-row">
                        <div className="patient-name">{author}</div>
                        <div className="patient-time">{time}</div>
                        <Rate defaultValue={rate}/>
                    </div>
                    <div className="flex-row">
                        <div className="patient-text">{text}</div>
                    </div>
                    <Button
                        btnText={treatment}
                        size='go'
                        iconSize={16}
                        type='go'
                        icon='circle_arrow_right'
                        svg
                    />
                </div>
                <div className="review-answerBtn">
                    {
                        comment ?
                            <Button btnText={this.state.showComment ? 'Скрыть ответ' : 'Посмотреть ответ'}
                                    size='file'
                                    type='file'
                                    icon={this.state.showComment ? 'circle_arrow_up' : 'circle_arrow_down'}
                                    svg
                                    onClick={this.showComment}
                            />
                            :
                            (secondaryAllowed && !this.state.showAnswerArea &&
                                <Button onClick={this.showAnswArea}
                                        btnText='Ответить'
                                        size='default'
                                        type='blue'
                                        className='review-answerBtn-answer'/>)
                    }
                </div>
                </div>
                <div className="review-root-comment" style={{display: commentDisplay}}>
                    {comment && <SecondaryReview {...comment}/>}
                </div>
                <div className="review-root-answerArea" style={{display: answAreaDisplay}}>
                    { secondaryAllowed && <AnswerArea onSend={message => this.answAreaHandler(message)}/>}
                </div>
            </div>
        )
    }
}

export default MainReview