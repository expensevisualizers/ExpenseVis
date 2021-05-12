import React from 'react';

import { AreaChart, Area, ResponsiveContainer, Legend, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import DefaultTooltipContent from 'recharts/lib/component/DefaultTooltipContent';
import months from '../utils/months'

const CustomTooltip = props => {
    // we don't need to check payload[0] as there's a better prop for this purpose
    if (!props.active) {
        // I think returning null works based on this: http://recharts.org/en-US/examples/CustomContentOfTooltip
        return null
    }
    // mutating props directly is against react's conventions
    // so we create a new payload with the name and value fields set to what we want
    const newPayload = [
        {
            name: 'Total',
            // all your data which created the tooltip is located in the .payload property
            value: (props.payload[0].payload.Food || 0 )+ (props.payload[0].payload.Entertainment || 0) + (props.payload[0].payload.Transportation || 0 )+ (props.payload[0].payload.Clothes || 0) + (props.payload[0].payload.Grocery || 0)
            // you can also add "unit" here if you need it
        },
        ...props.payload,
    ];

    // we render the default, but with our overridden payload
    return <DefaultTooltipContent {...props} payload={newPayload} />;
};

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
            <ResponsiveContainer height="100%" width="100%" >
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
                        <linearGradient id="colorPvf" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#a8cc61" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#a8cc61" stopOpacity={0.1}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" onClick={item => this.props.history.push("/" + item.value)}/>
                    <Legend verticalAlign="top" height={36}/>
                    <YAxis />
                    <YAxis yAxisId={1} orientation='right'/>
                    <CartesianGrid strokeDasharray="3 3" />

                    <Tooltip  content={ <CustomTooltip/> }
                        labelStyle={{color: "white"}}
                              /*formatter={(value, name, props) => { return "$" + value; }}*/
                              contentStyle={{backgroundColor: 'rgba(52, 52, 52, 0.5)', borderRadius: 20}}/>
                    {this.props.debt ? <Area type="monotone" dataKey="debt" stroke="#FF2C51" fillOpacity={1} fill="url(#colorUv)" /> : null }
                    {this.props.income ? <Area type="monotone" dataKey="income" stroke="#659AFF" fillOpacity={1} fill="url(#colorPva)" /> : null }
                    {this.props.spending ? <Area type="monotone" stackId="1" dataKey="Food" stroke="#FFC39E" fillOpacity={1} fill="url(#colorPvb)" /> : null }
                    {this.props.spending ? <Area type="monotone" stackId="1" dataKey="Entertainment" stroke="#FF94B9" fillOpacity={1} fill="url(#colorPvc)" /> : null }
                    {this.props.spending ? <Area type="monotone" stackId="1" dataKey="Transportation" stroke="#B5B19C" fillOpacity={1} fill="url(#colorPvd)" /> : null }
                    {this.props.spending ? <Area type="monotone" stackId="1" dataKey="Clothes" stroke="#CCBC62" fillOpacity={1} fill="url(#colorPve)" /> : null }
                    {this.props.spending ? <Area type="monotone" stackId="1" dataKey="Grocery" stroke="#a8cc61" fillOpacity={1} fill="url(#colorPvf)" /> : null }
                </AreaChart>
            </ResponsiveContainer>
        );
    }
}


