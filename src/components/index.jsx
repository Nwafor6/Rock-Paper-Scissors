import React, { useEffect, useState } from 'react';
import Modal from './modal';
import Picked from './Picked';
import BgMusic from './BgMusic';

const Index = () => {
  const gameArray = ['Rock', 'Paper', 'Scissors'];
  let computerChoice;
  let playerChoice;
  let ScoreNotice;

  if (!localStorage.getItem('score')) {
    localStorage.setItem('score', 0);
  }

  let scoreCount = parseInt(localStorage.getItem('score'), 10);
  console.log(typeof scoreCount);
  console.log('Your score', scoreCount);

  const [state, setState] = useState({
    data: '',
    userPicK: '',
    computerPick: '',
  });

  const changeState = (newScore, userPicK, computerPick) => {
    setState({ data: newScore, userPicK, computerPick });
  };

  const selectFromGameArray = () => {
    const index = Math.floor(Math.random() * gameArray.length);
    computerChoice = gameArray[index];

    if (playerChoice === computerChoice) {
      ScoreNotice = 'Tie';
      if(computerChoice==='Rock'){
        changeState(ScoreNotice, '/images/icon-rock.svg', '/images/icon-rock.svg');
      }else if(computerChoice==='Scissors'){
        changeState(ScoreNotice, '/images/icon-scissors.svg', '/images/icon-scissors.svg');
      }else if(computerChoice==='Paper'){
        changeState(ScoreNotice, '/images/icon-scissors.svg', '/images/icon-scissors.svg');
      }

    } else if (playerChoice === 'Rock' && computerChoice === 'Paper') {
      ScoreNotice = 'You Lose';
      changeState(ScoreNotice, '/images/icon-rock.svg', '/images/icon-paper.svg');
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
      ScoreNotice = 'You Win';
      changeState(ScoreNotice, '/images/icon-rock.svg', '/images/icon-scissors.svg');
      localStorage.setItem('score', (scoreCount += 1));
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock') {
      ScoreNotice = 'You Lose';
      changeState(ScoreNotice, '/images/icon-scissors.svg', '/images/icon-rock.svg');
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper') {
      ScoreNotice = 'You Win';
      changeState(ScoreNotice, '/images/icon-scissors.svg', '/images/icon-paper.svg');
      localStorage.setItem('score', (scoreCount += 1));
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors') {
      ScoreNotice = 'You Lose';
      changeState(ScoreNotice, '/images/icon-paper.svg', '/images/icon-scissors.svg');
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock') {
      ScoreNotice = 'You Win';
      changeState(ScoreNotice, '/images/icon-paper.svg', '/images/icon-rock.svg');
      localStorage.setItem('score', (scoreCount += 1));
    }
  };

  const handleSelectedPaper = () => {
    playerChoice = 'Paper';
    selectFromGameArray();
    document.querySelector('.pickedMain').style.display = 'block';
    document.querySelector('.gameContainer').style.display = 'none';
  };

  const handleSelectedScissor = () => {
    playerChoice = 'Scissors';
    selectFromGameArray();
    document.querySelector('.pickedMain').style.display = 'block';
    document.querySelector('.gameContainer').style.display = 'none';
  };

  const handleSelectedRock = () => {
    playerChoice = 'Rock';
    selectFromGameArray();
    document.querySelector('.pickedMain').style.display = 'block';
    document.querySelector('.gameContainer').style.display = 'none';
  };

  return (
    <>
      <div className="body">
        <div className="main">
          <div className="header-board">
            <div className="title">
              <div className="title">
                <h3>
                  Rock <br />
                  Paper <br />
                  Scissors
                </h3>
              </div>
            </div>
            <div className="score-board">
              <div className="text">
                <p>Score</p>
              </div>
              <div className="score-count">
                <h1 id="countHolder">{scoreCount}</h1>
              </div>
            </div>
          </div>
          <div className="gameContainer">
            <div className="triangle-bg">
              <img src="/images/bg-triangle.svg" alt="" />
            </div>
            <div className="paper game-icon" onClick={handleSelectedPaper}>
              <img src="/images/icon-paper.svg" alt="" />
            </div>
            <div className="scissor game-icon" onClick={handleSelectedScissor}>
              <img src="/images/icon-scissors.svg" alt="" />
            </div>
            <div className="rock game-icon" onClick={handleSelectedRock}>
              <img src="/images/icon-rock.svg" alt="" />
            </div>
          </div>
          <Picked data={state.data} userChoice={state.userPicK} compChoice={state.computerPick}/>
          <div className="rules">
            <div className="rule-text text-white">
              <h3>
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Rules
                </button>
              </h3>
            </div>
          </div>
          {<BgMusic/>}
        </div>
      </div>
      <Modal />
    </>
  );
};

export default Index;
