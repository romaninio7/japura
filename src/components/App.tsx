import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Divider } from 'antd';
import CustomTabs from './tabs';
import useFetch from '../hooks/useFetch';

import CustomDatePicker from './datepicker/index';
import './App.css';

const Content = styled.div`
	max-width: 1200px;
	min-height: 80vh;
	background-color: #f4fcff;
	display: flex;
	width: 100%;
	padding: 30px;
	border-radius: 4px;
	flex-direction: column;
	align-items: center;
`;

const ContentContainer = styled.div`
	display: flex;
	justify-content: center;
	height: 100vh;
`;

const CustomDatePickerContainer = styled.div`
	margin: 40px;
`;

const App: FC = () => {
	const [dates, setDates] = useState<[string, string]>(['2020-09-01', '2020-11-01']);

	return (
		<ContentContainer>
			<Content>
				<div>
					<Divider>Choose the date range</Divider>
				</div>
				<CustomDatePickerContainer>
					<CustomDatePicker dates={dates} setDates={setDates} />
				</CustomDatePickerContainer>
				<CustomTabs dates={dates} />
			</Content>
		</ContentContainer>
	);
};

export default App;
