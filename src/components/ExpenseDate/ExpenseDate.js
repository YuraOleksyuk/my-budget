import {Component} from 'react';

class ExpenseDate extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        let year = this.props.date.getFullYear();
        let month = this.props.date.toLocaleString('default', { month: 'long' });
        let day = this.props.date.getDate();

        return(
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>
        )
    }

}

export default ExpenseDate;
