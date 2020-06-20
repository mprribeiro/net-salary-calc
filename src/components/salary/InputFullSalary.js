import React, { Component } from 'react';
import css from './salary.module.css';

export default class InputFullSalary extends Component {
  handleInputChange = (event) => {
    const newtext = event.target.value;
    this.props.onChangeSalary(newtext);
  };

  render() {
    const { value } = this.props;

    return (
      <div className={`${css.divFull}`}>
        <span className={`${css.textBase}`}>Salário Bruto</span>
        <input
          className={`${css.fullInput}`}
          onChange={this.handleInputChange}
          value={value}
        />
      </div>
    );
  }
}
