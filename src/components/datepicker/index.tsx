import React, { useCallback } from 'react';
import { DatePicker } from 'antd';
import { RangeValue } from 'rc-picker/lib/interface';

import moment, { Moment } from 'moment';

const { RangePicker } = DatePicker;

const disabledDate = (current: Moment): boolean => {
	if (current < moment().subtract(3, 'M')) {
		return true;
	}
	if (current > moment()) {
		return true;
	}
	return false;
};

interface CustomDatePickerProps {
	dates: [string, string];
	setDates: React.Dispatch<React.SetStateAction<[string, string]>>;
}

const CustomDatePicker = (props: CustomDatePickerProps) => {
	const { dates, setDates } = props;

	const onChangeDates = useCallback((values: RangeValue<Moment>) => {
		if (!values) return;
		if (values[0] === null || values[1] === null) return;
		setDates([values[0].format('YYYY-MM-DD'), values[1].format('YYYY-MM-DD')]);
	}, []);
	return (
		<div>
			<RangePicker
				disabledDate={disabledDate}
				value={[moment(dates[0]), moment(dates[1])]}
				onChange={onChangeDates}
			/>
		</div>
	);
};

export default CustomDatePicker;
