import classNames from "classnames/bind";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import style from "./Button.module.scss";
import React from "react";
const cx = classNames.bind(style);

const Button = React.forwardRef(
    (
        {
            className,
            to, // Sử dụng cho route nội bộ
            href, // Sử dụng cho liên kết ngoài
            title,
            primary = false,
            outline = false,
            onlyicon,
            text = false,
            disable = false,
            rounded = false,
            textborder = false,
            small = false,
            large = false,
            children,
            lefticon,
            righticon,
            onClick,
            ...passProps
        },
        ref,
    ) => {
        let Component = "button"; // Mặc định là thẻ button
        const props = {
            onClick,
            ...passProps,
        };

        // Nếu có `to`, sử dụng `Link` cho các route nội bộ
        if (to) {
            props.to = to;
            Component = Link; // Thay thế bằng thẻ Link
        }
        // Nếu có `href`, sử dụng thẻ `<a>` cho liên kết ngoài
        else if (href) {
            props.href = href;
            Component = "a"; // Render thẻ a cho các liên kết ngoài
        } else {
            Component = "button";
        }

        if (disable) {
            delete props.onClick; // Xoá onClick khi button bị disable
        }

        const classes = cx("wrapper", {
            [className]: className,
            primary,
            outline,
            onlyicon,
            text,
            rounded,
            disable,
            textborder,
            small,
            large,
        });

        props.className = classes;

        return (
            <Component {...props} ref={ref}>
                {lefticon && <span className={cx("icon")}>{lefticon}</span>}
                <span className={cx("title")}>{children}</span>
                {righticon && <span className={cx("icon")}>{righticon}</span>}
            </Component>
        );
    },
);

export default Button;
