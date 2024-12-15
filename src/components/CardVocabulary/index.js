import { useState } from "react"
import refresh from "../../assets/images/refresh.png"
import "./cardVocabulary.css";

export default function CardVocabulary() {

    const [stateCard, setStateCard] = useState(false);

    const fontCard = (
        <div className="backface-hidden">
            <div className="">List 01</div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row text-3xl font-bold">
                    <p>renovation</p>
                    <p className="ml-5">(n)</p>
                </div>
                <p className="mb-4 font-bold flex justify-start items-start">/ˌren.əˈveɪ.ʃən/</p>
                <p className="flex flex-wrap">Example: The museum is closed for renovation.</p>
            </div>
            <div className="w-full flex flex-row justify-end items-end p-3" >
                <img src={refresh} alt="icon" className="w-[3%]" />
            </div>
        </div>
    )

    const backCard = (
        <div className="w-full">
            <p>= the act or process of repairing and improving something, especially a building</p>
            <p>= cải tạo</p>
        </div>
    )

    const handleClickCard = () => {
        setStateCard(!stateCard);
    }

    return (
        <div
            className="relative w-[80%] h-[250px] shadow-2xl border-[1px] rounded-md border-black border-b-4 p-4 bg-white cursor-pointer perspective-1000"
            onClick={handleClickCard}
        >
            <div
                className={`w-full h-full transition-transform duration-1000 transform-style-preserve-3d ${stateCard ? "rotate-y-180" : ""
                    }`}
            >
                <div
                    className="absolute backface-hidden w-full h-full flex items-center justify-center bg-white rounded-md"
                >
                    {fontCard}
                </div>

                <div
                    className="absolute backface-hidden rotate-y-180 w-full h-full flex items-center justify-center bg-gray-200 rounded-md"
                >
                    {backCard}
                </div>
            </div>
        </div>

    )
}