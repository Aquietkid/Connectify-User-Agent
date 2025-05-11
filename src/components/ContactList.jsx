import React, { useEffect, useState } from 'react'
import ChatCard from './ChatCard'
import SkeletonChatCard from './skeleton/SkeletonChatCard'
import { getAllChats } from '../api/chat'

function ContactList() {
    const [data, setData] = useState(null)

      useEffect(() => {
        (async () => {
          const res = await getAllChats()
          setData(res?.data || [])
        })()
      }, [])

    return (
        <div id="sidebar" className="flex flex-col items-center justify-end w-auto ml-1 text-wrap p-1">
            {data === null ? (
                Array.from({ length: 6 }).map((_, i) => <SkeletonChatCard key={i} />)
            ) : data.length === 0 ? (
                <p className="text-gray-400 mt-4 text-sm">No conversations found.</p>
            ) : (
                data.map((item, key) => <ChatCard key={key} {...item} />)
            )}
        </div>
    )
}

export default ContactList
