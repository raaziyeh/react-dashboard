import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined"
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined"
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined"
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined"
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined"
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined"
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined"
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined"
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined"
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined"
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { DarkModeContext } from "../../context/darkMode"
import "./sidebar.scss"

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext)
	return (
		<div className="sidebar">
			<div className="top">
				<Link to="/">
					<span className="logo">LOGO</span>
				</Link>
			</div>
			<hr />
			<div className="center">
				<ul>
					<p className="title">MAIN</p>
					<Link to="/">
						<li>
							<GridViewOutlinedIcon className="icon" />
							<span>Dashboard</span>
						</li>
					</Link>

					<p className="title">LISTS</p>
					<li>
						<Link to="/users">
							<GroupOutlinedIcon className="icon" />
							<span>Users</span>
						</Link>
					</li>
					<li>
						<Link to="/products">
							<Inventory2OutlinedIcon className="icon" />
							<span>Products</span>
						</Link>
					</li>
					<li>
						<ViewStreamOutlinedIcon className="icon" />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingOutlinedIcon className="icon" />
						<span>Delivery</span>
					</li>
					<p className="title">USEFUL</p>
					<li>
						<QueryStatsOutlinedIcon className="icon" />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsOutlinedIcon className="icon" />
						<span>Notifications</span>
					</li>
					<p className="title">SERVICE</p>
					<li>
						<MonitorHeartOutlinedIcon className="icon" />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyOutlinedIcon className="icon" />
						<span>Logs</span>
					</li>
					<li>
						<SettingsOutlinedIcon className="icon" />
						<span>Settings</span>
					</li>
					<p className="title">USER</p>
					<li>
						<AccountCircleOutlinedIcon className="icon" />
						<span>Profile</span>
					</li>
					<li>
						<ExitToAppOutlinedIcon className="icon" />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className="bottom">
				<div
					className="color-option"
					onClick={() => dispatch({ type: "light" })}
				></div>
				<div
					className="color-option"
					onClick={() => dispatch({ type: "dark" })}
				></div>
			</div>
		</div>
	)
}

export default Sidebar
