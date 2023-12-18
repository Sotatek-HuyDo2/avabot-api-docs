import React, { useEffect, useState } from "react";
import Content from "@theme-original/DocSidebar/Desktop/Content";
import BrowserOnly from "@docusaurus/BrowserOnly";
import styles from "./styles.module.css";
import clsx from "clsx";

const categories = [
  {
    category: "ETH Mainnet",
    key: "/docs/eth",
    baseUrl: "/docs/eth/avabot-api-services",
  },
  { category: "BSC Mainnet", key: "/docs/bsc", baseUrl: "/docs/bsc/overview" },
];

const DropSideBar = () => {
  const [currentCategory, setCurrentCategory] = useState(
    categories.find((category) =>
      window.location.pathname.startsWith(category.key)
    ) || categories[0]
  );
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById("dropdown");
      if (dropdown && !dropdown.contains(event.target)) {
        setOpenDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapperDropdown}>
      <div id="dropdown" className={styles.dropdown}>
        <button
          className={clsx(styles.btnDropdown, openDropdown && styles.active)}
          onClick={() => setOpenDropdown((prev) => !prev)}
        >
          <span>{currentCategory.category || ""}</span>
          <span className="clean-btn menu__caret"></span>
        </button>

        {openDropdown && (
          <ul className={clsx(styles.dropdownMenu, styles.showMenu)}>
            {categories.map((item, index) => (
              <li key={index} className={styles.dropdownItem}>
                <a
                  className={clsx(
                    styles.dropdownLink,
                    currentCategory.key === item.key && styles.active
                  )}
                  href={item.baseUrl}
                >
                  {item.category}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default function ContentWrapper(props) {
  return (
    <>
      <BrowserOnly>{() => <DropSideBar />}</BrowserOnly>
      <Content {...props} />
    </>
  );
}
