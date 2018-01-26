import React from 'react';
import PropTypes from 'prop-types'
import { Steps as AntSteps } from 'antd';

import Button from '../Button';

import './styles.css'
const Step = AntSteps.Step;


class Steps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        // current: 0,
        steps: this.props.steps,
    };
  }
  // next() {
  //   const current = this.state.current + 1;
  //   this.setState({ current });
  // }
  // prev() {
  //   const current = this.state.current - 1;
  //   this.setState({ current });
  // }
  render() {
    const { steps } = this.state;
    const  {current} = this.props;

    return (
      <div className='steps'>
        <AntSteps className="steps-rounds" current={current}>
          {steps.map(item => <Step className="steps-round"
                                   key={item.title}
                                   title={item.title} />)}
        </AntSteps>
        <div className="steps-content">
            {steps[current].content}</div>
        {/*<div className="steps-action">*/}
          {/*{*/}
            {/*current > 0*/}
            {/*&&*/}
             {/*<Button onClick={this.props.onPrev}*/}
                    {/*btnText='Назад'*/}
                    {/*size='large'*/}
                    {/*type='float'*/}
            {/*/>*/}
          {/*}*/}
          {/*{*/}
            {/*current < steps.length - 1*/}
            {/*&&*/}
            {/*<Button onClick={this.props.onNext}*/}
                    {/*btnText='Далее'*/}
                    {/*size='large'*/}
                    {/*type='gradient'*/}
            {/*/>*/}
          {/*}*/}
          {/*{*/}
            {/*current === steps.length - 1*/}
            {/*&&*/}
            {/*<Button onClick={this.props.onFinish}*/}
                    {/*btnText='Завершить'*/}
                    {/*size='large'*/}
                    {/*type='gradient'*/}
            {/*/>*/}
          {/*}*/}
        {/*</div>*/}
      </div>
    );
  }
}

Steps.propTypes ={
    steps: PropTypes.array,
    onFinish: PropTypes.func,
}

Steps.defaultProps = {
    steps: [],
    onFinish: () => {},
}

export default Steps