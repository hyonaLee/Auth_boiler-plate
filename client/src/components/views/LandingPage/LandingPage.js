import React, { useEffect } from 'react'
import axios from 'axios';
import Btn from './Btn';

function LandingPage() {

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => {console.log(response)})
    }, [])

    return (
        <div>
            LandingPage
            <Btn/>
        </div>
    )
}

export default LandingPage
