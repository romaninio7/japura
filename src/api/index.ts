import axios from 'axios';

// Creating API to fetch a SIREN data
export default axios.create({
	baseURL: 'https://api.athenian.co/v1/metrics/prs'
});
