import Datatable from "../../components/datatable/Datatable"
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import "./list.scss"

const List = (props) => {
	return (
		<div className="list">
			<Sidebar />
			<div className="list-container">
				<Navbar />
				<Datatable type={props.type}/>
			</div>
		</div>
	)
}

export default List
