import styled from "styled-components";
import colors from "~/utils/color"

export const StyleContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const StyleLoginSide = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 35%;
	height: 100vh;
	padding: 50px;
`;

export const StyleIntroductionSide = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 65%;
	padding: 12px 24px;
	height: 100vh;
	background: rgb(47, 104, 87, 85%);
	box-shadow: 0px 0px 20px rgba(0,0,0,0.6);
`;

export const StyleImg = styled.img`
	width: ${({width}) => width ? `${width}%` : '50%'};
`;

export const StyleLoginTitle = styled.p`
	font-size: 1.6rem;
	font-weight: 400;
	color: ${colors('grey')};
	position: absolute;
	top: 68%;
	right: 28%;
`;

export const StyleDivLoginFormIcon = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const StyleDivLoginFormInputs = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	div {
		margin: 40px 0px 0px 0px;
	}
`;
export const StyleDivLoginFormButtons = styled.div`
	width: 70%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const StyleForgotPasswordLink = styled.a`
	color: #5781c0;
	text-align: right;
	margin: 12px 0px;
	:hover {
		text-decoration: underline;
	}
`;

export const StyleSeparatorContainer = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 12px 0px;
	span {
		font-weight: bold;
		color: ${colors('grey')};
	}
`;

export const StyleSeparator = styled.div`
	border: 1px solid ${colors('grey-1')};
	width: 44%;
	height: 1px;
`;
