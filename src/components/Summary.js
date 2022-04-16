import React from 'react'

function Summary () {
    return (
        <>
        <header>
            <div className = "summary-heading">
                <h1 style={{fontSize: 25, margin: "80px 60px 40px 60px", color: "#a7ac38"}}>Summary</h1>
            </div>
        </header>
        
        <div className = "income-container" style = {{width: '91.5%', height: '15rem', backgroundColor: '#E5E5E5', margin: '20px auto 30px auto', display: 'grid', gridTemplateColumns: '200px 300px auto auto', padding: '20px'}}></div>
        
        </>
    )

}
export default Summary;