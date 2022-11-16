import "./personCard.scss"

const PersonCard = ({ person }) => {
	return (
		<div className="person-card">
			<div className="person-card-edit">
				<span>Edit</span>
			</div>
			<div className="person-card-title">
				<span>Information</span>
			</div>
			<div className="card-details">
				<div className="img">
					<img src={person.img} target="_blank" alt="avatar" />
				</div>

				<div className="information">
					<h2>{`${person.firstName} ${person.lastName}`}</h2>
					<div className="info-item">
						<span>Email: </span>
						{person.email}
					</div>
					<div className="info-item">
						<span>Phone: </span>
						{person.phone}
					</div>
					<div className="info-item">
						<span>Address: </span>
						{person.address}
					</div>
					<div className="info-item">
						<span>Country: </span>
						{person.country}
					</div>
				</div>
			</div>
		</div>
	)
}

export default PersonCard
