import React from 'react'
import AreaChart from './AreaChart'
import BarChart from './BarChart'

const ChartContainer = props => {
    const { headerText, chartType, data, color, keys, axisLeftLegend, axisRightLegend, legendAnchor, exportIcon } = props
    const axisLeft = {
        orient: 'left',
        tickSize: 0,
        tickPadding: 6,
        tickRotation: 0,
        legend: axisLeftLegend,
        legendOffset: -50,
        legendPosition: 'middle'
    }
    const axisRight = {
        orient: 'right',
        tickSize: 5, tickPadding: 10,
        tickRotation: 0, legend: axisRightLegend,
        legendOffset: 59, legendPosition: 'middle'
    }
    return (
        <div className="p-1 w-100">
            <div className="rounded" style={{ backgroundColor: "white", width: "100%", height: 380 }}>
                <div style={{
                    position: 'relative',
                    top: 20,
                    left: 0,
                    right: 0,
                    color: '#FF8800',
                    fontWeight: 'bold',
                    background: "#00000000",
                    paddingLeft: 40,
                    display: "inline"
                }}>
                    {headerText}
                </div>
                {
                    exportIcon === undefined ? null : <div style={{
                        position: 'relative',
                        top: 20,
                        color: '#91A7CE',
                        background: "#00000000",
                        paddingRight: 20,
                        float: 'right',
                        cursor: 'pointer !important'
                    }}>
                        <i className="fas fa-external-link-alt" style={{cursor:'inherient'}}> </i> <span style={{ marginTop: -3, cursor:'pointer' }}>Export</span>
                    </div>
                }
                <div className="" style={{ width: "100%", height: 340 }}>
                    {chartType === "area" && <AreaChart
                        data={data}
                        color={color}
                        axisLeft={axisLeft}
                        axisRight={axisRight}
                        legendAnchor={legendAnchor === undefined ? 'top-right' : 'top'} />}
                    {chartType === 'bar' && <BarChart data={data} color={color} keys={keys} />}
                </div>
            </div>
        </div>
    )
}

export default ChartContainer;