import "./home.css";

export default function Home() {

    return (
        <div className="relative bg-cover bg-center w-full h-[80vh] flex flex-col justify-center items-center"
            style={{
                backgroundImage: `url('/background.jpg')`,
            }}
        >
            <div className="absolute inset-0 bg-black opacity-60"></div>

            <div className="relative z-10 flex justify-center items-center ">
                <img className="w-[20%] object-cover rounded-[9px]" src="/logoWebsiteLearnToeicVocabulary.png" alt="logo" />
            </div>

            <div className="relative z-10 w-[80%] ml-auto mr-auto p-[20px] text-white font-bold text-[25px]">
                <p className="pt-6 pb-6">Chào mừng bạn đến với WebSite học từ vựng tiếng anh với hơn 1000 từ phổ biến trong đề thi Toeic</p>

                <p className="">Hy vọng bạn có trải nghiệm thú vị và học được nhiều từ vựng mới!</p>
            </div>
        </div>
    )
}
