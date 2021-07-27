import { Component } from 'react';

class ChartBar extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        let barFillHeight = '0%';



        if (this.props.maxValue > 0) {
            barFillHeight = Math.round((this.props.value / this.props.maxValue) * 100) + '%';
        }

        return(
            <div className="chart-bar">
                <div className="chart-bar__inner">
                    <div style={{height: barFillHeight}} className="chart-bar__fill">

                    </div>
                </div>
                <div className="chart-bar__label">
                    {this.props.label}
                </div>
            </div>
        );
    }
}

export default ChartBar;