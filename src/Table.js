/**
 * Created by hzhang3 on 4/10/19.
 */

import React, { Component } from 'react';
import Griddle from 'griddle-react';

class Filter extends Component {
    onChange(e) {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <select onChange={this.onChange}>
                <option value="">All</option>
                <option value="two">two</option>
                <option value="three">three</option>
                <option value="one">one</option>
            </select>
        );
    }
}

export default class App extends Component{


    render () {
        const styleConfig = {
            styles: {
                TableHeadingCell: { width: 100 },
                Table: {
                    width: 1000,
                    color: "black"
                },
                Settings: {hidden: true}
            }
        };

        let data = [
            { one: 'one', two: 'two', three: 'three' },
            { one: 'uno', two: 'dos', three: 'tres' },
            { one: 'ichi', two: 'ni', three: 'san' }
        ];

        const NewLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => (
            <div>
                <Filter className="flex-item" />
                <Pagination className="flex-item" />
                <Table />
            </div>
        );

        return (
            <Griddle className="flex-item flex-container" data={data} styleConfig={styleConfig} components={{Layout: NewLayout}}/>
        );
    }
}
