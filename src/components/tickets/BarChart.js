import React from 'react'
import Chart from 'react-google-charts'
import {connect}  from 'react-redux'
 
function BarChart(props){
let result = {}

const bChart = props.tickets.map(ticket=>{
    if(!ticket.isResolved){
        props.departments.find(dept=>{
        if(dept._id==ticket.department){
            if(Object.keys(result).includes(dept.name)){
                result[dept.name] += 1
            }
            else{
                result[dept.name] = 1
            }
        }
    })}
})

const arrayResult = [['Department','Tickets']]

for(const key in result){
    arrayResult.push([key,result[key]])
}

    return(
        <div className="container">
           <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={arrayResult}
                options={{
                    // Material design options
                    chart: {
                    title: 'Tickets By Department'
                    },
                }}
                // For tests
                rootProps={{ 'data-testid': '2' }}
                />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tickets : state.tickets,
        departments : state.departments
    }
}

export default connect(mapStateToProps)(BarChart)