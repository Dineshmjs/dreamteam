import React from 'react'


function SeriesMenus({ClickMenu}) {
    return (
        <div className="sms-menu">
            <div onClick={()=>ClickMenu('matches')}>
                <p>Matches</p>
            </div>
            <div onClick={()=>ClickMenu('squads')}>
                <p>Squads</p>
            </div>
            <div onClick={()=>ClickMenu('stats')}>
                <p>Stats</p>
            </div>
            <div onClick={()=>ClickMenu('venues')}>
                <p>Venus</p>
            </div>
            <div onClick={()=>ClickMenu('points')}>
                <p>Points</p>
            </div>
        </div>
    )
}

export default SeriesMenus
