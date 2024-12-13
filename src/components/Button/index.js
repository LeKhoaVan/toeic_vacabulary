import "./button.css";

export default function Button({ ...prop }) {
    let { title, typeButton } = prop;

    return (
        <div className={`button ${typeButton}`}>
            {title}
        </div>
    )
}