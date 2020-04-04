import React from 'react'


function Home(){
    return(
        <div className="container">
            <br/>
            <br/>
            <h1 className="text-center">Welcome</h1>
            <p className="text-center">This is a frontend project which is done using react and redux.
                This project shows the usage of crud operations and different
                functionalities.
            </p>
            <img src={require("../images/download1.png")} class="rounded float-left" alt="react"/>
            <img src={require("../images/og1w.png")} class="rounded float-right" alt="redux"/>
        </div>
    )
}
export default Home