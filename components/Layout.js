import Navbar from './Navbar'
import Head from 'next/head'
import { useEffect } from 'react'

const Layout = ({children,title, footer =true, dark= false}) => {

    useEffect(()=>{console.log('cargo')},[])
    return(
        <div className={dark ? 'bg-dark':''}>
        {/**<Head>
            <title>my portafolio</title>
    </Head>*/}
       
       
    
        <Navbar/>
    
        <main className= "container py-4">

            {title && (
                <h1 className='text-center text-light'>{title}</h1>

            )
}
            
        
           {children}
           
     
        </main>
        {
            footer &&(
                <footer className='bg-dark text-light text-center'>
                <div className="container p-4">
                    <h1>&copy; Tomas Granillo Portfolio</h1>
                     <p>2002-{new Date().getFullYear}</p>
                     <p>All rights Reservers</p>
                </div>
             </footer>
            )
        }

    
        
    
        </div>
        )
}



 



export default Layout ;