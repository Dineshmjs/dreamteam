import React, { useState } from 'react'
import Matches from './Matches'
import PointsTable from './PointsTable'
import SeriesMenus from './SeriesMenus'
import Squads from './Squads'
import Stats from './Stats'
import Venues from './Venues'
import './index.css'

function Series({seriesMenu, matches, ClickMatch}) {
    const [menu, setMenu] = useState(seriesMenu)
    const ClickMenu = (data)=>{
        setMenu(data)
    }
   
    return (
        <div>
            <SeriesMenus ClickMenu={ClickMenu} />            
            {
                menu === "matches" && <Matches ClickMatch={ClickMatch} matches={matches} />
            }
            {
                menu === "squads" && <Squads />
            }
            {
                menu === "stats" && <Stats />
            }
            {
                menu === "venues" && <Venues />
            }
            {
                menu === "points" && <PointsTable />
            }

        </div>
    )
}

export default Series
