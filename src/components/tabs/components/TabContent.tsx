import React from 'react';
import { Skeleton } from 'antd';
import Chart from 'react-apexcharts';
import { chartLineOptions, chartBarOptions } from './chartOptions';
import { Error, Container, ChartContainer, KpiContainer, Kpi, Title, Value } from './TabContent.styles';

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
