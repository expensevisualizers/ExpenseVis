import React from 'react';
import MyPieChart from '../components/PieChart';
import MyTable from '../components/Table.js';
import months from '../utils/months'

export default (props) => {
    const { history, data, month } = props

    const thisMonthSpending = data.filter(item => {
        let spd = item.spending;
        let spdDate = spd[0].date;
        let spdDateArray = spdDate.split('/');
        let spdMonth = spdDateArray[0];

        return months[spdMonth - 1] === month
    })[0];

    const mIndex = months.findIndex(m => m === month)

    const changeMonth = (index) => {
        const month = months[index]
        if (!month) {
            alert("no more month data")
            return
        }
        history.push("/" + month)
    }

    const getTotalSpending = (spendingList) => {
        let total = 0;
        spendingList.forEach(spd => {
            let spdAmt = spd.amount;
            total += parseFloat(spdAmt);
        });
        return total
    };


    // pie chart section ---------------------------------------------------------------------
    const pieChartNoData = <div style={{
        flex: "1 1 auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }}>no spending data</div>

    const pieChart = thisMonthSpending ?
        <MyPieChart month={month} data={thisMonthSpending} />
        :
        pieChartNoData

    const totalSpending = <h4 className="dark-title" >
        Total Spending: ${thisMonthSpending ? getTotalSpending(thisMonthSpending.spending) : 0}
    </h4>

    const prevMonthButton = <button onClick={() => changeMonth(mIndex - 1)} style={{ flex: "0 0 auto" }}>
        {"<"}
    </button>
    const nextMonthButton = <button onClick={() => changeMonth(mIndex + 1)} style={{ flex: "0 0 auto" }}>
        {">"}
    </button>

    // table section ---------------------------------------------------------------------
    const tableNoData = <div style={{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }}>no spending data</div>

    const table = thisMonthSpending ?
        <MyTable month={month} data={thisMonthSpending} />
        :
        tableNoData


    return (
        <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "row" }}>
            <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column" }}>
                <h3 className="dark-title">{month}</h3>
                {pieChart}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {prevMonthButton}
                        {totalSpending}
                        {nextMonthButton}
                    </div>
                </div>
            </div>
            <div style={{ flex: "0 0 50%" }}>
                {table}
            </div>
        </div>
    );
}