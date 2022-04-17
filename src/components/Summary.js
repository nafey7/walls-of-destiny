import { flexbox } from '@mui/system';
import React from 'react'

function Summary () {
    return (
        <>
        <header>
            <div className = "summary-heading">
                <h1 style={{fontSize: 25, margin: "80px 60px 40px 60px", color: "#a7ac38"}}>Summary</h1>
            </div>
        </header>
        
        <div className = "summary-section" style = {{width: '70%', height: '40rem', backgroundColor: 'white', margin: '20px auto 30px auto', display: 'grid', gridTemplateColumns: '49% 46%', gridTemplateRows: '44% 43%', gap: '50px', padding: '20px'}}>
            <div className = "income" style = {{width: '100%', height: '100%', backgroundColor: 'black', margin: '0px auto 0px auto', /*display: 'flex', justifyContent: 'center',*/ borderRadius: '5px'}}>
               <h1 style={{fontSize: 70, color: "#a7ac38", margin: "30px 0px 0px 0px", display: 'flex', justifyContent: 'center'}}>585 023</h1>
               <p style={{fontSize: 20, color: 'white', margin: "0px 125px 0px 0px", display: 'flex', justifyContent: 'center'}}>Income (PKR)</p>
            </div>
            <div className = "sales" style = {{width: '100%', height: '100%', backgroundColor: 'black', margin: '0px auto 0px auto', borderRadius: '5px'}}>
                <h1 style={{fontSize: 70, color: "#a7ac38", margin: "30px 0px 0px 0px", display: 'flex', justifyContent: 'center'}}>600</h1>
               <p style={{fontSize: 20, color: 'white', margin: "0px 0px 0px 10px", display: 'flex', justifyContent: 'center'}}>Sales (pieces)</p>
            </div>
            <div className = "profit" style = {{width: '100%', height: '100%', backgroundColor: 'black', margin: '0px auto 0px auto', borderRadius: '5px'}}>
                <h1 style={{fontSize: 70, color: "#a7ac38", margin: "30px 0px 0px 0px", display: 'flex', justifyContent: 'center'}}>65 125</h1>
               <p style={{fontSize: 20, color: 'white', margin: "0px 105px 0px 0px", display: 'flex', justifyContent: 'center'}}>Profit (PKR)</p>
            </div>
            <div className = "users" style = {{width: '100%', height: '100%', backgroundColor: 'black', margin: '0px auto 0px auto', borderRadius: '5px'}}>
                <h1 style={{fontSize: 70, color: "#a7ac38", margin: "30px 0px 0px 0px", display: 'flex', justifyContent: 'center'}}>2 617</h1>
               <p style={{fontSize: 20, color: 'white', margin: "0px 125px 0px 0px", display: 'flex', justifyContent: 'center'}}>Users</p>
            </div>

        </div>
        </>
    )

}
export default Summary;