import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ROUTES } from './const'
import { useState } from 'react';
import Favorite from './pages/Favorite'
import MenuList from './pages/MenuList'
import RecipeDetail from './pages/RecipeDetail'
import ShoppingList from './pages/ShoppingList'
import TopPage from './pages/TopPage'
import Login from './pages/Login';
import Footer from './components/Footer';
import Navigation from './components/Navigation'
import { NotFound } from './pages/NotFound';

function App() {
  // お気に入りのレシピIDを管理
  const [favorites, setFavorites] = useState([]);

  // お気に入りの追加・削除を切り替え
  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  return (
    <BrowserRouter>
      {/* 画面全体をフレックスボックスで横並び */}
      <div className="flex min-h-screen bg-gray-50">
        {/* 左側：固定サイドバー、ボトムバー */}
        <Navigation />

        {/* 右側：メインコンテンツエリア */}
        <div className="flex-1 flex flex-col md:ml-66">
          <div className='flex-1 flex flex-col m-4 bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden'>
            <main className="flex-1 p-6 md:p-10 w-full max-w-7xl mx-auto">
              <Routes>
                <Route path={ROUTES.TOP} element={<TopPage />} />
                <Route path={ROUTES.FAVORITE} element={<Favorite
                  favorites={favorites}
                />} />
                <Route path={ROUTES.MENU_LIST} element={<MenuList />} />
                <Route path={ROUTES.RECIPE_DETAIL} element={<RecipeDetail
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />} />
                <Route path={ROUTES.SHOPPING_LIST} element={<ShoppingList />} />
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App
