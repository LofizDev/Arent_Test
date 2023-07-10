import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/assets/icons/logo.svg";
import Memo from "../../public/assets/icons/memo.svg";
import Challenge from "../../public/assets/icons/challenge.svg";
import Info from "../../public/assets/icons/info.svg";
import Menu from "../../public/assets/icons/menu.svg";
import Close from "../../public/assets/icons/close.svg";
import Dropdown from "../components/Dropdown";
import NoticeNumber from "../components/NoticeNumber";

const ELEMENTS = [
  "自分の記録",
  "体重グラフ",
  "目標",
  "選択中のコース",
  "コラム一覧",
  "設定",
];

const NUMBER = 1;

function Header() {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="h-[84px] w-full bg-dark-600 m-auto">
      <div className="md:w-3/4 w-[95%] h-full m-auto flex justify-between">
        <a className="flex items-center" href="/">
          <img className="h-[64px] w-[144px]" src={Logo} />
        </a>
        <div className="flex justify-between items-center w-1/2">
          <div className="inline-flex text-light hover:text-primary-400 cursor-pointer mr-4">
            <img className="h-[32px] w-[32px]" src={Memo} />
            <NavLink
              to="/records"
              className={({isActive}) => (isActive ? "text-primary-400 ml-3 lg:block hidden" : "ml-3 lg:block hidden")}
            >
              自分の記録
            </NavLink>
          </div>
          <div className="inline-flex text-light hover:text-primary-400 cursor-pointer mr-4">
            <img className="h-[32px] w-[32px]" src={Challenge} />
            <span className="lg:block hidden ml-3">チャレンジ</span>
          </div>
          <div className="inline-flex text-light hover:text-primary-400 cursor-pointer mr-4">
            <NoticeNumber number={NUMBER}>
            <img className="h-[32px] w-[32px]" src={Info} />
            </NoticeNumber>
            <span className="lg:block hidden ml-3">お知らせ</span>
          </div>
          <div className="ml-4">
            <Dropdown open={isOpen} elements={ELEMENTS}>
              {isOpen ? (
                <img
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="h-[32px] w-[32px] cursor-pointer"
                  src={Close}
                />
              ) : (
                <img
                  onClick={() => {
                    setOpen(true);
                  }}
                  className="h-[32px] w-[32px] cursor-pointer"
                  src={Menu}
                />
              )}
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
