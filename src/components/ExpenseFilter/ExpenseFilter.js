import { Component } from "react";

class ExpenseFilter extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const avaliableYears = [];

        this.props.avaliableYears.forEach((item) => {
            avaliableYears.push(<option key={item} value={item}>{item}</option>);
        });

        return (
            <div className='expenses-filter'>
                <div className='expenses-filter__control'>
                    <label>Filter by year</label>
                    <select value={this.props.selectedYear} onChange={this.props.handleFilterByYear}>
                        {avaliableYears}
                    </select>
                </div>
            </div>
        );
    }
}

export default ExpenseFilter;