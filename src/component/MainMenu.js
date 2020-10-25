import React from 'react'

function MainMenu({menuClick}) {
    return (
        <div className="mm-container mt-1 mb-1">
            <div>
                <button className="btn w3-green" onClick={()=>menuClick('match')}>Match</button>                
            </div>
            <div>
                <button className="btn w3-green" onClick={()=>menuClick('contest')}>Contest</button>
            </div>
            <div>
                <button className="btn w3-green" onClick={()=>menuClick('analyse')}>Analyse</button>
            </div>
        </div>
    )
}

export default MainMenu
