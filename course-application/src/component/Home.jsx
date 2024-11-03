import React from 'react'
import { useEffect } from 'react'
import { Container, Button } from 'reactstrap'

function Home() {

    useEffect(()=>{
        document.title="Home || Learn Code with Altaf"
    },[])

    return (

        <div>
             <Container className='text-center' style={{padding: "2rem", backgroundColor: "#f8f9fa", borderRadius:"0.3rem"}}>
                    <h1>Altaf Raza Siddique</h1>
                    <p>This is developed by Altaf Raza Siddique for learning purpose. Its backend is on spring boot and frontend on react js </p>
                    <Button color='primary' outline>Start using </Button>
            </Container>
        </div>
    
 
    )
}

export default Home
