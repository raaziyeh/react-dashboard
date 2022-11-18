import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { userColumns, userRows } from "./dataTableSource"
import { Link } from "react-router-dom"
import { useState } from "react"
import "./datatable.scss"

const Datatable = (props) => {
	const [rows, setRows] = useState(userRows)
	let title, newPath

	if (props.type === "user") {
		title = "Users List"
		newPath = "/users/new"
	} else if (props.type === "product") {
		title = "Products List"
		newPath = "/products/new"
	}

	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="action-cell">
						<Link to="/users/test">
							<button className="view-btn">View</button>
						</Link>
						<button className="del-btn" onClick={() => {
							setRows(rows => rows.filter(row => row.id !== params.row.id))
						}}>Delete</button>
					</div>
				)
			},
		},
	]
	const columns: GridColDef[] = userColumns.concat(actionColumn)
	
	return (
		<>
			<div className="new-item-container">
				<div className="new-item">
					<span>{title}</span>
					<Link to={newPath}> Add New </Link>
				</div>
			</div>
			<div className="data-table">
				<DataGrid
					className="data-grid"
					rows={rows}
					columns={columns}
					pageSize={8}
					rowsPerPageOptions={[8]}
					checkboxSelection
				/>
			</div>
		</>
	)
}

export default Datatable
