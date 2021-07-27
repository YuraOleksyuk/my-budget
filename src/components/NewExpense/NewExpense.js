import {Component} from 'react';

class NewExpense extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            amount: '',
            date: '',
            showForm: false,
        }
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value =  target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const newExpense = {
            expenseTitle: this.state.title,
            expenseAmount: +this.state.amount,
            date: new Date(this.state.date),
        }

        this.props.addNewExpense(newExpense)

        this.setState({
            title: '',
            amount: '',
            date: '',
        })
    }

    handeleClickToggle() {
        this.setState((state) => {
            return {
                showForm: !state.showForm
            }
        })
    } 

    render() {
        return(
            <div className="new-expense">
                <form onSubmit={this.handleSubmit.bind(this)} className={this.state.showForm ? '' : 'hidden'}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label htmlFor="title">Title</label>
                            <input id="title" name="title" value={this.state.title} type="text" onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="amount">Amount</label>
                            <input id="amount" name="amount" value={this.state.amount} type="number" onChange={this.handleChange.bind(this)}/>
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="date">Date</label>
                            <input id="date" name="date" value={this.state.date} type="date" min="2019-01-01" onChange={this.handleChange.bind(this)}/>
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button className="alternative" onClick={this.handeleClickToggle.bind(this)}>Cancel</button>
                        <button type="submit">Add Expense</button>
                    </div>
                </form>
                <button className="new-expense--toggle" className={this.state.showForm ? 'hidden' : ''} onClick={this.handeleClickToggle.bind(this)}>Add New Expense</button>
            </div>
        );
    }
}

export default NewExpense;
