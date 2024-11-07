/* eslint-disable array-callback-return */
import classNames from "classnames/bind";
import style from "~/components/Layout/components/Search/Search.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import * as searchService from "~/apiService/searchService";
import AccountItem from "~/components/AccountItem";
import { useEffect, useState, useRef } from "react";
import { faCircleXmark, faMagnifyingGlass, faSpinner } from "@fortawesome/free-solid-svg-icons";
import HedlessTippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDebounce } from "~/hooks";
const cx = classNames.bind(style);
function Search() {
    const [searchResult, setSearchResult] = useState([]);

    const [searchValue, setSearchValue] = useState("");

    const [showResult, setShowResult] = useState(false);

    const [loading, setLoading] = useState(false);

    const debounce = useDebounce(searchValue, 600);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);

            const result = await searchService.search(debounce);

            setSearchResult(result);

            setLoading(false);
        };

        fetchAPI();
    }, [debounce]);

    const handleClear = () => {
        setSearchValue("");
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(" ")) {
            setSearchValue(searchValue);
        }
    };

    return (
        <HedlessTippy
            interactive={true}
            visible={searchResult.length > 0 && showResult}
            render={(attrs) => (
                <div className={cx("searchResult")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx("searchAccount")}>Accounts</h4>
                        {searchResult.map((result) => {
                            return <AccountItem key={result.id} data={result} />;
                        })}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx("box_search")}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    className="peer"
                    type="text"
                    placeholder="Search"
                    spellCheck={false}
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button className={cx("clear")} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {loading && (
                    <FontAwesomeIcon
                        className={cx("loading", "animate-spin-fast")}
                        icon={faSpinner}
                    />
                )}
                <button
                    className={cx(
                        "search-btn",
                        " peer-placeholder-shown:text-gray-400 peer-not-placeholder-shown:text-gray-800 hover:bg-[#1618230f] hover:!text-gray-800",
                    )}
                >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HedlessTippy>
    );
}

export default Search;
