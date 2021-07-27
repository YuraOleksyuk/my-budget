import { Component } from 'react';
import ChartBar from "../ChartBar/ChartBar";

class Chart extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const dataPointValues = this.props.dataPoints.map(point => point.value);
        const totalMaximum = Math.max(...dataPointValues);

        let dataPoints = this.props.dataPoints.map((point) => {
            return <ChartBar key={point.id} value={point.value} maxValue={totalMaximum} label={point.label}/>
        });

        return(
            <div className="chart">
                {dataPoints}
            </div>
        );
    }
}

export default Chart;