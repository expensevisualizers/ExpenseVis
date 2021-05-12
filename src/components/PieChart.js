import React, { Component } from 'react';

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default class App extends Component {
    constructor(props) {
        super(props);

        let thisMonthSpending = this.props.data;

        let categoryCount = {};

        thisMonthSpending.spending.forEach(spd => {
            let spdCategory = spd.category;
            if (categoryCount[spdCategory] == null) {
                categoryCount[spdCategory] = parseFloat(spd.amount)
            } else {
                categoryCount[spdCategory] += parseFloat(spd.amount)
            }
        });

        let categoryCountList = [];

        Object.keys(categoryCount).forEach(key => {
            let item = { "category": key, "count": categoryCount[key] };
            categoryCountList.push(item)
        });

        this.state = { data: categoryCountList }
    }

    roundTo2 = (num) => Math.round(num * 10000) / 100

    renderCustomizedLabel = (props) => `${props.name}: ${this.roundTo2(props.percent)}%`

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
            case "Grocery":
                return "#a8cc61";
            default:
                return "#000000";
        }
    };



    render() {
        return (
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        animationDuration={500}
                        data={this.state.data}
                        dataKey="count"
                        nameKey="category"
                        cx="50%"
                        cy="50%"
                        innerRadius="50%"
                        outerRadius="70%"
                        fill="#8884d8"
                        label={this.renderCustomizedLabel}
                    >
                        {this.state.data.map((entry, index) => <Cell key={entry.category} fill={
                            this.getCategoryColor(entry.category)
                        } />)}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        );
    }
}