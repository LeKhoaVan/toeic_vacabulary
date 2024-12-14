import { useNavigate } from "react-router-dom";
import Button from "../Button";

export default function Card() {

    const navigate = useNavigate();

    const handleClickPractice = (listId) => {
        navigate("/check-vocabalury");
        console.log(listId);
    }

    const handleClickSee = (listId) => {
        navigate("/see-all-vocabulary");
        console.log(listId);
    }

    return (
        <div className="group overflow-hidden w-[30%] mt-5 mb-5 border-2">
            <img
                src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                alt=""
                className="h-64 object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />

            <div className=" border border-gray-100 bg-white p-6">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span>

                <h3 className="mt-4 text-lg font-medium text-gray-900">Danh sách 01</h3>

                <p className="mt-1.5 text-sm text-gray-700">Số từ vựng: 55</p>

                <form className="mt-4 text-center flex flex-wrap">
                    <Button title=" Luyện tập" bg="bg-[#20a30f]" handleOnClick={() => handleClickPractice(22)} />

                    <Button title="Xem định nghĩa" bg="bg-[#1044b4]" handleOnClick={() => handleClickSee(21)} />
                </form>
            </div>
        </div>
    )
}