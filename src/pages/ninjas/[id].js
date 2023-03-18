import React from "react";


export const getStaticPaths=async ()=>{
    const res=await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json());

    /* {
      paths:[{},{},
        {params:{   id:  }
      }]
    } */

    const paths=res.map(ninja=> {
         return  {
            params:{id:ninja.id.toString()}
         }
        }
      ); 

    return {
      paths:paths,
      fallback:false
    }
}

export const getStaticProps=async (context)=>{
  const id=context.params.id;
  const result=await fetch(`https://jsonplaceholder.typicode.com/users/`+id)
  .then(res=>res.json());

  return {
    props:{
      ninja:result
    }
  }
}

const Details = ({ninja}) => {
    console.log(ninja);

    return ( <React.Fragment>
         <h1>{ninja.name}</h1>
         <p>{ninja.email}</p>
         <p>{ninja.address.city}</p>
        </React.Fragment> );
}
 
export default Details;