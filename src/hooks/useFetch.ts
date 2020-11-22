import { useState, useEffect, useCallback } from 'react';
import getReviewTimes from '../api/getReviewTimes';
import getPRByGroup from '../api/getPRByGroup';

const useFetch = (dates: [string, string], tab: string) => {
	const [chartData, setResponse] = useState<any>();
	const [error, setError] = useState<string>('');
	const [loading, setLoading] = useState(false);

	const fetchReviewTime = useCallback(async () => {
		try {
			setLoading(true);
			const r = await getReviewTimes(dates);
			setResponse(r.data);
		} catch (e) {
			setError(e.toString());
		} finally {
			setLoading(false);
		}
	}, [getReviewTimes, dates]);

	const fetchGroups = useCallback(async () => {
		try {
			setLoading(true);
			const r = await getPRByGroup(dates);
			setResponse(r.data);
		} catch (e) {
			setError(e.toString());
		} finally {
			setLoading(false);
		}
	}, [getPRByGroup, dates]);

	useEffect(() => {
		if (tab === '1') {
			fetchReviewTime();
		}
		if (tab === '2') {
			fetchGroups();
		}
	}, [dates, tab, fetchReviewTime, fetchGroups]);
	return { chartData, loading, error };
};
export default useFetch;
