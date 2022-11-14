import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Progress from "../../components/Progress/Progress"
import Chart from "../../components/chart/Chart"
import Table from "../../components/table/Table"

import "./home.scss"

const Home = () => {
	return (
		<div className="home">
			<Sidebar />
			<div className="home-container">
				<Navbar />
				<div className="widgets">
					<Widget type="user" progress="positive" />
					<Widget type="order" progress="negative" />
					<Widget type="earning" progress="positive" />
					<Widget type="balance" progress="negative" />
				</div>
				<div className="stats-wrapper">
					<Progress />
					<Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
				</div>
				<div className="list-wrapper">
					<div className="title">Latest Transactions</div>
					<Table />
				</div>
			</div>
		</div>
	)
}

export default Home
