import "./button.css";

export default function Button({ ...prop }) {
    let { title, color, bg, handleOnClick } = prop;

    return (
        <div
            className={`inline rounded ${bg} ${color ? 'text-' + color : "text-white"} pt-3 pb-3 pl-2 pr-2 mt-2 text-sm font-medium transform hover:scale-105 cursor-pointer`}
            onClick={handleOnClick}
        >
            {title}
        </div>
    )
}