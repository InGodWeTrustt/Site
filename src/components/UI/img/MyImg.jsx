import React from 'react'

export default function MyImg({alt ='', ...props}) {
    return (
        <img {...props} alt={alt}  />
    )
}
