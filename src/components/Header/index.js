import { useEffect, useState } from "react";
import "./header.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();
    const [selectPage, setSelectPage] = useState("")

    const location = useLocation();

    const handleClick = (page) => {
        navigate(page);
    }

    useEffect(() => {
        const setMenu = () => {
            setSelectPage(location.pathname)
        };

        setMenu();
    }, [location.pathname]);

    const handleClickLogo = () => {
        navigate("/")
    }

    return (
        <div className="headerContainer">
            <div className="headerContent">
                <div className="logo cursor-pointer" onClick={handleClickLogo}>
                    <img src="logoWebsiteLearnToeicVocabulary.png" alt="logo" />
                </div>

                <div className="headerMenu">
                    <ul>
                        <li>
                            <div className={selectPage === "/" ? "active" : ""} onClick={() => handleClick("/")}>Trang Chủ</div>
                        </li>
                        <li>
                            <div className={["/list-vocabalury", "/check-vocabalury", "/see-all-vocabulary"].includes(selectPage) ? "active" : ""} onClick={() => handleClick("/list-vocabalury")}>Danh Sách Từ Vựng</div>
                        </li>
                        <li>
                            <div className={selectPage === "/learned-vocabalury" ? "active" : ""} onClick={() => handleClick("/learned-vocabalury")}>Từ Vựng Đã Học</div>
                        </li>
                        <li>Tài Khoản</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}