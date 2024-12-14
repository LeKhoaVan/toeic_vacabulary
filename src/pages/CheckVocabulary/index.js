import Button from "../../components/Button";
import "./CheckVocabulary.css";

export default function CheckVocabulary() {


    return (
        <div className="checkPageContainer">
            <div className="checkPageContent">
                <div className="w-full flex flex-wrap justify-between items-center pb-8 font-bold">
                    <p className="flex flex-wrap text-2xl">Danh Sách 23</p>
                    <p className="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-1 text-red-500 hover:scale-125 cursor-pointer ">X</p>
                </div>

                <p className="defineVocabulary">Định Nghĩa: a person or company that takes messages, letters, or parcels from one person or place to another</p>
                <p className="synonymousVocabulary">Đồng Nghĩa: despatcher, deliveryman</p>
                <p className="transcriptionVocabular">/ˈkʊr.i.ər/</p>

                <input className="vocabularyInput" />

                <div className="buttonGround">
                    <Button title="Xem Phiên Âm" bg="bg-[#1044b4]" />

                    <Button title="Xem Đáp Án" bg="bg-[#20a30f]" />
                </div>

                <p className="key">Enter để kiểm tra, / để xem phiên âm</p>

                <div className="pageNumberGroup">
                    <Button title="< Câu trước" bg="bg-[#d3d3d3]" color="black" />
                    <p className="pageNumer">55/55</p>
                    <Button title="Câu sau >" bg="bg-[#d3d3d3]" color="black" />
                </div>
            </div>
        </div>
    )
}