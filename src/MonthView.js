/**
 * Created by hzhang3 on 4/10/19.
 */

import React, { Component } from 'react';

import MyPieChart from './PieChart';
import MyTable from './Table.js';
import {ResponsiveContainer} from "recharts";


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export default class App extends Component{


    render () {
        let data = this.props.data;
        let month = this.props.month;

        let thisMonthSpending = data.filter(item => {
            let spd = item.spending;
            let spdDate = spd[0].date;
            let spdDateArray = spdDate.split('/');
            let spdMonth = spdDateArray[0];

            return months[spdMonth-1] === month
        });

        return (
                <div className="flex-container">
                    <MyPieChart month={this.props.month} data={thisMonthSpending}/>
                    <MyTable month={this.props.month} data={thisMonthSpending}/>
                </div>
        );
    }
}