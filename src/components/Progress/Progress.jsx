import MoreVertIcon from "@mui/icons-material/MoreVert"
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import { CircularProgressbar } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import "./progress.scss"

const Progress = () => {
	//temporary
	const progressAmountDetail = 12.4
	const todayTotal = 420
	const percentage = 76

	return (
		<div className="progress">
			<div className="top">
				<span className="title">Total Revenue</span>
				<MoreVertIcon className="icon" />
			</div>
			<div className="center">
				<div className="circular">
					<CircularProgressbar
						value={percentage}
						text={`${percentage}%`}
						strokeWidth={5}
					/>					
				</div>
				<p className="total">Total sales made today</p>
				<span className="sales">${todayTotal}</span>
				<p className="message">
					Previous transactions processing. Last payments may not be included.
				</p>
			</div>
			<div className="bottom">
				<div className="stats">
					<span>Target</span>
					<div className="details negative">
						<KeyboardArrowDownOutlinedIcon className="icon" />
						<span>${progressAmountDetail}k</span>
					</div>
				</div>
				<div className="stats">
					<span>Last Week</span>
					<div className="details positive">
						<KeyboardArrowUpOutlinedIcon className="icon" />
						<span>${progressAmountDetail}k</span>
					</div>
				</div>
				<div className="stats">
					<span>Last Month</span>
					<div className="details positive">
						<KeyboardArrowUpOutlinedIcon className="icon" />
						<span>${progressAmountDetail}k</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Progress
