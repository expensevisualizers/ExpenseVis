/**
 * Created by hzhang3 on 4/10/19.
 */

import React, { Component } from 'react';

import { PieChart, Pie } from 'recharts';

export default class App extends Component{
    render () {

        let data01 = [
            {"name": "haha", "value": 1},
            {"name": "i", "value": 2},
            {"name": "love", "value": 3},
            {"name": "je", "value": 4},
            {"name": "sus", "value": 5}
        ];

        let data02 = [
            {"name": "haha", "value": 1},
            {"name": "i", "value": 1},
            {"name": "love", "value": 1},
            {"name": "je", "value": 1},
            {"name": "sus", "value": 1}
        ];

        return (
            <PieChart width={730} height={250} className="flex-item">
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            </PieChart>
        );
    }
}