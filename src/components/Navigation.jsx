import React from 'react'
import { ROUTES } from '../const'
import { NavLink, Link } from 'react-router-dom';
import { Search, Heart, Calendar, ShoppingBasket, UserRoundKey } from 'lucide-react';
import logo from '../assets/logo.svg';

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 p-3 rounded-lg transition-colors ${isActive ? 'bg-orange-100 text-orange-600 font-bold' : 'text-gray-600 hover:bg-gray-100'
    }`;

  // スマホ用ボトムナビのスタイル
  const bottomLinkClass = ({ isActive }) =>
    `flex flex-col items-center gap-1 p-2 rounded-lg transition-colors text-xs ${isActive ? 'text-orange-600 font-bold' : 'text-gray-600 hover:text-orange-400'
    }`;

  return (
    <>
      {/* PC用サイドバー */}
      <aside className="fixed left-0 top-0 h-screen w-72 p-4 hidden md:block">
        <div className="flex flex-col h-full bg-white rounded-3xl shadow-sm p-6 border border-gray-100">
          <h1 className="mb-10 px-3">
            <Link to={ROUTES.TOP}>
              <img src={logo} alt="Cook Recipe" className="w-40 h-auto" />
            </Link>
          </h1>

          <nav aria-label="メインナビゲーション">
            <ul className="flex flex-col gap-2">
              <li>
                <NavLink to={ROUTES.TOP} className={linkClass}>
                  <Search size={20} /> <span>レシピを探す</span>
                </NavLink>
              </li>

              <li>
                <NavLink to={ROUTES.FAVORITE} className={linkClass}>
                  <Heart size={20} /> <span>お気に入り</span>
                </NavLink>
              </li>

              <li>
                <NavLink to={ROUTES.MENU_LIST} className={linkClass}>
                  <Calendar size={20} /> <span>献立リスト</span>
                </NavLink>
              </li>

              <li>
                <NavLink to={ROUTES.SHOPPING_LIST} className={linkClass}>
                  <ShoppingBasket size={20} /> <span>買い物リスト</span>
                </NavLink>
              </li>

              <li>
                <NavLink to={ROUTES.LOGIN} className={linkClass}>
                  <UserRoundKey size={20} /> <span>ログイン</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {/* スマホ用ボトムナビ */}
      <nav aria-label="ボトムナビゲーション" className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg md:hidden z-50">
        <ul className="flex justify-around items-center py-2">
          <li>
            <NavLink to={ROUTES.TOP} className={bottomLinkClass}>
              <Search size={20} />
              <span>探す</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={ROUTES.FAVORITE} className={bottomLinkClass}>
              <Heart size={20} />
              <span>お気に入り</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={ROUTES.MENU_LIST} className={bottomLinkClass}>
              <Calendar size={20} />
              <span>献立</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={ROUTES.SHOPPING_LIST} className={bottomLinkClass}>
              <ShoppingBasket size={20} />
              <span>買い物</span>
            </NavLink>
          </li>

          <li>
            <NavLink to={ROUTES.LOGIN} className={bottomLinkClass}>
              <UserRoundKey size={20} />
              <span>ログイン</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}