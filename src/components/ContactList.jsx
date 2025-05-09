import React, { useEffect } from 'react'
import ChatCard from './ChatCard'
import api from '../axiosConfig'

function ContactList() {

    useEffect(() => {
        api.get('chat')
        .then((res) => console.log(res))
        .catch(err => console.log(err));
    }, []);

    return (
        <>
            <div id="sidebar" className=" flex flex-col items-center justify-end w-auto ml-1 text-wrap p-1">
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
                <ChatCard />
            </div>
        </>
    )
}

export default ContactList