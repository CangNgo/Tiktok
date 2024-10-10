import classNames from "classnames/bind";
import style from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEllipsis } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(style);
function AccountItem() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("avatar")}>
                <img
                    src="https://img-cache.coccoc.com/image2?i=2&l=50/1030590614"
                    alt="Hình ảnh của Bích Liên"
                />
            </div>
            <div className={cx("content")}>
                <div className={cx("info")}>
                    <div className={cx("name d-flex align-items-center")}>
                        <h4>Nguyễn Thị Bích Liên</h4>
                        <FontAwesomeIcon className={cx("checkIcon")} icon={faCheckCircle} />
                    </div>
                    <span className={cx("username")}>@BichLien</span>
                </div>
            </div>
        </div>
    );
}

export default AccountItem;
