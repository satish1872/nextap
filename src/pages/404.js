/* if url dont exist , it will show upp this page */

import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function NotFound() {
    const router = useRouter();
    useEffect(()=>{
        console.log('Not Found - useEffects');
        setTimeout(() => {
            // router.go(-1)  equivalent to pressing back arrowkey
            router.push('/')
        }, 3000);
    },[]) 
  return (
    <div className='not-found'>
    <h1>that page cant be found</h1>
    <p>GO back to the <Link href={'/'}>HomePage</Link></p>
    </div>
  )
}

export default NotFound