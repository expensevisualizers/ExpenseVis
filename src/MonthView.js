/**
 * Created by hzhang3 on 4/10/19.
 */

import React, { Component } from 'react';

import MyPieChart from './PieChart';
import MyTable from './Table.js';

export default class App extends Component{
    render () {
        return (
            <div className="flex-container">
                <MyTable/>
            </div>
        );
    }
}