import { Search } from 'lucide-react';

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="relative max-w-xl mb-5 mx-auto">
            {/* 虫眼鏡アイコン */}
            <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
            />

            {/* 入力欄 */}
            <input
                type="text"
                placeholder="料理名で検索..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 pl-10 pr-24 border border-gray-300 rounded-full focus:outline-orange-500 shadow-sm"
            />

            {/* 検索ボタン */}
            <button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-orange-400 text-white px-5 py-1.5 rounded-full text-sm font-bold hover:bg-orange-500 transition">
                検索
            </button>
        </div>
    )
}
