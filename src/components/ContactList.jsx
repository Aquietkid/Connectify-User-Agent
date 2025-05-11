import React, { useEffect, useState } from 'react'
import ChatCard from './ChatCard'
import { getAllChats } from '../api/chat';

function ContactList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await getAllChats()
            if (res) {
                setData(res.data)
            }
        })()
    }, []);

    return (
        <>
            <div id="sidebar" className=" flex flex-col items-center justify-end w-auto ml-1 text-wrap p-1">
                {data.map((item, key) => (
                    <ChatCard key={key} {...item} />
                ))}
            </div>
        </>
    )
}

export default ContactList