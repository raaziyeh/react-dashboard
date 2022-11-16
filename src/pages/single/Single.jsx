import Navbar from "../../components/navbar/Navbar"
import PersonCard from "../../components/personCard/PersonCard"
import Sidebar from "../../components/sidebar/Sidebar"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"
import "./single.scss"

const Single = () => {
	//temporary
	const user = {
		firstName: "Jane",
		lastName: "Miller",
		email: "janemiller@gmail.com",
		phone: "+1 2345 67 89",
		address: "Elton St. 234 Garden Yd. NewYork",
		country: "USA",
		img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600",
		purchases: [
			{
				id: 1143155,
				product: "Acer Nitro 5",
				img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
				customer: "Jane Miller",
				date: "1 March",
				amount: 785,
				method: "Cash on Delivery",
				status: "Approved",
			},
			{
				id: 2235235,
				product: "Playstation 5",
				img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
				customer: "Jane Miller",
				date: "1 March",
				amount: 900,
				method: "Online Payment",
				status: "Pending",
			},
			{
				id: 2342353,
				product: "Redragon S101",
				img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
				customer: "Jane Miller",
				date: "1 March",
				amount: 35,
				method: "Cash on Delivery",
				status: "Pending",
			},
			{
				id: 2357741,
				product: "Razer Blade 15",
				img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
				customer: "Jane Miller",
				date: "1 March",
				amount: 920,
				method: "Online",
				status: "Approved",
			},
			{
				id: 2342355,
				product: "ASUS ROG Strix",
				img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
				customer: "Jane Miller",
				date: "1 March",
				amount: 2000,
				method: "Online",
				status: "Pending",
			},
		],
	}

	return (
		<div className="single">
			<Sidebar />
			<div className="single-container">
				<Navbar />
				<div className="top">
					<div className="single-card">
						<PersonCard person={user} />
					</div>
					<div className="single-chart">
						<Chart title="User Spending (Last 6 Months)" aspect={3 / 1} />
					</div>
				</div>
				<div className="bottom">
					<div className="list-wrapper">
						<div className="title">Latest Transactions</div>
						<Table rows={user.purchases} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Single
