import './ConventerInput.css'

export const ConventerInput = ({ onChangeHandler }: { onChangeHandler: React.ChangeEventHandler<HTMLInputElement> }) => {
    return (
        <input type='text' className="conventerInput" onChange={onChangeHandler} />
    )
}
