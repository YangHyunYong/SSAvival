import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GameAction } from "../redux/actions/GameAction";
import styled from "styled-components";
import GameComp from "../components/game/GameComp";
import GameComp2 from "../components/game/GameComp2";
import RemindGame from "../components/game/RemindGame";
import Header from "../components/game/Header";
import game from "../assets/game.png";

const Pages = styled.div`
  background-image: url(${game});
  background-size: cover;
  position: relative;
  width: 100%;
  height: 100%;
`;

const myProps = {
  title: "연상되는 단어를 입력해봐!",
  number: 10,
};

function RemindPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GameAction.getRemindAnswer("음식"));
  }, []);

  const gameMode = useSelector((state) => state.gameMode);

  return (
    <Pages>
      <Header props={myProps} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "1%",
          height: "100vh",
        }}
      >
        {gameMode === "single" ? (
          <GameComp props={myProps}>
            <RemindGame {...myProps} />
          </GameComp>
        ) : (
          <GameComp2 props={myProps}>
            <RemindGame {...myProps} />
          </GameComp2>
        )}
      </div>
    </Pages>
  );
}

export default RemindPage;