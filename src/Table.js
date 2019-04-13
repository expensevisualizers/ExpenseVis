/**
 * Created by hzhang3 on 4/10/19.
 */

import React, { Component } from 'react';
import Griddle from 'griddle-react';
import {ResponsiveContainer} from "recharts";


export default class App extends Component{


    render () {
        const styleConfig = {
            styles: {
                TableHeadingCell: { width: 100 },
                Table: {
                    color: "black"
                },
                Settings: {hidden: true}
            }
        };

        let thisMonthSpending = this.props.data[0].spending;

        const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
            <div>
                <Filter/>
                <Pagination/>
                <Table />
            </div>
        );

        return (
                <Griddle className="flex-container" data={thisMonthSpending} styleConfig={styleConfig} components={{Layout: NewLayout}}/>
        );
    }
}
