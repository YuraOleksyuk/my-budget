import { Component} from "react";
import Chart from "../Chart/Chart";

class ExpensesChart extends Component {

    constructor(props) {
        super(props);
    }

    getChartDataPoints() {
        return [
            { label: 'Jan', value: 0 },
            { label: 'Feb', value: 0 },
            { label: 'Mar', value: 0 },
            { label: 'Apr', value: 0 },
            { label: 'May', value: 0 },
            { label: 'Jun', value: 0 },
            { label: 'Jul', value: 0 },
            { label: 'Aug', value: 0 },
            { label: 'Sep', value: 0 },
            { label: 'Oct', value: 0 },
            { label: 'Nov', value: 0 },
            { label: 'Dec', value: 0 },
        ];
    }


    render() {
        const chartDataPoints = this.getChartDataPoints();
        this.props.expenses.forEach((expense) => {
            const expenseMonth = expense.date.getMonth();

            chartDataPoints[expenseMonth].value += expense.expenseAmount;
        });

        return(<Chart dataPoints={chartDataPoints}/>);
    }

}

export default ExpensesChart;