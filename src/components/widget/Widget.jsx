import PersonOutlineIcon from "@mui/icons-material/PersonOutline"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined"
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined"
import "./widget.scss"

const Widget = (props) => {
	let data

	// temporary
	const amount = 100
	const diff = 20

	switch (props.type) {
		case "user":
			data = {
				title: "USERS",
				isMoney: false,
				link: "View all users",
				icon: (
					<PersonOutlineIcon
						className="icon"
						style={{
							color: "#DC143C",
							backgroundColor: "#FFCCCC",
						}}
					/>
				),
			}
			break
		case "order":
			data = {
				title: "ORDERS",
				isMoney: false,
				link: "See all orders",
				icon: (
					<ShoppingCartOutlinedIcon
						className="icon"
						style={{
							color: "#E5C062",
							backgroundColor: "#F8EDD2",
						}}
					/>
				),
			}
			break
		case "earning":
			data = {
				title: "EARNINGS",
				isMoney: true,
				link: "View net earnings",
				icon: (
					<PaidOutlinedIcon
						className="icon"
						style={{
							color: "#008000",
							backgroundColor: "#CCE6CC",
						}}
					/>
				),
			}
			break
		case "balance":
			data = {
				title: "BALANCE",
				isMoney: true,
				link: "See details",
				icon: (
					<AccountBalanceWalletOutlinedIcon
						className="icon"
						style={{
							color: "#800080",
							backgroundColor: "#E6CCE6",
						}}
					/>
				),
			}
			break
		default:
			break
	}
	return (
		<div className="widget">
			<div className="left">
				<span className="title">{data.title}</span>
				<span className="amount">
					{data.isMoney && "$"} {amount}
				</span>
				<span className="link">{data.link}</span>
			</div>
			<div className="right">
				<div className={`percentage ${props.progress}`}>
					{props.progress === "positive" && (
						<KeyboardArrowUpOutlinedIcon className="icon" />
					)}
					{props.progress === "negative" && (
						<KeyboardArrowDownOutlinedIcon className="icon" />
					)}
					{diff} %
				</div>
				{data.icon}
			</div>
		</div>
	)
}

export default Widget
