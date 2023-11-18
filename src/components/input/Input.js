import React from 'react'

const Input = React.forwardRef(({defaultValue,className,style,type},ref) => {

  return (
    <input defaultValue={defaultValue} className={className} style={style} ref={ref} type={type} min={1}/>
  )
})

export default Input;