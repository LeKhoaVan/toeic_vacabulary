import "./button.css";

export default function Button({ ...prop }) {
    let { title, color, bg, handleOnClick } = prop;

    return (
        <div
            className={`inline rounded ${bg} text-white ${color && 'text-' + color} pt-3 pb-3 pr-2 pl-2 text-sm font-medium transform hover:scale-105 ml-4 mr-4 cursor-pointer`}
            onClick={handleOnClick}
        >
            {title}
        </div>
    )
}