import './PicsCard.css'

const PicsCard = ({ className }) => {
    return (
        
        <div className={`pic-container ${className}`}>
           <div className="imagem"></div>
           <div className="footer-pic">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
            </div> 
        </div>
    )
}

export default PicsCard;