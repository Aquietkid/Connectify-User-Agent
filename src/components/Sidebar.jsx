import { useState } from "react"
import archiveIcon from "/src/assets/sidebar/archive.svg"
import chatIcon from "/src/assets/sidebar/chat.svg"
import statusIcon from "/src/assets/sidebar/status.svg"
import settingsIcon from "/src/assets/sidebar/settings.svg"
import logoutIcon from "/src/assets/sidebar/logout.svg"
import Icon from "./Icon"

import './Sidebar.css'

const icons = [archiveIcon, chatIcon, statusIcon, settingsIcon, logoutIcon];

/*
* This split determines the 'breaking point' of the icons sitting in the center and bottom groups. 
* Icons with indices lower than this sit in the center group, whereas the remaining ones are pushed 
* to the bottom group.
*/
const split = 3;


export function Sidebar() {

    const [selected, setSelected] = useState(0);

    return (
        <>
            <div id="sidebar" className="flex flex-col items-center justify-end border-r border-r-gray-200 h-dvh fixed">
                <div id="center-icon-group" className="m-auto">
                    {icons.slice(0, split).map((val, ind) => {
                        return <Icon key={ind} source={val} isSelected={selected === ind} onClick={() => setSelected(ind)} />
                    })}
                </div>
                <div id="bottom-icon-group">
                    {icons.slice(split).map((val, ind) => {
                        return <Icon key={ind + split} source={val} isSelected={selected === ind + split} onClick={() => setSelected(ind + split)} />
                    })}
                </div>
            </div>
        </>
    )
}