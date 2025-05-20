import Button from '../../Button';
import './PricingCard.css'


const PricingCard = ({ props, className }) => {
    return (
        <div className={`pricing-card-container ${className}`}>
            <span className="pricing-title">{props.title}</span>
            <p className="pricing-text">{props.text}</p>
            <h4 className="pricing-value">{props.value}</h4>
            <Button content="Criar nosso site" />
        </div>
    )
}

export default PricingCard;