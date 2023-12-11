import React from 'react'
/**
 * NOTE: To render images from local or from remote
 * @param {string} src 
 * @param {string} alt 
 * @returns Img tag
 */
export default function Image({src,alt}) {
  return (
    <img alt={alt} src={src} />
  )
}
