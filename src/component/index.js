import React,{useState} from 'react'
import Head from './Head'
import MainMenu from './MainMenu'
import Body from './Body'
import './index.css'

function Main() {
    const [menus,setMenus] = useState("contest")
    const menuClick = (menu)=>{
        setMenus(menu)
    }
    return (
        <div>
            <Head />
            <MainMenu menuClick={menuClick} />
            <Body menus={menus} />
        </div>
    )
}

export default Main
