import React from 'react'
import { FiImage } from 'react-icons/fi'

export default function ImageCard({ image, onClick }) {
  return (
    <article className="image-card" onClick={() => onClick?.(image)}>
      <div className="image-thumb">
        <img src={image.url} alt={image.name} />
      </div>
      <div className="image-info">
        <p>Created on Dec 13, 2020</p>
        <h3><span><FiImage /></span>{image.name}</h3>
        <p>You opened <a href="#">{image.opened}</a></p>
      </div>
    </article>
  )
}
