import classNames from "classnames/bind";
import style from "./Menu.module.scss";

import Button from "~/components/Button";

const cx = classNames.bind(style);
function MenuItem({ data, onClick }) {
    const classes = cx("menu-item", {
        separate: data.separate,
    });

    return (
        <Button
            className={classes}
            title={data.title}
            to={data.to}
            href={data.href}
            lefticon={data.icon}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
