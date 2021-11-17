import React from 'react'

function MainMenu({menuClick}) {
    return (
        <div className="mm-container mt-1 mb-1">
            <div>
                <p className="" onClick={()=>menuClick('match')}>Match</p>                
            </div>
            <div>
                <p className="" onClick={()=>menuClick('contest')}>Contest</p>
            </div>
            <div>
                <p className="" onClick={()=>menuClick('analyse')}>Analyse</p>
            </div>
        </div>
    )
}

export default MainMenu
