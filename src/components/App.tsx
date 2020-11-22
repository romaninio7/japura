import React, { FC, useState } from 'react';
import { Divider } from 'antd';
import CustomTabs from './tabs';
import CustomDatePicker from './datepicker/index';
import { ContentContainer, Content, CustomDatePickerContainer } from './App.styles';
import './App.css';

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
