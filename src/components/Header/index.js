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
    }, [location.pathname])

    return (
        <div className="headerContainer">
            <div className="headerContent">
                <div className="logo">
                    <img src="logo.webp" alt="logo" />
                </div>

                <div className="headerMenu">
                    <ul>
                        <li>
                            <div className={selectPage === "/" ? "active" : ""} onClick={() => handleClick("/")}>Trang Chủ</div>
                        </li>
                        <li>
                            <div className={selectPage === "/list-vocabalury" ? "active" : ""} onClick={() => handleClick("/list-vocabalury")}>Danh Sách Từ Vựng</div>
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