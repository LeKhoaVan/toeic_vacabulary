import Button from "../../components/Button";
import "./home.css";

export default function Home() {

    return (
        <div className="homeContainer">
            <div className="homeContent">
                <p className="listName">Danh Sách 23</p>
                <p className="defineVocabulary">Định Nghĩa: a person or company that takes messages, letters, or parcels from one person or place to another</p>
                <p className="synonymousVocabulary">Đồng Nghĩa: despatcher, deliveryman</p>
                <p className="transcriptionVocabular">/ˈkʊr.i.ər/</p>

                <input className="vocabularyInput" />

                <div className="buttonGround">
                    <Button title="Xem Phiên Âm" typeButton="PhienAm" />

                    <Button title="Xem Đáp Án" typeButton="XemDapAn" />
                </div>

                <p className="key">Enter để kiểm tra, / để xem phiên âm</p>

                <div className="pageNumberGroup">
                    <Button title="< Câu trước" typeButton="changeVocabular" />
                    <p className="pageNumer">55/55</p>
                    <Button title="Câu sau >" typeButton="changeVocabular" />
                </div>
            </div>
        </div>
    )
}
