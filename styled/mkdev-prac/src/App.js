import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";

const QNumBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  font-size: 1rem;
`;

const QBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 2rem;
`;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {
  const [num, setNum] = useState(1);

  const onIncrease = () => {
    if (num === 20) {
      return;
    }
    setNum(num + 1);
  };

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          gray: "#495057",
          pink: "#f06595",
          green: "#67FC96",
        },
      }}
    >
      <QNumBlock>
        <b>{num}/20</b>
      </QNumBlock>
      <QBlock>
        <b>Q: 당신은 어떤 성향입니까?</b>
      </QBlock>
      <AppBlock>
        <ButtonGroup>
          <Button onClick={onIncrease}>보기 1</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={onIncrease} color="gray">
            보기 2
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={onIncrease} color="pink">
            보기 3
          </Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button onClick={onIncrease} color="green">
            보기 4
          </Button>
        </ButtonGroup>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
