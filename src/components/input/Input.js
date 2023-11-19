import React from 'react'

const Input =({value,className,style,type}) => {

  return (
    <input value={value} className={className} style={style} type={type} min={1}/>
  )
}

export default Input;