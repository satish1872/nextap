import style from '../../styles/Ninjas.module.css'
import React from 'react'
import Link from 'next/link';

export const getStaticProps =async ()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>res.json());
  return {
    props:{
      ninjas:res
    }
  }
}

function Ninjas(props) {
  const ninjas=props.ninjas;
  console.log(ninjas);

  return (
    <React.Fragment>
    <div>my ninjas </div>
    <div>
    {ninjas.map(ninja=> 
     ( <Link key={ninja.id} href={"/ninjas/"+ninja.id}>
      <h3>{ninja.name}</h3>
      </Link>) 
    )}
    </div>
    </React.Fragment>
  )
}

export default Ninjas