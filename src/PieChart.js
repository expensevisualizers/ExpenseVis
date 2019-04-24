/**
 * Created by hzhang3 on 4/10/19.
 */

import React, { Component } from 'react';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default class App extends Component{
    constructor(props) {
        super(props);

        let thisMonthSpending = this.props.data;

        let categoryCount = {};

        thisMonthSpending[0].spending.forEach(spd => {
            let spdCategory = spd.category;
            if (categoryCount[spdCategory] == null) {
                categoryCount[spdCategory] = parseFloat(spd.amount)
            } else {
                categoryCount[spdCategory] += parseFloat(spd.amount)
            }
        });

        let categoryCountList = [];

        Object.keys(categoryCount).forEach(key => {
            let item = {"category": key, "count": categoryCount[key]};
            categoryCountList.push(item)
        });

        this.state = {data: categoryCountList}
    }

    renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index}) => {
        const RADIAN = Math.PI / 180;

        const radius = innerRadius + (outerRadius - innerRadius)*0.5;
        const x  = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy  + radius * Math.sin(-midAngle * RADIAN);

        const catRadius = innerRadius + (outerRadius - innerRadius)*1.5;
        const catX  = cx + catRadius * Math.cos(-midAngle * RADIAN);
        const catY = cy  + catRadius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} textAnchor={x > cx ? 'start' : 'end'} >
                <tspan x={x} y={y} fill="white">
                    {(percent * 100).toFixed(0)}%
                </tspan>
                <tspan x={catX} y={catY} fill="black">
                    {this.state.data[index].category}
                </tspan>
            </text>
        );
    };


    getCategoryColor = (category) => {
        switch (category) {
            case "Food":
                return "#FFC39E";
            case "Entertainment":
                return "#FF94B9";
            case "Transportation":
                return "#B5B19C";
            case "Clothes":
                return "#CCBC62";
            default:
                return "#000000";
        }
    };


    getTotalSpending = (spendingList) => {
        let total = 0;
        spendingList.forEach(spd => {
            let spdAmt = spd.amount;
            total += parseFloat(spdAmt);
        });
        return total
    };


    render () {
        return (
            <div className="flex-item">
                <h3 className="dark-title">{
                    this.props.month
                }
                </h3>
                <ResponsiveContainer height="80%" width="50%" minWidth={310} minHeight={110}>

                    <PieChart margin={{top: 50, right: 150, left: 150, bottom: 50}}>
                        <Pie animationDuration={700} data={this.state.data} dataKey="count" nameKey="category" cx="50%" cy="50%" innerRadius="70%" outerRadius="100%" fill="#8884d8" label={this.renderCustomizedLabel} >
                                 {
                                     this.state.data.map((entry, index) => <Cell fill={
                                         this.getCategoryColor(entry.category)
                                     }/>)
                                 }
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <h3 className="dark-title">Total Spending: ${
                    this.getTotalSpending(this.props.data[0].spending)
                }</h3>
            </div>
        );
    }
}