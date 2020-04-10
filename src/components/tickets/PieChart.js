import React from 'react'
import Chart from 'react-google-charts'
import {connect}  from 'react-redux'
 
function PieChart(props){
    const high = props.ticket.filter(ele=>!ele.isResolved && ele.priority == "High").length
    const medium = props.ticket.filter(ele=>!ele.isResolved && ele.priority == "Medium").length
    const low = props.ticket.filter(ele=>!ele.isResolved && ele.priority == "Low").length
    return(
        <div className="container">
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Priority', 'As per customer'],
                    ['high', high],
                    ['medium', medium],
                    ['low', low]
                ]}
                options={{
                    title: 'Ticket Priority',
                    is3D: true,
                    colors:['red','blue','green'],
                    pieHole:1
                }}
                rootProps={{ 'data-testid': '1' }}
                />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ticket : state.tickets
    }
}

export default connect(mapStateToProps)(PieChart)