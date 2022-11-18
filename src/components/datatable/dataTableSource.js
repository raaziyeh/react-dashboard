export const userColumns = [
	{ field: "id", headerName: "ID", width: 70 },
	{
		field: "username",
		headerName: "User",
		width: 230,
		renderCell: (params) => {
			return (
				<div className="image-cell">
					<img className="img" src={params.row.img} alt="avatar" />
					{params.row.username}
				</div>
			)
		},
	},
	{ field: "email", headerName: "Email", width: 230 },
	{ field: "age", headerName: "Age", width: 100 },
	{
		field: "status",
		headerName: "Status",
		width: 150,
		renderCell: (params) => {
			return (
				<div className={`status ${params.row.status}`}>{params.row.status}</div>
			)
		},
	},
]

//temporary data
export const userRows = [
	{
		id: 1,
		username: "John Snow",
		img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
		status: "active",
		email: "johnsnow@gmail.com",
		age: 35,
	},
	{
		id: 2,
		username: "Jamie Lannister",
		img: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=600",
		email: "jamielannister@gmail.com",
		status: "passive",
		age: 42,
	},
	{
		id: 3,
		username: "Jane Miller",
		img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
		email: "janemiller@gmail.com",
		status: "pending",
		age: 45,
	},
	{
		id: 4,
		username: "David Stark",
		img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600",
		email: "davidstark@gmail.com",
		status: "active",
		age: 31,
	},
	{
		id: 5,
		username: "Ella Targaryen",
		img: "https://images.pexels.com/photos/38554/girl-people-landscape-sun-38554.jpeg?auto=compress&cs=tinysrgb&w=600",
		email: "ellatarga@gmail.com",
		status: "passive",
		age: 42,
	},
	{
		id: 6,
		username: "Salman Kara",
		img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
		email: "salmankara@gmail.com",
		status: "active",
		age: 27,
	},
	{
		id: 7,
		username: "Leyla Rahimi",
		img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
		email: "leylarahimi@gmail.com",
		status: "passive",
		age: 44,
	},
	{
		id: 8,
		username: "Matt Brown",
		img: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=600",
		email: "mattbrown@gmail.com",
		status: "active",
		age: 36,
	},
	{
		id: 9,
		username: "Roxie Thomas",
		img: "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=600",
		email: "roxirthomas@gmail.com",
		status: "pending",
		age: 30,
	},
	{
		id: 10,
		username: "Bryan Blue",
		img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600",
		email: "bryanblue@gmail.com",
		status: "active",
		age: 65,
	},
]
