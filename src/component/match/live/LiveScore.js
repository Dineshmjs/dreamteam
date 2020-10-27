import React from 'react'

function LiveScore() {
    const livescore = {
        team1:"KKR",
        team1runs:149,
        team1wickets:9,
        team1overs:20,
        team2:"KXIP",
        team2runs:150,
        team2wickets:2,
        team2overs:18.5,
        result:"Kings XI Punjub won by 8 Wickets",
        toss:"",
        mom:"Chrish Gayle"
    } 
    return (
        <div className="w3-container mt-3 w3-white">
            <div className="lse-row">
                <p className="lse-col1">{livescore.team1}</p>
                <p className="lse-col2">{livescore.team1runs} - {livescore.team1wickets} ({livescore.team1overs})</p>
            </div>
            <div className="lse-row">
                <p className="lse-col1">{livescore.team2}</p>
                <p className="lse-col2">{livescore.team2runs} - {livescore.team2wickets} ({livescore.team2overs})</p>
            </div>
            {
                livescore.result !=="" ? (
                    <>

                        <p className="w3-text-blue">{livescore.result}</p>
                        <hr className="mb-1" />   
                        <p className="w3-text-gray w3-small">Player of The Match</p>   
                        <p className="ml-3">{livescore.mom}</p>
                        <hr />
                    </>            
                ):(
                    <p className="w3-text-red">{livescore.toss}</p>                    
                )
            }
             
             
        </div>
    )
}

export default LiveScore
