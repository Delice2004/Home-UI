import React from 'react'
import ImageCard from '../components/ImageCard'
import { useImages } from '../context/ImageContext'
import { useState } from 'react'
import ImagePreview from '../components/ImagePreview'
import { FiImage } from 'react-icons/fi'

export default function ImagesPage() {
  const { images } = useImages()
  const recently = [...images].slice(0, 8)
  const [selected, setSelected] = useState(null)

  return (
    <div className="images-page">
      <div className="image-page-head">
        <h1>Images</h1>
        <button><FiImage />Add Image</button>
      </div>

      <section className="image-section">
        <h2>Recently viewed</h2>
        <div className="image-grid">
          {recently.map((img) => (
            <ImageCard key={img.id} image={img} onClick={setSelected} />
          ))}
        </div>
      </section>

      <section className="image-section">
        <h2>All Image</h2>
        <div className="image-grid">
          {images.map((img) => (
            <ImageCard key={img.id} image={img} onClick={setSelected} />
          ))}
        </div>
      </section>
      {selected && <ImagePreview image={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
