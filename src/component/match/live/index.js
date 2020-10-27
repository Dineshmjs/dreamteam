import React, {useState} from 'react'
import LiveMenu from './LiveMenu'
import Info from './Info'
import LiveScore from './LiveScore'
import Overs from './Overs'
import HighLights from './HighLights'
import ScoreCard from './ScoreCard'
import './index.css'

function Live() {
    const [menu, setMenu] = useState("livescore")
    const ClickMenu = (data)=>{
        setMenu(data)
    }
    return (
        <div>
            <LiveMenu ClickMenu={ClickMenu} /> 
            {
                menu === "info" && <Info />
            }
            {
                menu === "livescore" && <LiveScore />
            }
            {
                menu === "scorecard" && <ScoreCard />
            }
            {
                menu === "overs" && <Overs />
            }
            {
                menu === "highlights" && <HighLights />
            }
           
        </div>
    )
}

export default Live
