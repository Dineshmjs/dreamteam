import React from 'react'

function ViewContest() {
    const contest = [{
        series: "Dream11 IPL",
        team1 :"KKR",
        team2 : "DC",
        matchstart: "5h 40m",
        contesttype:"MEGA",
        price: "$15 Laks"

    },
    {
        series: "Dream11 IPL",
        team1 :"KKR",
        team2 : "DC",
        matchstart: "5h 40m",
        contesttype:"MEGA",
        price: "$15 Laks"

    },
    {
        series: "Dream11 IPL",
        team1 :"KKR",
        team2 : "DC",
        matchstart: "5h 40m",
        contesttype:"MEGA",
        price: "$15 Laks"

    },
    {
        series: "Dream11 IPL",
        team1 :"KKR",
        team2 : "DC",
        matchstart: "5h 40m",
        contesttype:"MEGA",
        price: "$15 Laks"

    }]
    return (
        <>
        {
            contest.map((data,index)=>{
                return(
                    <div className="card vct-card mt-3" key={index}>
                        <p className="w3-small w3-text-gray pl-2 pt-2 pb-2 mb-0">{data.series}</p>
                        <hr className="p-0 m-0" />

                        <div className="vct-team-row">
                            <div className="vct-team-col">
                                <p className="pl-3"><b>{data.team1}</b></p>
                            </div>
                            <div className="vct-team-col">
                                <p className="w3-text-red w3-small">{data.matchstart}</p>
                            </div>
                            <div className="vct-team-col">
                                <p className="pr-3"><b>{data.team2}</b></p>
                            </div>
                        </div>

                        <div className="vct-bottom w3-light-gray">
                            <p className="w3-text-green w3-pale-green p-1 m-1 vct-bottom-contesttype">{data.contesttype}</p>
                            <p className="w3-small pt-2 pl-2 pb-2 m-0">{data.price}</p>
                        </div>
                    </div>
                )
            })
        }            
        </>
    )
}

export default ViewContest
