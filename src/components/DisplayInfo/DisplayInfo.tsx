import './DisplayInfo.css'


export const DisplayInfo = ({ info }: { info: string }) => {
    return (
        <div className="displayInfoContainer">{info}</div>
    )
}
