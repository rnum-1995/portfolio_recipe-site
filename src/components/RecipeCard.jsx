import { Link } from 'react-router-dom';

export const RecipeCard = ({ recipe }) => {
    return (
        <Link
            to={`/recipe/${recipe.id}`}
            className="h-full"
        >
            <div className="group h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col">

                {/* 画像コンテナ */}
                <div className="relative h-48 overflow-hidden shrink-0">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>

                {/* テキスト */}
                <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-orange-500 transition-colors">
                        {recipe.title}
                    </h3>

                    <div className="flex items-center justify-between mt-auto">
                        <button className="text-orange-500 font-bold text-sm hover:underline">
                            レシピを見る
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    )
}
