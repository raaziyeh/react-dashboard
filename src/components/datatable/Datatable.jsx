import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"
import { userColumns, userRows } from "../../dataTableSource"
import "./datatable.scss"

const Datatable = () => {
	const actionColumn = [
		{
			field: "action",
			headerName: "Action",
			width: 200,
			renderCell: () => {
				return (
					<div className="action-cell">
						<button className="view-btn">View</button>
						<button className="del-btn">Delete</button>
					</div>
				)
			},
		},
	]
	const columns: GridColDef[] = userColumns.concat(actionColumn)
	const rows = userRows

	return (
		<div className="data-table">
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[8]}
				checkboxSelection
			/>
		</div>
	)
}

export default Datatable
