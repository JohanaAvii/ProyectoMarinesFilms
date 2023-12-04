import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/admin'
	},
	{
		id: uuid(),
		title: 'Gestionar Usuario',
		grouptitle: true
	},
	
	{
		id: uuid(),
		title: 'Usuarios',
		icon: 'user',
		children: [
			{ id: uuid(), link: '/admin/pages/user/add-user', name: 'Agregar Usuario' },
			{ id: uuid(), link: '/admin/pages/user/consult-user', name: 'Consultar Usuario' },
			
		]
	},	

	{
		id: uuid(),
		title: 'Gestionar Pelicula',
		grouptitle: true
	},	
	{
		id: uuid(),
		title: 'Pelicula',
		icon: 'film',
		children: [
			{ id: uuid(), link: '/admin/pages/movie/add', name: 'Cargar pelicula'},
			{ id: uuid(), link: '/admin/pages/movie/consultar', name: 'Consultar pelicula'},
			
		
		]
	},	
	
	{
		id: uuid(),
		title: 'Gestionar solicitud',
		grouptitle: true
	},
	{
		id: uuid(),
		title: 'Solicitud',
		icon: 'book',
		children: [
			
			{ id: uuid(), link: '/admin/pages/solicitud', name: 'Consultar Solicitud' },
			
			
		]
	},
	


	
];


export default DashboardMenu;
