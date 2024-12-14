import Card from "../../components/Card";
import "./listVocabalury.css";

export default function ListVocabalury() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    return (
        <div className="w-[80%] ml-auto mr-auto flex flex-row justify-evenly items-start flex-wrap">
            {arr.map((value, index) => (
                <Card key={index} />
            ))}
        </div>
    )
}



