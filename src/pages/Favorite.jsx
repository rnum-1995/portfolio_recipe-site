import { Heart } from 'lucide-react';
import { MOCK_RECIPES } from '../data/recipes.js';
import { BackTop } from '../components/BackTop.jsx';
import { RecipeCard } from '../components/RecipeCard.jsx';

export default function Favorite({ favorites }) {
    // お気に入りIDに一致するレシピを取得
    const favoriteRecipes = MOCK_RECIPES.filter(recipe =>
        favorites.includes(recipe.id)
    );

    return (
        <div className="mx-auto">
            {/* 戻るボタン */}
            <BackTop />

            {/* タイトル */}
            <div className="flex items-center gap-2 mb-8">
                <Heart
                    size={24}
                    className="text-pink-400"
                />
                <h1 className="text-2xl font-bold text-gray-800">お気に入り</h1>
            </div>

            {/* レシピ一覧 */}
            {favoriteRecipes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {favoriteRecipes.map(recipe => (
                        <RecipeCard
                            key={recipe.id}
                            recipe={recipe}
                        />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <Heart
                        size={48}
                        className="text-gray-300 mx-auto mb-4"
                    />
                    <p className="text-gray-400">
                        お気に入りのレシピはまだありません。
                    </p>
                </div>
            )}
        </div>
    );
}