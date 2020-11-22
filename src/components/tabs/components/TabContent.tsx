import React from 'react';
import { Skeleton } from 'antd';
import styled from 'styled-components';
import Chart from 'react-apexcharts';
import { chartLineOptions, chartBarOptions } from './chartOptions';

const Error = styled.div`
	display: flex;
	width: 100%;
	text-align: center;
	color: red;
	font-size: 18px;
	margin: 30px 0;
	justify-content: center;
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const ChartContainer = styled.div`
	width: 70%;
	padding: 20px;
`;
const KpiContainer = styled.div`
	width: 30%;

	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const Kpi = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	background: #cce5ff;
	border-radius: 5px;
`;

const Title = styled.div`
	text-align: center;
	padding: 10px 20px;
	font-size: 19px;
	color: #6e75db;
`;

const Value = styled.div`
	text-align: center;
	padding: 10px 20px;
	font-size: 44px;
	color: #d640a2;
`;

interface TabContentProps {
	tab: number;
	pureChartData: [number, number];
	loading: boolean;
	error: string;
	name: string;
	kpi: number;
}

const TabContent = (props: TabContentProps) => {
	const { pureChartData, loading, error, name, kpi, tab } = props;

	if (loading) return <Skeleton />;
	if (error) return <Error>{error}</Error>;

	return (
		<Container>
			<ChartContainer>
				<Chart
					options={tab === 1 ? chartLineOptions : chartBarOptions}
					series={[{ data: pureChartData, name }]}
					width="100%"
					height="400px"
					type={tab === 1 ? 'line' : 'bar'}
				/>
			</ChartContainer>
			<KpiContainer>
				<Kpi>
					<Title>{name}</Title>
					<Value>{kpi}</Value>
				</Kpi>
			</KpiContainer>
		</Container>
	);
};

export default TabContent;
