import React from 'react'

function PointsTable() {
    const points = [{
        team:"MI",
        play:11,
        win:7,
        loss:4,
        noresult:0,
        pts:14,
        nrr:+1.252

    },
    {
        team:"CSK",
        play:10,
        win:9,
        loss:1,
        noresult:0,
        pts:18,
        nrr:+2.00

    }]
    return (
        <div>
            <table className="w3-table pte-table">
                <thead className="pte-thead">
                    <tr>
                        <th className="pte-thead-team">Teams</th>
                        <th>P</th>
                        <th>W</th>
                        <th>L</th>
                        <th>NR</th>
                        <th>Pts</th>
                        <th>NRR</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        points.map((data,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{data.team}</td>
                                    <td>{data.play}</td>
                                    <td>{data.win}</td>
                                    <td>{data.loss}</td>
                                    <td>{data.noresult}</td>
                                    <td>{data.pts}</td>
                                    <td>{data.nrr}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PointsTable
