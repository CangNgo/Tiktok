import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faPlus,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import HedlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import images from "~/assets/images";
import style from "./Header.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Menu from "~/components/Popper/Menu";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(style);

function Header() {
    // user
    const currentUser = true;

    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: "English",
            children: {
                title: "Language",
                data: [
                    {
                        type: "language",
                        code: "vi",
                        title: "Tiếng Việt",
                    },
                    {
                        type: "language",
                        code: "en",
                        title: "English",
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: "Feedback and help",
            to: "/feedback",
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: "Keyboard shortcut",
        },
    ];

    const handleMenuChange = (menuitem) => {
        console.log(menuitem);
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: "/feedback",
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: "get Coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Setting",
            to: "/setting",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={cx("wrapper")}>
            <div className={cx("content")}>
                <div className={cx("box_left")}>
                    <div className={cx("box_left-logo")}>
                        <img src={images.logo} alt="TikTok" />
                    </div>
                </div>
                <div className={cx("box_center")}>
                    <HedlessTippy
                        interactive={true}
                        visible={searchResult.length > 0}
                        render={(attrs) => (
                            <div className={cx("searchResult")} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx("searchAccount")}>Accounts</h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx("box_search")}>
                            <input type="text" placeholder="Search" spellCheck={false} />
                            <button className={cx("clear")}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
                            <button className={cx("search-btn")}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </HedlessTippy>
                </div>
                <div className={cx("box_right")}>
                    <div className={cx("box_actions flex items-center text-2xl text-[#161823]")}>
                        {currentUser ? (
                            <>
                                <Button lefticon={<FontAwesomeIcon icon={faPlus} />} textborder>
                                    Upload
                                </Button>
                                <Tippy delay={[0, 200]} content="upload video">
                                    <Button onlyicon>
                                        <FontAwesomeIcon icon={faMessage} />
                                    </Button>
                                </Tippy>
                            </>
                        ) : (
                            <>
                                <Button primary>Log in</Button>
                            </>
                        )}
                        <Menu
                            items={currentUser ? userMenu : MENU_ITEMS}
                            onChange={handleMenuChange}
                        >
                            {currentUser ? (
                                <img
                                    src="https://tse4.mm.bing.net/th?id=OIP.6zDy4uIaBILsnIE5J4sReAHaEK&pid=Api&P=0&h=180"
                                    alt=""
                                    className="w-13 h-13 object-cover rounded-full ml-3"
                                />
                            ) : (
                                <button className={cx("more-btn")}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )}
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
