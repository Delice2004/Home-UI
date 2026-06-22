import React from 'react'

export default function ImagePreview({ image, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        <div className="p-4 flex justify-between items-center border-b">
          <div>
            <div className="font-semibold">{image.name}</div>
            <div className="text-sm text-gray-500">Created on Dec 13, 2020</div>
          </div>
          <button className="px-3 py-1 text-sm text-gray-600" onClick={onClose}>Close</button>
        </div>
        <div className="p-4">
          <img src={image.url} alt={image.name} className="w-full h-96 object-contain" />
        </div>
      </div>
    </div>
  )
}
