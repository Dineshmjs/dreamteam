import React from 'react'

function Matches({ matches }) {

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
                                
                                    { match.result !== "" ? (
                                        <p className="w3-text-red vms-text-small">{match.result}</p>
                                    ) :
                                    (
                                    match.tosschoose !== "" ? (<p className="w3-text-red vms-text-small">{match.tosschoose}</p>):
                                    (<p className="w3-text-red vms-text-small">{match.time} {match.date}</p>)                                        
                                    )
                                   }                               


                            </div>

                        </div>
                    )
                })
            }
        </>
    )
}

export default Matches
