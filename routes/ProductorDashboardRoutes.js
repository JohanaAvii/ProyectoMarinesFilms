import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/productor'
	},
	{
		id: uuid(),
		title: 'Listar Peliculas',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'Peliculas',
		icon: 'movie',
		children: [
			{ id: uuid(), link: 'productor/pages/list-movies', name: 'Listar Peliculas' },
		]
	},	
	
];


export default DashboardMenu;
