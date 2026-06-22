import React, { createContext, useContext, useState } from 'react'
import initialImages from '../data/images'

const ImageContext = createContext(null)

export function ImageProvider({ children }) {
  const [images] = useState(() => initialImages)

  return (
    <ImageContext.Provider value={{ images }}>
      {children}
    </ImageContext.Provider>
  )
}

export function useImages() {
  const ctx = useContext(ImageContext)
  if (!ctx) throw new Error('useImages must be used within ImageProvider')
  return ctx
}
