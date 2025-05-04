import { useState } from "react"
import archiveIcon from "/src/assets/sidebar/archive.svg"
import archiveIconWhite from "/src/assets/sidebar/archive-white.svg"

import chatIcon from "/src/assets/sidebar/chat.svg"
import chatIconWhite from "/src/assets/sidebar/chat-white.svg"

import statusIcon from "/src/assets/sidebar/status.svg"
import statusIconWhite from "/src/assets/sidebar/status-white.svg"

import settingsIcon from "/src/assets/sidebar/settings.svg"
import settingsIconWhite from "/src/assets/sidebar/settings-white.svg"

import logoutIcon from "/src/assets/sidebar/logout.svg"
import logoutIconWhite from "/src/assets/sidebar/logout-white.svg"

import Icon from "./Icon"

import './NavSidebar.css'

const icons = [
    {
        default: archiveIcon,
        selected: archiveIconWhite
    },
    {
        default: chatIcon,
        selected: chatIconWhite
    },
    {
        default: statusIcon,
        selected: statusIconWhite
    }, {
        default: settingsIcon,
        selected: settingsIconWhite
    },
    {
        default: logoutIcon,
        selected: logoutIconWhite
    }
];

/*
* This split determines the 'breaking point' of the icons sitting in the center and bottom groups. 
* Icons with indices lower than this sit in the center group, whereas the remaining ones are pushed 
* to the bottom group.
*/
const split = 3;


function NavSidebar() {

    const [selected, setSelected] = useState(0);

    return (
        <>
            <div id="sidebar" className="flex flex-col items-center justify-end border-r border-r-gray-200 h-[100vh]">
                <div id="center-icon-group" className="mb-auto mt-auto">
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

export default NavSidebar;