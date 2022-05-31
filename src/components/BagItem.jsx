import React from 'react';
import Styles from './dataStyle.module.css'


const BagItem = ({e}) => {
  
  return (
   <div className={Styles.box}>
       <div className={Styles.top}>
       <img src={e.imgurl}  className={Styles.image}/>
       <div>
       <h3 className={Styles.name}>{e.name}</h3>
       <p className={Styles.city}>{e.city}</p>
       </div>
       </div>

       <div className={Styles.bottom}>
           <p>Professional Level{e.level}</p>
           <p>{e.points}points</p>
       </div>

   </div>
  )
}

export default BagItem;