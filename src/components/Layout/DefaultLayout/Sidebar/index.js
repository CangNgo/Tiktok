import style from "./Sidebar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function SideBar() {
    return (
        <aside className={cx("wrapper")}>
            <h2>Sidebar</h2>
        </aside>
    );
}

export default SideBar;
