import React from 'react'

const Input =({value,className,style,type,onChange}) => {

  return (
    <input value={value} className={className} style={style} type={type} min={1} onChange={onChange}/>
  )
}

export default Input;