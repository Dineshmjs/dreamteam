import React from 'react'

function ViewMatches() {
    const matches = [{
        nthmatch: "45th Match",
        series: "Indian Premier League 2020",
        team1: "RR",
        team2: "MI",
        tosschoose: "Mumbai Indians opt to bat",
        team1run: 82,
        team1wickets: 1,
        team1overs: 9.2,
        team2run: 102,
        team2wickets: 5,
        team2overs: 20
    },
    {
        nthmatch: "45th Match",
        series: "Indian Premier League 2020",
        team1: "RR",
        team2: "MI",
        tosschoose: "Mumbai Indians opt to bat",
        team1run: 82,
        team1wickets: 1,
        team1overs: 9.2,
        team2run: 102,
        team2wickets: 5,
        team2overs: 20
    },
    {
        nthmatch: "45th Match",
        series: "Indian Premier League 2020",
        team1: "RR",
        team2: "MI",
        tosschoose: "Mumbai Indians opt to bat",
        team1run: 82,
        team1wickets: 1,
        team1overs: 9.2,
        team2run: 102,
        team2wickets: 5,
        team2overs: 20
    }]
    return (
        <>
            {
                matches.map((match, index) => {
                    return (
                        <div className="card mt-3 mb-3 vms-card" key={index}>
                            <div className="w3-container">
                                <p className="w3-text-gray pt-1 w3-small">{match.nthmatch} . {match.series}</p>

                                <div className="vms-row ">
                                    <div className="vms-col">
                                        <p className="vms-team">{match.team1}</p>
                                        <p className="vms-score">{match.team1run}-{match.team1wickets} ({match.team1wickets})</p>
                                    </div>
                                    <div className="vms-col">
                                        <p className="vms-team">{match.team2}</p>
                                        <p className="vms-score">{match.team2run}-{match.team2wickets} ({match.team2wickets})</p>
                                    </div>
                                </div>

                                <p className="w3-text-red vms-text-small">{match.tosschoose}</p>

                            </div>
                            <div className="vms-link w3-light-gray">
                                <p className="w3-text-gray pt-2 pb-0 mb-2">POINTS TABLE</p>
                                <p className="w3-text-gray pt-2 pl-3 pr-3 mb-2">SCHEDULE</p>
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default ViewMatches
