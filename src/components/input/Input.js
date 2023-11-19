import React from 'react'

const Input =({defaultvalue,className,style,type}) => {

  return (
    <input defaultValue={defaultvalue} className={className} style={style} type={type} min={1}/>
  )
}

export default Input;