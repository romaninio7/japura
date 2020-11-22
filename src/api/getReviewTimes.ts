import api from './index';

const getReviewTimes = (dates: [string, string]) => {
	return api.post('', {
		for: [
			{
				repositories: [
					'github.com/athenianco/athenian-api',
					'github.com/athenianco/athenian-webapp',
					'github.com/athenianco/infrastructure',
					'github.com/athenianco/metadata'
				]
			}
		],
		metrics: ['pr-review-time'],
		date_from: dates[0],
		date_to: dates[1],
		granularities: ['day'],
		exclude_inactive: true,
		account: 1,
		timezone: 60
	});
};

export default getReviewTimes;
