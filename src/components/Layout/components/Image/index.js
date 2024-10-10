import classNames from "classnames/bind";
import style from "./Image.module.scss";

const cx = classNames.bind(style);

function Image() {
    return (
        <div>
            <img src="" className={cx("image")} alt="image temp" />
        </div>
    );
}

export default Image;
