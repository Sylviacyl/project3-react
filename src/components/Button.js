import React from 'react'

function Button({title, marginRight}) {
 return (
   <button style={{
       fontSize: 20,
       paddingLeft: '0.5em',
       paddingRight: '0.5em',
       backgroundColor: '#ddd'}}
       >
     { title }
    </button>
  )
}
export default Button;
