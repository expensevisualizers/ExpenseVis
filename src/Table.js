/**
 * Created by hzhang3 on 4/10/19.
 */

import React, { Component } from 'react';
import Griddle, {plugins} from 'griddle-react';

export default class App extends Component{


    render () {
        const styleConfig = {
            styles: {
                TableHeadingCell: { width: 100 },
                Table: {
                    color: "black",
                }
            }
        };

        let thisMonthSpending = this.props.data[0].spending;

        const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
            <div>
                <Filter/>
                <Table />
                <Pagination/>
            </div>
        );

        let rows = thisMonthSpending.map((spd) => {
            return (
                <tr>
                    <td>{spd.date}</td>
                    <td>{spd.amount}</td>
                    <td>{spd.category}</td>
                    <td>{spd.detail}</td>
                </tr>
            )
        });

        return (
            <div id="table-wrapper" >
                <div id="filter-wrapper">
                    <p id="filter-title">Filter:</p>
                    <input/>
                </div>
                <table id="table">
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Detail</th>
                    </tr>
                    { rows }
                </table>
            </div>)
    }
    //<Griddle className="flex-item" data={thisMonthSpending} styleConfig={styleConfig} components={{Layout: NewLayout}} plugins={[plugins.LocalPlugin]}/>
}
