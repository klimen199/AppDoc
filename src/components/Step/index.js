import React from 'react';
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Steps, message } from 'antd';

import Button from '../Button';

import './styles.css'
const Step = Steps.Step;

const steps = [{
  title: 'Контактная информация',
  content: '',
}, {
  title: 'Образование, опыт работы',
  content: 'Second-content',
}, {
  title: 'Проверка данных',
  content: 'Last-content',
}];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    };
  }
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }
  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
  render() {
    const { current } = this.state;
    const rootClass = cn('steps');

    return (
      <div className={rootClass}>
        <Steps className="steps-rounds" current={current}>
          {steps.map(item => <Step className="steps-round" key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-content">{steps[this.state.current].content}</div>
        <div className="steps-action">
          {
            this.state.current > 0
            &&
             <Button onClick={() => this.prev()}
                    btnText='Назад'
                    size='large'
                    type='float'
            />
          }
          {
            this.state.current < steps.length - 1
            &&
            <Button onClick={() => this.next()}
                    btnText='Далее'
                    size='large'
                    type='gradient'
            />
          }
          {
            this.state.current === steps.length - 1
            &&
            <Button onClick={() => message.success('Processing complete!')}
                    btnText='Завершить'
                    size='large'
                    type='gradient'
            />
          }
        </div>
      </div>
    );
  }
}

App.propTypes ={
    steps: PropTypes.string,
}

App.defaultProps = {
    steps: '',
}

export default App