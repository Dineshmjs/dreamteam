import React from 'react'
import Match from './match'
import Contest from './contest'
import Analyse from './analyse'


function Body({menus}) {
    return (
        <div className="body-container">
            {
                menus === 'match' && <Match />
            }
            {
                menus === 'contest' && <Contest />
            }
            {
                menus === 'analyse' && <Analyse />
            }
        </div>
    )
}

export default Body
