import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import {Link} from "react-router-dom" ;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 1rem;
`;

function Start(){
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
			<AppBlock>
				<h1>테스트 시작!!</h1>
				<Link to="/q">
					<Button color="pink">START</Button>
				</Link>
			</AppBlock>
		</ThemeProvider>
	);
}

export default Start;
