import React from 'react';
import BagItem from './BagItem';
import Styles from './dataStyle.module.css'

const Bag = (props) => {
    console.log(props.data)
  return (
    <div className={Styles.container}>
    <div className={Styles.title}>
     
        <p>Active user</p>
        <p>date-01/06/2022</p>
      
    </div>
    <div className='mainbody'>
        {props.data.map((e)=>{
           return <BagItem key={e.level} e={e}/>
        })}
       

    </div>
</div>
  )
}

export default Bag