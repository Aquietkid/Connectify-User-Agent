import React from 'react'
import { PLACEHOLDER_AVATAR } from '../../utils/constants'

function ReadReceiptsPopup({ receipts, onClose }) {
    return (
        <div className="absolute right-0 top-10 bg-white shadow-xl border rounded-lg p-4 z-50 min-w-[250px]">
            <div className="flex justify-between items-center mb-2">
                <p className="text-sm font-semibold">Read Receipts</p>
                <button className="text-xs text-gray-500" onClick={onClose}>Close</button>
            </div>
            {receipts.length > 0 ? (
                receipts.map((r, i) => (
                    <div key={i} className="flex items-center gap-2 py-1">
                        <img src={r.avatar || PLACEHOLDER_AVATAR} className="w-6 h-6 rounded-full" />
                        <div className="flex flex-col">
                            <span className="text-xs font-medium">{r.name}</span>
                            <span className="text-[10px] text-gray-400">{r.status}</span>
                        </div>
                    </div>
                ))
            ) : (
                <p className="text-xs text-gray-400">No receipt data</p>
            )}
        </div>
    )
}

export default ReadReceiptsPopup
