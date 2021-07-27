import React, { Component } from "react";
import ExpenseDate from '../ExpenseDate/ExpenseDate';

class ExpenseItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            date: props.date,
            expenseTitle: props.expenseTitle,
            expenseAmount: props.expenseAmount
        }
    }

    render() {
        return (
            <div className="expense-item">
                <ExpenseDate date={this.state.date}/>
                <div className="expense-item__description">
                    <h2>{this.state.expenseTitle}</h2>
                    <div className="expense-item__price">${this.state.expenseAmount}</div>
                </div>
            </div>
        );
    }
}

export default ExpenseItem;
