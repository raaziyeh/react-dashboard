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
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { DarkModeContext } from "../../context/darkMode"
import "./sidebar.scss"

const Sidebar = () => {
	const { dispatch } = useContext(DarkModeContext)
	const [showSidebar, setShowSidebar] = useState(true)

	window.addEventListener('resize', () => {
		if (window.innerWidth > 800) {
			setShowSidebar(true)
		} else {
			setShowSidebar(false)
		}
	})

	return (
		<div className="sidebar">
			<div className="logo-wrapper">
				<MoreVertOutlinedIcon
					className="more-icon"
					onClick={() => setShowSidebar((prev) => !prev)}
				/>
				<Link to="/">
					<span className="logo">LOGO</span>
				</Link>
			</div>
			<hr />
			{showSidebar && (
				<div className="sidebar-nav">
					<ul>
						<p className="title">MAIN</p>
						<Link to="/">
							<li>
								<GridViewOutlinedIcon className="icon" />
								<span className="action-title">Dashboard</span>
							</li>
						</Link>

						<p className="title">LISTS</p>
						<li>
							<Link to="/users">
								<GroupOutlinedIcon className="icon" />
								<span className="action-title">Users</span>
							</Link>
						</li>
						<li>
							<Link to="/products">
								<Inventory2OutlinedIcon className="icon" />
								<span className="action-title">Products</span>
							</Link>
						</li>
						<li>
							<ViewStreamOutlinedIcon className="icon" />
							<span className="action-title">Orders</span>
						</li>
						<li>
							<LocalShippingOutlinedIcon className="icon" />
							<span className="action-title">Delivery</span>
						</li>
						<p className="title">USEFUL</p>
						<li>
							<QueryStatsOutlinedIcon className="icon" />
							<span className="action-title">Stats</span>
						</li>
						<li>
							<NotificationsOutlinedIcon className="icon" />
							<span className="action-title">Notifications</span>
						</li>
						<p className="title">SERVICE</p>
						<li>
							<MonitorHeartOutlinedIcon className="icon" />
							<span className="action-title">System Health</span>
						</li>
						<li>
							<PsychologyOutlinedIcon className="icon" />
							<span className="action-title">Logs</span>
						</li>
						<li>
							<SettingsOutlinedIcon className="icon" />
							<span className="action-title">Settings</span>
						</li>
						<p className="title">USER</p>
						<li>
							<AccountCircleOutlinedIcon className="icon" />
							<span className="action-title">Profile</span>
						</li>
						<li>
							<ExitToAppOutlinedIcon className="icon" />
							<span className="action-title">Logout</span>
						</li>
					</ul>
					<div className="bottom-of-center">
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
			)}
		</div>
	)
}

export default Sidebar
