import React from "react";

const Picked=(props)=>{
    const handlePlayAgain=()=>{
        document.querySelector(".gameContainer").style.display="block"
        document.querySelector(".pickedMain").style.display="none"
    }
    console.log(props)
    console.log(props)
    return(
       <div className="pickedMain">
             <div className="pickedContainer p-3">
                <div className="youPicked Picked">
                    <div className="picked-text"><p>YOU PICKED</p></div>
                    <div className="picked-img"><img src={props.userChoice} alt="" /></div>
                </div>
                <div className="winLoseSection winlose-lg">
                    <div className="winOrLose  text-center text-white">
                        <div className="winOrLoseText">
                        <h3>{props.data}</h3>
                        </div>
                    </div>
                    <div className="playAgain text-center mt-2" onClick={handlePlayAgain}>
                        <button>PLAY AGAIN</button>
                    </div>
                </div>
                <div className="housePicked Picked">
                    <div className="picked-text"><p>HOUSE PICKED</p></div>
                        <div className="picked-img"><img src={props.compChoice} alt="" /></div>
                </div>
            </div>
            <div className="winLoseSection winlose-sm mt-5">
                <div className="winOrLose text-center text-white">
                    <div className="winOrLoseText">
                        <h3>{props.data}</h3>
                    </div>
                </div>
                <div className="playAgain text-center mt-2" onClick={handlePlayAgain}>
                    <button >PLAY AGAIN</button>
                </div>
            </div>
       </div>
    )
}
export default Picked