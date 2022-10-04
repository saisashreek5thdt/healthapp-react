import React from "react";

import { Popover } from "@headlessui/react";
const ButtonTabs = () => {
  return (
    <>
      <Popover className="tabmenu__Bg">
        <div className="tabmenu__Container">
          <div className="tabmenu__Flexbox">
            {/* <div className="tabmenu__Flexbox--Heading">
              <a className="header__Box--Heading-Primary" href="/">
                <span className="sr-only">Your Company</span>
                Dashboard
              </a>
            </div> */}
            <ul
              className="nav tabs__Container"
              id="tabs-tabJustify"
              role="tablist"
            >
              <li
                className="nav-item flex-grow text-center"
                role="presentation"
              >
                <a
                  href="#tabs-homeJustify"
                  className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
                  id="tabs-home-tabJustify"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-homeJustify"
                  role="tab"
                  aria-controls="tabs-homeJustify"
                  aria-selected="true"
                >
                  Enroll Patient
                </a>
              </li>
              <li
                className="nav-item flex-grow text-center"
                role="presentation"
              >
                <a
                  href="#tabs-profileJustify"
                  className="nav-link w-full block font-mediumtext-xsleading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                  id="tabs-profile-tabJustify"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-profileJustify"
                  role="tab"
                  aria-controls="tabs-profileJustify"
                  aria-selected="false"
                >
                  Create Form
                </a>
              </li>
              <li
                className="nav-item flex-grow text-center"
                role="presentation"
              >
                <a
                  href="#tabs-messagesJustify"
                  className="nav-linkw-fullblockfont-medium text-xsleading-tightuppercase border-x-0 border-t-0 border-b-2 border-transparent px-6py-3my-2hover:border-transparent hover:bg-gray-100 focus:border-transparent"
                  id="tabs-messages-tabJustify"
                  data-bs-toggle="pill"
                  data-bs-target="#tabs-messagesJustify"
                  role="tab"
                  aria-controls="tabs-messagesJustify"
                  aria-selected="false"
                >
                  Upload Diet Chart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Popover>
    </>
  );
};

export default ButtonTabs;
