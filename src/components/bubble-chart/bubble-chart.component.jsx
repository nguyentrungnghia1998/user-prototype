import React from "react";
import {ReactBubbleChart} from 'react-bubble-chart'
import './bubble-chart.styles.scss'

const BubbleChart = ({data}) => {
    // const handleClick = () => {

    // }
    return (
        <div className="bubble-chart-container">
            <ReactBubbleChart
            className="bubble-chart"
            key="start"
            data={data}
            // onClick={handleClick}
            />
        </div>
    )
}

export default BubbleChart