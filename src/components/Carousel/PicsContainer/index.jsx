import PicsCard from "../PicsCard"
import './PicsContainer.css'

const PicsContainer = () => {
    return (
        <div className="container">
        <h2>Avaliações</h2>
        <div className="pics-container">
        <PicsCard className="card-1" />
        <PicsCard className="card-2" />
        <PicsCard className="card-3" />
        <PicsCard className="card-4" />
        <PicsCard className="card-5" />
        </div>
        </div>
    )
}

export default PicsContainer;