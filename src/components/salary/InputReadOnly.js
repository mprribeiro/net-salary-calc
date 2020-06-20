import React, { Component } from 'react';
import css from './salary.module.css';

export default class InputReadOnly extends Component {
  render() {
    const { name, value, color } = this.props;

    return (
      <div className={`${css.divFull}`}>
        <span>{name}</span>
        <input
          style={{ width: '450px', color: color, fontWeight: 'bold' }}
          value={value}
          readOnly
        />
      </div>
    );
  }
}
