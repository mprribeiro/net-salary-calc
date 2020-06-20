import React, { Component } from 'react';
import css from './salary.module.css';

export default class ProgressBarSalary extends Component {
  render() {
    const { discountINSS, discountIRPF, netSalary } = this.props;

    return (
      <div className={css.bar}>
        <div
          style={{ width: discountINSS * 15 }}
          className={css.discountINSS}
        ></div>
        <div
          style={{ width: discountIRPF * 15 }}
          className={css.discountIRPF}
        ></div>
        <div style={{ width: netSalary * 15 }} className={css.netSalary}></div>
      </div>
    );
  }
}
