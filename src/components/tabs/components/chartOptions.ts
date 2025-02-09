export const chartLineOptions = {
	chart: {
		height: 350,
		type: 'line'
	},
	stroke: {
		width: 7,
		curve: 'smooth'
	},
	title: {
		align: 'left',
		style: {
			fontSize: '16px',
			color: '#666'
		}
	},
	fill: {
		type: 'gradient',
		gradient: {
			shade: 'dark',
			gradientToColors: ['#eb2f96'],
			shadeIntensity: 1,
			type: 'horizontal',
			opacityFrom: 1,
			opacityTo: 1,
			stops: [0, 100, 100, 100]
		}
	},
	markers: {
		size: 4,
		colors: ['#FFA41B'],
		strokeColors: '#fff',
		strokeWidth: 2,
		hover: {
			size: 7
		}
	},
	xaxis: {
		type: 'datetime'
	},
	tooltip: {
		x: {
			format: 'dd MMM yyyy'
		},
		fixed: {
			enabled: false,
			position: 'topRight'
		}
	}
};

export const chartBarOptions = {
	chart: {
		type: 'bar',
		height: 350
	},
	plotOptions: {
		bar: {
			vertical: true
		}
	},
	dataLabels: {
		enabled: false
	},
	xaxis: {
		categories: ['athenian-api', 'athenian-webapp', 'infrastructure', 'metadata']
	}
};
