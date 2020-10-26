import React from 'react'
// import { Link } from 'react-router-dom'

function ViewMatches({ matches, ClickPointtable, ClickSchedule }) {

    return (
        <>
            {
                matches.map((match, index) => {
                    return (
                        <div className="card mt-3 mb-3 vms-card" key={index}>
                            <div className="w3-container">
                                <p className="w3-text-gray pt-1 w3-small">{match.nthmatch} . {match.place} . {match.time} . {match.date}</p>

                                <div className="vms-row ">
                                    <div className="vms-col">
                                        <p className="vms-team">{match.team1}</p>
                                        {
                                            match.team1overs > 0 && (
                                                <p className="vms-score">{match.team1run}-{match.team1wickets} ({match.team1overs})</p>
                                            )
                                        }
                                    </div>
                                    <div className="vms-col">
                                        <p className="vms-team">{match.team2}</p>
                                        {
                                            match.team2overs > 0 && (
                                                <p className="vms-score">{match.team2run}-{match.team2wickets} ({match.team2overs})</p>
                                            )
                                        }
                                    </div>
                                </div>

                                {match.result !== "" ? (
                                    <p className="w3-text-red vms-text-small">{match.result}</p>
                                ) :
                                    (
                                        match.tosschoose !== "" ? (<p className="w3-text-red vms-text-small">{match.tosschoose}</p>) :
                                            (<p className="w3-text-red vms-text-small">{match.time} {match.date}</p>)
                                    )
                                }

                            </div>
                            <div className="vms-link w3-light-gray">
                                <p onClick={() => ClickPointtable()} className="w3-text-gray pt-2 pb-0 mb-2">POINTS TABLE</p>
                                <p onClick={() => ClickSchedule()} className="w3-text-gray pt-2 pl-3 pr-3 mb-2">SCHEDULE</p>

                                {/* <Link to="/series">
                                    <p className="w3-text-gray pt-2 pb-0 mb-2">POINTS TABLE</p>
                                </Link>
                                <Link to="/series">
                                    <p className="w3-text-gray pt-2 pl-3 pr-3 mb-2">SCHEDULE</p>
                                </Link>     */}
                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default ViewMatches
