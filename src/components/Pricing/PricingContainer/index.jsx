import PricingCard from "../PricingCard"
import './PricingContainer.css'

const PricingContainer = () => {

   const Plans = [{ title: 'Básico', text: 'Plano inicial para sites simples', value: 'R$21' },
   { title: 'Intermediário', text: 'Plano com mais recursos', value: 'R$ 399' },
    { title: 'Avançado', text: 'Plano completo para negócios', value: 'R$ 599' }]
    
    return (
        <div className="pricing-setion-container">
            {Plans.map((plan, index) => (
                <PricingCard key={index} props={plan}/>
            ))}
        </div>
    )
}

export default PricingContainer;