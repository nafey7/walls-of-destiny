import React from 'react'
import WheelComponent from "./WheelComponent";

function Rewards() {
    const segments = [
        {isSuper: false, value:'Better Luck next time'},
        {isSuper: false, value:'Better Luck next time'},
        {isSuper: true, value:'30%'},
        {isSuper: false, value:'Better Luck next time'},
        {isSuper: false, value:'Better Luck next time'},
        {isSuper: false, value:'Better Luck next time'},
        {isSuper: false, value:'Better Luck next time'},
        {isSuper: false, value:'Better Luck next time'},
        {isSuper: true, value:'10%'},
        {isSuper: false, value:'Better Luck next time'},
        
    ]
    const segColors = [
        '#EC3F3F',
        '#ffffff',
        '#EC3F3F',
        '#ffffff',
        '#EC3F3F',
        '#ffffff',
        '#EC3F3F',
        '#ffffff',
        '#EC3F3F',
        '#ffffff',
    ]
      const onFinished = (winner) => {
        console.log(winner);
      };
    
      return (
        <div className="row">
            <div class="col">
            <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment="won 70"
            onFinished={(winner) => onFinished(winner)}
            primaryColor="black"
            contrastColor="gold"
            buttonText="Spin"
            isOnlyOnce={true}
            size={150}
            upDuration={100}
            downDuration={1000}
            fontFamily="Arial"
            />
            </div>
            <div class="col" style ={{ margin: "150px 200px 0 0px"}}>
            <div style={{textAlign:"left", width: "30rem"}}>
                <h1>Welcome!</h1>
                <h4 >We love giving our new and frequent customers a chance to win free vouchers. Click on <b>Spin</b> to try your luck!</h4>
            </div>
            </div>
          
        </div>
      );
}

export default Rewards