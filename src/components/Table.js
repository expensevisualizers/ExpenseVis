import React, { Component } from 'react';
import styled from 'styled-components'

const StyledTable = styled.table`
width: 100%;

thead > tr > th {
    text-align: left;
}
`

export default class App extends Component {
    render() {

        let thisMonthSpending = this.props.data.spending;

        let rows = thisMonthSpending.map((spd) => {
            return (
                <tr key={[spd.date, spd.amount, spd.category, spd.detail].join("_")}>
                    <td>{spd.date}</td>
                    <td>{spd.amount}</td>
                    <td>{spd.category}</td>
                    <td>{spd.detail}</td>
                </tr>
            )
        });

        return (
            <>
                <div>
                    <p style={{ display: 'inline-block', marginRight: 8 }}>Filter: </p>
                    <input style={{ display: 'inline-block' }} />
                </div>
                <StyledTable id="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Category</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </StyledTable>
            </>)
    }
}
