import { useState } from "react"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import UploadFileIcon from "@mui/icons-material/UploadFile"
import { newUserInputs, newProductInputs } from "./inputsSource"
import "./new.scss"

const New = (props) => {
	const [imgFile, setImgFile] = useState()

	let title
	let inputFields = []
	if (props.type === "user") {
		inputFields = newUserInputs
		title = "Add New User"
	} else if (props.type === "product") {
		inputFields = newProductInputs
		title = "Add New Product"
	}

	return (
		<div className="new">
			<Sidebar />
			<div className="new-container">
				<Navbar />
				<div className="top">
					<h1> {title}</h1>
				</div>
				<div className="bottom">
					<div className="left">
						<img
							alt=""
							src={
								imgFile
									? URL.createObjectURL(imgFile)
									: "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
							}
						/>
					</div>
					<div className="right">
						<form className="form">
							<div className="formInput">
								<label htmlFor="image">
									Image: <UploadFileIcon className="icon" />
								</label>
								<input
									type="file"
									id="image"
									style={{ display: "none" }}
									onChange={(e) => setImgFile(e.target.files[0])}
								/>
							</div>
							{inputFields.map((input) => {
								return (
									<div className="formInput">
										<label htmlFor="username">{input.label}</label>
										<input
											type={input.type}
											placeholder={input.placeholder}
											id={input.id}
											key={input.key}
										/>
									</div>
								)
							})}
							<button>Send</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default New
