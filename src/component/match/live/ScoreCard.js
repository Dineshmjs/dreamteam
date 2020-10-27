import React from 'react'

function ScoreCard() {
    const team1 = {
        team: "Kolkata Knight Riders",
        runs: 149,
        wickets: 9,
        overs: 20,
        batsman: [
            {
                name: "Shubman Gill",
                outby: "c Pooran b shami",
                runs: 57,
                balls: 45,
                fours: 3,
                six: 4,
                sr: 126.67
            },
            {
                name: "Morgan (c)",
                outby: "c M Ashwin b Ravi Bishnoi",
                runs: 40,
                balls: 25,
                fours: 5,
                six: 2,
                sr: 160
            }
        ],
        bowling: [
            {
                name: "Maxwell",
                overs: 2,
                maiden: 0,
                runs: 21,
                wickets: 1,
                er: 10.5
            },
            {
                name: "Shami",
                overs: 4,
                maiden: 0,
                runs: 35,
                wickets: 3,
                er: 8.8
            }
        ]
    }

    const team2 = {
        team: "Kolkata Knight Riders",
        runs: 149,
        wickets: 9,
        overs: 20,
        batsman: [
            {
                name: "Shubman Gill",
                outby: "c Pooran b shami",
                runs: 57,
                balls: 45,
                fours: 3,
                six: 4,
                sr: 126.67
            },
            {
                name: "Morgan (c)",
                outby: "c M Ashwin b Ravi Bishnoi",
                runs: 40,
                balls: 25,
                fours: 5,
                six: 2,
                sr: 160
            }
        ],
        bowling: [
            {
                name: "Maxwell",
                overs: 2,
                maiden: 0,
                runs: 21,
                wickets: 1,
                er: 10.5
            },
            {
                name: "Shami",
                overs: 4,
                maiden: 0,
                runs: 35,
                wickets: 3,
                er: 8.8
            }
        ]
    }
    return (
        <div className="mt-3 w3-white">
            <div className="w3-panel m-0 p-0" data-toggle="collapse" data-target="#scdteam1">
                <p className="w3-left ml-2">{team1.team}</p>
                <p className="w3-right">{team1.runs}-{team1.wickets} ({team1.overs})</p>
            </div>
            <div className="collapse" id="scdteam1">
                <table className="w3-table">
                    <thead>
                        <tr className="scd-th-tr">
                            <td className="scd-bastman">batsman</td>
                            <td>R</td>
                            <td>B</td>
                            <td>4s</td>
                            <td>6s</td>
                            <td>SR</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team1.batsman.map((batsman, index) => {
                                return (
                                    <tr>
                                        <td>
                                            <p className="mb-0">{batsman.name}</p>
                                            <p className="w3-small w3-text-gray pl-1 mb-1">{batsman.outby}</p>
                                        </td>
                                        <td>{batsman.runs}</td>
                                        <td>{batsman.balls}</td>
                                        <td>{batsman.fours}</td>
                                        <td>{batsman.six}</td>
                                        <td>{batsman.sr}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                <table className="w3-table">
                    <thead>
                        <tr className="scd-th-tr">
                            <td className="scd-bastman">bowler</td>
                            <td>O</td>
                            <td>M</td>
                            <td>R</td>
                            <td>W</td>
                            <td>ER</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team1.bowling.map((bowler, index) => {
                                return (
                                    <tr>
                                        <td>{bowler.name}</td>
                                        <td>{bowler.overs}</td>
                                        <td>{bowler.maiden}</td>
                                        <td>{bowler.runs}</td>
                                        <td>{bowler.wickets}</td>
                                        <td>{bowler.er}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>              

            </div>

{/* team2 */}

            <div className="w3-panel p-0 m-0"  data-toggle="collapse" data-target="#scdteam2">
                <p className="w3-left ml-2">{team2.team}</p>
                <p className="w3-right">{team2.runs}-{team2.wickets} ({team2.overs})</p>
            </div>
            <div className="collapse" id="scdteam2">
                <table className="w3-table">
                    <thead>
                        <tr className="scd-th-tr">
                            <td className="scd-bastman">batsman</td>
                            <td>R</td>
                            <td>B</td>
                            <td>4s</td>
                            <td>6s</td>
                            <td>SR</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team2.batsman.map((batsman, index) => {
                                return (
                                    <tr>
                                        <td>
                                            <p className="mb-0">{batsman.name}</p>
                                            <p className="w3-small w3-text-gray pl-1 mb-1">{batsman.outby}</p>
                                        </td>
                                        <td>{batsman.runs}</td>
                                        <td>{batsman.balls}</td>
                                        <td>{batsman.fours}</td>
                                        <td>{batsman.six}</td>
                                        <td>{batsman.sr}</td>
                                    </tr>                                    
                                )
                            })
                        }

                    </tbody>
                </table>

                <table className="w3-table">
                    <thead>
                        <tr className="scd-th-tr">
                            <td className="scd-bastman">bowler</td>
                            <td>O</td>
                            <td>M</td>
                            <td>R</td>
                            <td>W</td>
                            <td>ER</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            team2.bowling.map((bowler, index) => {
                                return (
                                    <tr>
                                        <td>{bowler.name}</td>
                                        <td>{bowler.overs}</td>
                                        <td>{bowler.maiden}</td>
                                        <td>{bowler.runs}</td>
                                        <td>{bowler.wickets}</td>
                                        <td>{bowler.er}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default ScoreCard
