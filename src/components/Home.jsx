import React from "react";

const Home=()=>{
    return(
        <div className="gameContainer">
            <div className="triangle-bg"><img src="/images/bg-triangle.svg" alt="" /></div>
            <div className="paper game-icon" onClick={handleSelectedPaper}><img src="/images/icon-paper.svg" alt="" /></div>
            <div className="scissor game-icon" onClick={handleSelectedScissor}><img src="/images/icon-scissors.svg" alt="" /></div>
            <div className="rock game-icon" onClick={handleSelectedRock}><img src="/images/icon-rock.svg" alt="" /></div>
        </div>
    )
}
export default Home