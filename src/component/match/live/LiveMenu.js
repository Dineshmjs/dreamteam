import React from 'react'

function LiveMenu({ClickMenu}) {
    return (
        <div className="sms-menu">
            <div onClick={()=>ClickMenu('info')}>
                <p>Info</p>
            </div>
            <div onClick={()=>ClickMenu('livescore')}>
                <p>Live</p>
            </div>
            <div onClick={()=>ClickMenu('scorecard')}>
                <p>ScoreCard</p>
            </div>
            <div onClick={()=>ClickMenu('overs')}>
                <p>Overs</p>
            </div>
            <div onClick={()=>ClickMenu('highlights')}>
                <p>Highlights</p>
            </div>
        </div>
    )
}

export default LiveMenu
