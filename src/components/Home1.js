import React from 'react'


function Home1(){
    return(
        <div className="container">
            <br/>
            <br/>
            <img src={require("../images/welcome.png")} class="rounded mx-auto d-block"></img><br/><br/><br/>
            <p className="text-center">
                Welcome To Ticket Master App, please login to continue or register with us if you dont have an account 
            </p>
        </div>
    )
}
export default Home1