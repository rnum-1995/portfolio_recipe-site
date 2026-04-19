import { useState } from 'react';
import { MOCK_RECIPES } from '../data/recipes.js'
import { RecipeCard } from '../components/RecipeCard.jsx';
import { SearchBar } from '../components/SearchBar.jsx';
import { SearchTag } from '../components/SearchTag.jsx';

export default function TopPage() {
    // 入力中の文字を保存
    const [searchQuery, setSearchQuery] = useState('');

    // 検索文字が含まれるレシピだけを抽出
    const filteredRecipes = MOCK_RECIPES.filter(recipe =>
        recipe.title.includes(searchQuery)
    );

    return (
        <div className="w-full ">
            {/* キャッチコピー・検索バー */}
            <section className="py-12 px-4rounded-3xl mb-10 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    今日、何作る？
                </h2>

                {/* 検索バー */}
                <SearchBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />

                {/* 注目キーワードタグ */}
                <SearchTag
                    setSearchQuery={setSearchQuery}
                />
            </section>

            {/* レシピ一覧 */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    レシピ一覧
                </h2>

                {/* レシピカード */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map(recipe => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                            />
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500 py-20">
                            お探しのレシピは見つかりませんでした。
                        </p>
                    )}
                </div>
            </section>
        </div>
    )
}
