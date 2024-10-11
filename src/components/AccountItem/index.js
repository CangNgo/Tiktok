import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import style from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "~/components/Image";

const cx = classNames.bind(style);
function AccountItem({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
            <div className={cx("avatar")}>
                <Image src={data.avatar} alt="Kết quả tìm kiếm" />
            </div>
            <div className={cx("content")}>
                <div className={cx("info")}>
                    <div className={cx("name flex items-center ")}>
                        <h4>{data.full_name}</h4>
                        {data.tick && (
                            <FontAwesomeIcon className={cx("checkIcon")} icon={faCheckCircle} />
                        )}
                    </div>
                    <span className={cx("username")}>{data.nickname}</span>
                </div>
            </div>
        </Link>
    );
}

export default AccountItem;
