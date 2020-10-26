import React from 'react'

function Squads() {
    const squad = [{
        team: "Chennai Super Kings",
        players: [{
            name: "Murali Vijay",
            role: "Batsman"
        },
        {
            name: "Dhoni",
            role: "Wicket Keeper"
        },
        {
            name: "Dwayne Bravo",
            role: "All Rounder"
        },
        {
            name: "Imran Tahir",
            role: "Bowler"
        }
        ]
    },
    {
        team: "Mumbai Indians",
        players: [{
            name: "Murali Vijay",
            role: "Batsman"
        },
        {
            name: "Dhoni",
            role: "Wicket Keeper"
        },
        {
            name: "Dwayne Bravo",
            role: "All Rounder"
        },
        {
            name: "Imran Tahir",
            role: "Bowler"
        }
        ]
    }]
    return (
        <div className="w3-container mt-3">
            {
                squad.map((data, mindex) => {
                    return (
                        <div key={mindex} className="mb-0" data-toggle="collapse" data-target={`#id${mindex}`}>
                            <p className="mb-1">{data.team}</p>
                            <hr className="mb-2 mt-2 p-0" />
                            {
                                data.players.map((player, index) => {
                                    return (
                                        <div className="w3-container collapse ss-player" key={index} id = {`id${mindex}`} >
                                            <p className="ss-player-name">{player.name}</p>
                                            <p className="ss-player-role">{player.role}</p>
                                        </div>
                                        
                                    )                                    

                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Squads
