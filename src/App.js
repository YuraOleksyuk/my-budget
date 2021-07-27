import './App.css';

import { Component } from "react";

import ExpenseList from './components/ExpenseList/ExpenseList';
import NewExpense from './components/NewExpense/NewExpense';

class App extends Component {

    constructor() {
        super();

        this.state = {
            avaliableYears: ['none','2019', '2020', '2021', '2022'],
            expenses: [
                {id: '1', date: new Date(2020, 7, 14), expenseTitle: 'Car', expenseAmount: 255.55},
                {id: '2', date: new Date(2021, 2, 28), expenseTitle: 'Car', expenseAmount: 255.55},
                {id: '3', date: new Date(2021, 5, 12), expenseTitle: 'Cat', expenseAmount: 242.55},
            ],
        }
    }

    addNewExpense(newExpense) {
        const expenses = this.state.expenses.slice();
        newExpense.id = Math.random(Math.random() * 200000);

        this.setState({
            expenses: [newExpense, ...this.state.expenses]
        })
    }

    render() {
        return(
            <div>
                <NewExpense addNewExpense={this.addNewExpense.bind(this)}/>
                <ExpenseList expenses={this.state.expenses}/>
            </div>
        );
    }
}

export default App;
