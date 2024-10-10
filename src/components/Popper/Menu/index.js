import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import style from "./Menu.module.scss";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";
const cx = classNames.bind(style);
const defauleFn = () => {};

function Menu({ children, items = [], onChange = defauleFn }) {
    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    return (
        <Tippy
            visible
            delay={[0, 700]}
            interactive
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx("menu-popper")}>
                        {history.length > 1 && (
                            <Header
                                title={"Language"}
                                onBack={() => {
                                    return setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            ></Header>
                        )}
                        {renderItem()}
                    </PopperWrapper>
                </div>
            )}
            onHidden={() =>
                setHistory((prev) => {
                    return prev.slice(0, 1);
                })
            }
        >
            {children}
        </Tippy>
    );
}

export default Menu;
