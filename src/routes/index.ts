export type topCacildisType = {
	tag: string;
	image: string;
}[];

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
	let topCacildis = [
		{ tag: 'pindureta', image: 'highlight-01.png' },
		{ tag: 'bolis quadradis', image: 'highlight-02.png' },
		{ tag: 'sapiens', image: 'highlight-03.png' }
	];

	let divoltis = [
		{
			title: 'consetis',
			subtitle: 'Manduma pindureta quium dia nois paga. Sapien in monti palavris',
			image: 'divoltis-porris-01.png'
		},
		{
			title: 'aenan',
			subtitle: 'Pellentesque laoreet mé vel lectus scelerique',
			image: 'divoltis-porris-02.png'
		},
		{
			title: 'matis',
			subtitle: 'Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.',
			image: 'divoltis-porris-03.png'
		},
		{
			title: 'divinis',
			subtitle: 'Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis',
			image: 'divoltis-porris-04.png'
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
					image: 'se_pirulita-01.png'
				},
				{
					title: 'gostis',
					description: 'aenean ut ante turpis. pellentesque laoreet mé',
					image: 'se_pirulita-02.png'
				}
			]
		},
		{
			title: 'suco de cavadiss',
			articles: [
				{
					title: 'interagi',
					description: 'é um leite divinis qui tem lupuliz, matis, aguis e fermentis',
					image: 'suco_de_cevadiss-01.png'
				},
				{
					title: 'gostis',
					description: 'aenean ut ante turpis. pellentesque laoreet mé',
					image: 'suco_de_cevadiss-02.png'
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
