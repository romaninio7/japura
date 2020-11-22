import styled from 'styled-components';

export const Error = styled.div`
	display: flex;
	width: 100%;
	text-align: center;
	color: red;
	font-size: 18px;
	margin: 30px 0;
	justify-content: center;
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
`;

export const ChartContainer = styled.div`
	width: 70%;
	padding: 20px;
`;
export const KpiContainer = styled.div`
	width: 30%;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const Kpi = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	background: #cce5ff;
	border-radius: 5px;
`;

export const Title = styled.div`
	text-align: center;
	padding: 10px 20px;
	font-size: 19px;
	color: #6e75db;
`;

export const Value = styled.div`
	text-align: center;
	padding: 10px 20px;
	font-size: 44px;
	color: #d640a2;
`;
