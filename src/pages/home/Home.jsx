import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
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
			</div>
		</div>
	)
}

export default Home
