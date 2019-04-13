/**
 * Created by jtgaulin on 4/9/19.
 */

import React, { Component } from 'react';

import { AreaChart, Area, ResponsiveContainer, Legend, Scatter, ScatterChart, Label, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ReferenceArea } from 'recharts';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export default class myLineChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.buildData(this.props.data);
    }

    buildData(spending){
        spending.forEach((month)=>{
            var split = month.spending[0].date.split('/');
            var monthData = {name : months[+split[0]-1], income : month.income, debt : month.debt};
            month.spending.forEach((trans)=>{
                monthData[trans.category] = (monthData[trans.category] || 0) + parseInt(trans.amount);
            });
            this.state.data.push(monthData);
        })
    }

    render () {
        return (
            <ResponsiveContainer height="80%" width="99%" >
                <AreaChart data={this.state.data}
                           margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FF2C51" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#FF2C51" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorPva" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#659AFF" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#659AFF" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorPvb" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FFC39E" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#FFC39E" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorPvc" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FF94B9" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#FF94B9" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorPvd" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#B5B19C" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#B5B19C" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorPve" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#CCBC62" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#CCBC62" stopOpacity={0.1}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" onClick={this.props.clickHandle}/>
                    {/*<Legend />*/}
                    <YAxis />
                    <YAxis yAxisId={1} orientation='right'/>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    {this.props.debt ? <Area type="monotone" dataKey="debt" stroke="#FF2C51" fillOpacity={1} fill="url(#colorUv)" /> : null }
                    {this.props.income ? <Area type="monotone" dataKey="income" stroke="#659AFF" fillOpacity={1} fill="url(#colorPva)" /> : null }
                    {this.props.spending ? <Area type="monotone" stackId="1" dataKey="Food" stroke="#FFC39E" fillOpacity={1} fill="url(#colorPvb)" /> : null }
                    {this.props.spending ? <Area type="monotone" stackId="1" dataKey="Entertainment" stroke="#FF94B9" fillOpacity={1} fill="url(#colorPvc)" /> : null }
                    {this.props.spending ? <Area type="monotone" stackId="1" dataKey="Transportation" stroke="#B5B19C" fillOpacity={1} fill="url(#colorPvd)" /> : null }
                    {this.props.spending ? <Area type="monotone" stackId="1" dataKey="Clothes" stroke="#CCBC62" fillOpacity={1} fill="url(#colorPve)" /> : null }
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}


