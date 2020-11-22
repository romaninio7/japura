import React, { useMemo, useState } from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components';
import useFetch from 'hooks/useFetch';

import { FieldTimeOutlined, NodeExpandOutlined } from '@ant-design/icons';
import TabContent from './components/TabContent';

const { TabPane } = Tabs;

interface CustomTabsProps {
	dates: [string, string];
}

const Container = styled.div`
	width: 100%;
`;

const parseTime = (time: string): number => {
	if (!time) return 0;
	const sec = Number(time.slice(0, -1));
	return Math.floor(sec / 3600);
};

const CustomTabs = (props: CustomTabsProps) => {
	const { dates } = props;

	const [currentTab, setCurrentTab] = useState('1');

	const { chartData, loading, error } = useFetch(dates, currentTab);

	const reviewsTime = useMemo(() => {
		if (!chartData || currentTab !== '1') return [];
		return chartData.calculated[0].values.map(({ date, values }) => {
			return [date, parseTime(values[0])];
		});
	}, [chartData]);

	const reviewsTimeKPI = useMemo(
		() =>
			reviewsTime
				.map(item => item[1])
				.reduce((avg, value, _, { length }) => {
					return avg + value / length;
				}, 0),
		[reviewsTime]
	);

	const groupData = useMemo(() => {
		if (!chartData || currentTab !== '2') return [];
		return chartData.calculated.map(repo => {
			return repo.values.map(item => item.values[0]).reduce((a, b) => a + b, 0);
		});
	}, [chartData]);

	const groupDataKpi = useMemo(
		() =>
			groupData.reduce((avg, value, _, { length }) => {
				return avg + value / length;
			}, 0),
		[groupData]
	);

	return (
		<Container>
			<Tabs activeKey={currentTab} onChange={setCurrentTab}>
				<TabPane
					tab={
						<span>
							<FieldTimeOutlined />
							Review time (hours)
						</span>
					}
					key="1"
				>
					<TabContent
						tab={1}
						pureChartData={reviewsTime}
						loading={loading}
						error={error}
						name="Average review time (hours)"
						kpi={Math.round(Number(reviewsTimeKPI) * 10) / 10}
					/>
				</TabPane>
				<TabPane
					tab={
						<span>
							<NodeExpandOutlined />
							PRs created
						</span>
					}
					key="2"
				>
					<TabContent
						tab={2}
						pureChartData={groupData}
						loading={loading}
						error={error}
						name="Average PRs/repo"
						kpi={groupDataKpi}
					/>
				</TabPane>
			</Tabs>
		</Container>
	);
};

export default CustomTabs;
