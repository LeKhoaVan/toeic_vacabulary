import CardVocabulary from "../../components/CardVocabulary";

export default function LearnCardVocablury() {


    return (
        <div className="w-full bg-white flex justify-center items-center">
            <div className="w-[80%] mr-auto ml-auto mt-10 mb-16">
                <div className="underline text-blue-600 mt-3 p-2 cursor-pointer">{"<--- Quay lại danh sách từ vựng"}</div>
                <CardVocabulary />
            </div>
        </div>
    )
}