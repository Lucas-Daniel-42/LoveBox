import './Button.css'

const Button = ({content, className, to}) => {
    return (
        <a href={to} className={className}>{content}</a>
    )
}

export default Button;