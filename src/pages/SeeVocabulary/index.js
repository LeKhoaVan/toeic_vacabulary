import VocabularyItem from "../../components/VocabularyItem";

export default function SeeVocabulary() {

    const arr = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[80%] mr-auto ml-auto">
                <div className="underline text-blue-600 mt-3 p-2 cursor-pointer">{"<--- Quay lại danh sách từ vựng"}</div>
                {arr.map((item, index) => (
                    <VocabularyItem key={index} />
                ))}
            </div>
        </div>
    )
}