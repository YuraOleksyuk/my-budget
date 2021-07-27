import React from "react";
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import ExpensesChart from "../ExpensesChart/ExpensesChart";

class ExpenseList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            avaliableYears: ['2019', '2020', '2021', '2022'],
            selectedYear: '2021',
        }
    }

    renderExpenseItem(item) {
        return (
            <ExpenseItem
                date={item.date}
                key={item.id}
                expenseTitle={item.expenseTitle}
                expenseAmount={item.expenseAmount}
            />
        );
    }

    handleFilterByYear(event) {
        const selectedYear = event.target.value;

        this.setState({
            selectedYear: selectedYear
        })
    }

    getFilteredExpenses() {
        return this.props.expenses.filter((item) => {
            return this.state.selectedYear === item.date.getFullYear().toString();
        });
    }

    render() {

        let expensesList = this.getFilteredExpenses().map((item) => {
           return this.renderExpenseItem(item);
        });

        if (!expensesList.length) {
            expensesList = <p>No expenses found</p>;
        }

        return (
            <div className="expenses">
                <ExpensesChart expenses={this.getFilteredExpenses()}/>
                <ExpenseFilter
                    handleFilterByYear={this.handleFilterByYear.bind(this)}
                    avaliableYears={this.state.avaliableYears}
                    selectedYear={this.state.selectedYear}
                />
                { expensesList }
            </div>
        );
    }
}

export default ExpenseList;
