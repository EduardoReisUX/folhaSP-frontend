export type topCacildisType = string[];

export type divoltisType = {
	title: string;
	subtitle: string;
	image: string;
}[];

export type paisisFilhisType = string[];

export type sePirulitaType = {
	title: string;
	articles: {
		title: string;
		description: string;
		image: string;
	}[];
}[];

export function get() {
	let topCacildis = ['pindureta', 'bolis quadradis', 'sapiens'];

	let divoltis = [
		{
			title: 'consetis',
			subtitle: 'Manduma pindureta quium dia nois paga. Sapien in monti palavris',
			image: ''
		},
		{
			title: 'aenan',
			subtitle: 'Pellentesque laoreet mé vel lectus scelerique',
			image: ''
		},
		{
			title: 'matis',
			subtitle: 'Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.',
			image: ''
		},
		{
			title: 'divinis',
			subtitle: 'Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis',
			image: ''
		}
	];

	let paisisFilhis = [
		'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscing elitis',
		'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscing elitis',
		'Mussum ipsum cacilds, vidis litro abertis.',
		'Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscing elitis',
		'Mussum ipsum cacilds, vidis litro abertis.'
	];

	let sePirulita = [
		{
			title: 'se pirulitá',
			articles: [
				{
					title: 'nam liber',
					description: 'casamentiss faiz malandris se pirulitá',
					image: 'a'
				},
				{
					title: 'gostis',
					description: 'aenean ut ante turpis. pellentesque laoreet mé',
					image: 'a'
				}
			]
		},
		{
			title: 'suco de cavadiss',
			articles: [
				{
					title: 'interagi',
					description: 'é um leite divinis qui tem lupuliz, matis, aguis e fermentis',
					image: 'a'
				},
				{
					title: 'gostis',
					description: 'aenean ut ante turpis. pellentesque laoreet mé',
					image: 'a'
				}
			]
		}
	];

	return {
		body: {
			topCacildis,
			divoltis,
			paisisFilhis,
			sePirulita
		}
	};
}
