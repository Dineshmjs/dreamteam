import React,{useState} from 'react'
import './index.css'
import ViewMatches from './ViewMatches'
import Series from './series'
import Live from './live'

function Match() {

    const [viewMatches, setviewMatches] = useState(true)
    const [live, setLive] = useState(false)
    const [series, setSeries] = useState(false)
    const [nthmatch, setnthMatch] = useState(false)
    const [seriesMenu, setseriesMenu] = useState("matches")    

    const matches = [{
        nthmatch: "45th Match",
        series: "Indian Premier League 2020",
        team1: "RR",
        team2: "MI",
        tosschoose: "",
        result:"",        
        team1run: "",
        team1wickets: "",
        team1overs: "",
        team2run: "",
        team2wickets: "",
        team2overs: 0,
        time:"7:30 PM",
        place:"Dubai",
        date:"SAT, 31 OCT 2020"       
    },
    {
        nthmatch: "45th Match",
        series: "Indian Premier League 2020",
        team1: "RR",
        team2: "MI",
        tosschoose: "Mumbai Indians opt to bat",
        result:"",        
        time:"7:30 PM",
        team1run: 82,
        team1wickets: 1,
        team1overs: 9.2,
        team2run: "",
        team2wickets: "",
        team2overs: 0,
        place:"Dubai",
        date:"SAT, 31 OCT 2020"
        
    },
    {
        nthmatch: "45th Match",
        series: "Indian Premier League 2020",
        team1: "RR",
        team2: "MI",
        tosschoose: "Mumbai Indians opt to bat",
        result:"Mumbai Indians Won by 11 Runs",
        time:"7:30 PM",
        team1run: 82,
        team1wickets: 1,
        team1overs: 9.2,
        team2run: 102,
        team2wickets: 5,
        team2overs: 20,
        place:"Dubai",
        date:"SAT, 31 OCT 2020"
    }]

    const ClickPointtable = ()=>{
        setSeries(true)        
        setviewMatches(false)
        setseriesMenu("points")  
    }

    const ClickSchedule = ()=>{
        setSeries(true)
        setviewMatches(false)
        setseriesMenu("matches")          
    }

    const ClickMatch = (data)=>{
        console.log(data)
        setnthMatch(data)
        setLive(true)
        setSeries(false)
        setviewMatches(false)
    }

    return (
        <div>
            {
                viewMatches && <ViewMatches ClickMatch={ClickMatch} matches={matches} ClickPointtable={ClickPointtable} ClickSchedule={ClickSchedule} />
            }
            {
                series && <Series seriesMenu={seriesMenu} matches={matches} ClickMatch={ClickMatch} />
            }   
            {
                live && <Live nthmatch={nthmatch} />
            }
        </div>
    )
}

export default Match
