import React, { Component } from 'react';
import InputFullSalary from './components/salary/InputFullSalary';
import InputReadOnly from './components/salary/InputReadOnly';
import ProgressBarSalary from './components/salary/ProgressBarSalary';
import css from './components/salary/salary.module.css';
import { calculateSalaryFrom, round } from './components/helpers/salary';
import { formatNumber } from './components/helpers/formatHelpers';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: '',
    };
  }

  handleInputChange = (newSalary) => {
    this.setState({
      fullSalary: newSalary,
    });
  };

  render() {
    const { fullSalary } = this.state;

    const data = calculateSalaryFrom(fullSalary);

    const { baseINSS, discountINSS, baseIRPF, discountIRPF, netSalary } = data;

    const percentINSS =
      fullSalary !== '' ? round((discountINSS / fullSalary) * 100) : 0;
    const percentIRPF =
      fullSalary !== '' ? round((discountIRPF / fullSalary) * 100) : 0;
    const percentTotal =
      fullSalary !== '' ? round((netSalary / fullSalary) * 100) : 0;

    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>React Salário</h2>
        <InputFullSalary
          value={fullSalary}
          onChangeSalary={this.handleInputChange}
        />
        <div className={`${css.flexRow}`}>
          <InputReadOnly
            value={`${formatNumber(baseINSS)}`}
            name="Base INSS:"
          />
          <InputReadOnly
            value={`${formatNumber(discountINSS)} (${percentINSS}%)`}
            name="Desconto INSS:"
            color="#e67e22"
          />
          <InputReadOnly
            value={`${formatNumber(baseIRPF)}`}
            name="Base IRPF:"
          />
          <InputReadOnly
            value={`${formatNumber(discountIRPF)} (${percentIRPF}%)`}
            name="Desconto IRPF:"
            color="#c0392b"
          />
        </div>
        <InputReadOnly
          value={`${formatNumber(netSalary)} (${percentTotal}%)`}
          name="Salário líquido:"
          color="#16a085"
        />
        <ProgressBarSalary
          discountINSS={percentINSS}
          discountIRPF={percentIRPF}
          netSalary={percentTotal}
        />
      </div>
    );
  }
}
