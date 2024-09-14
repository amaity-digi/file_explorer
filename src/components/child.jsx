import React from 'react'

function Child({children}) {
  return (
    <div style={{margin: "15px"}}>
         {children?.map(({ id, name, isFolder, children }) => (
        <>
          <div><span> {isFolder ? "📁": "🗃"}</span>{name}</div>
          <Child children={children}/>
        </>
      ))}
    </div>
  )
}

export default Child