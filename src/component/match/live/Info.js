import React from 'react'


function Info() {
    const match = {
        squad:{
            team1:"KKR",
            team1players:[
                {
                    name:"Rana",
                    role:"batting"
                },
                {
                    name:"Dinesh",
                    role:"bowling"
                }

            ],
            team2:"KXIP",
            team2players:[{

                name:"Rahul",
                role:"wkt-batsman"
            },
            {
                name:"Gayle",
                role:"batting"
            }]
        },
        info:{
            match:"45th Match",
            series:"Indian Premier League 2020",
            date:"Mon, Oct 26",
            time:"07:30 PM",
            toss:"Kings XI Punjub opt  to Bat",
            venue:"Sharjah Cricket Stadium, Sharjah",
            umpire:"Richard Illingworth, KN Anantha Padmanabhan"            
        },
        venue:{
            stadium:"Sharjah Cricket Stadium",
            city:"Sharjah"            
        }

    }
    return (
        <div>
            <div className="w3-container w3-light-gray">
                <p className="mb-2 mt-2">Squads</p>
            </div>
            <div className="w3-container w3-white mt-2" data-toggle="collapse" data-target="#team1">
                <p>{match.squad.team1}</p>
                <div className="w3-container collapse" id="team1" >
                    {
                        match.squad.team1players.map((player,index)=>{
                            return(
                                <p>{player.name}</p>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w3-container w3-white" data-toggle="collapse" data-target="#team2">
                <p>{match.squad.team2}</p>
                <div className="w3-container collapse" id="team2" >
                    {
                        match.squad.team2players.map((player,index)=>{
                            return(
                                <p>{player.name}</p>
                            )
                        })
                    }
                </div>
            </div>

            <div className="w3-container w3-light-gray">
                <p className="mb-2 mt-2">Info</p>
            </div>
            <div className="w3-container w3-white">
                <table className="w3-table">
                    <tbody>
                        <tr>
                            <td className="w3-text-gray">Match</td>
                            <td>{match.info.match}</td>
                        </tr>
                        <tr>
                            <td className="w3-text-gray">Series</td>
                            <td>{match.info.series}</td>
                        </tr>
                        <tr>
                            <td className="w3-text-gray">Date</td>
                            <td>{match.info.date}</td>
                        </tr>
                        <tr>
                            <td className="w3-text-gray">Time</td>
                            <td>{match.info.time}</td>
                        </tr>
                        <tr>
                            <td className="w3-text-gray">Toss</td>
                            <td>{match.info.toss}</td>
                        </tr>
                        <tr>
                            <td className="w3-text-gray">Venue</td>
                            <td>{match.info.venue}</td>
                        </tr>
                        <tr>
                            <td className="w3-text-gray">Umpire</td>
                            <td>{match.info.umpire}</td>
                        </tr>                        
                    </tbody>
                </table>
            </div> 

            <div className="w3-container w3-light-gray">
                <p className="mb-2 mt-2">Venue Guide</p>
            </div>
            <div className="w3-container w3-white">
                    <table className="w3-table">
                        <tbody>
                            <tr>
                                <td className="w3-text-gray">Stadium</td>
                                <td>{match.venue.stadium}</td>
                            </tr>
                            <tr>
                                <td className="w3-text-gray">City</td>
                                <td>{match.venue.city}</td>
                            </tr>
                        </tbody>
                    </table>
            </div>


            


        </div>
    )
}

export default Info
