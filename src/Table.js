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
                },
                Settings: {hidden: true}
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

        return (
                <Griddle className="flex-item" data={thisMonthSpending} styleConfig={styleConfig} components={{Layout: NewLayout}} plugins={[plugins.LocalPlugin]}/>
        );
    }
}
