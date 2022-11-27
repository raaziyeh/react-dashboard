import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined"
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined"

import { useContext } from "react"
import { DarkModeContext } from "../../context/darkMode"
import "./navbar.scss"

const Navbar = () => {
	const { darkMode, dispatch } = useContext(DarkModeContext)
	return (
		<div className="navbar">
			<div className="more">
				<MoreVertOutlinedIcon className="more-icon" />
			</div>
			<div className="wrapper">
				<div className="search">
					<input type="text" placeholder="Search..." className="search-input" />
					<SearchOutlinedIcon />
				</div>
				<div className="items">
					<div className="lang">
						<div className="item">
							<LanguageOutlinedIcon className="icon" />
							<span className="lang-choice">English</span>
						</div>
					</div>
					<div className="darkmode-choice">
						<div className="item">
							{!darkMode && (
								<DarkModeOutlinedIcon
									className="icon"
									onClick={() => dispatch({ type: "toggle" })}
								/>
							)}
							{darkMode && (
								<LightModeOutlinedIcon
									className="icon"
									onClick={() => dispatch({ type: "toggle" })}
								/>
							)}
						</div>
					</div>
					<div className="fullscreen">
						<div className="item">
							<FullscreenExitOutlinedIcon className="icon" />
						</div>
					</div>
					<div className="mini-search">
						<input
							type="text"
							placeholder="Search..."
							className="search-input"
						/>
						<SearchOutlinedIcon className="icon" />
					</div>
					<div className="item notif">
						<NotificationsNoneOutlinedIcon className="icon" />
						<div className="counter">3</div>
					</div>
					<div className="item notif">
						<ChatBubbleOutlineOutlinedIcon className="icon" />
						<div className="counter">2</div>
					</div>
					<div className="avatar-item">
						<div className="item">
							<img
								src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
								alt=""
								className="avatar"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
