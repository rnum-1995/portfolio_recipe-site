import { useParams } from 'react-router-dom';
import { Clock, Flame, Heart, Lightbulb, Minus, Plus } from 'lucide-react';
import { MOCK_RECIPES } from '../data/recipes.js'
import { useState } from 'react';
import { BackTop } from '../components/BackTop.jsx';

export default function RecipeDetail({ favorites, toggleFavorite }) {
    const { id } = useParams();
    //一致するidのレシピを探す
    const recipe = MOCK_RECIPES.find(r => r.id === Number(id));

    //人数の状態管理
    const [servings, setServings] = useState(2);

    // 現在のレシピがお気に入りかどうか
    const isFavorite = favorites.includes(recipe.id);

    if (!recipe) {
        return <p className="p-10 text-center">レシピが見つかりませんでした。</p>;
    }

    //人数に応じた分量の材料を計算
    const calcAmount = (amount) => {
        const calcResult = (amount / recipe.servings) * servings;
        return Number.isInteger(calcResult) ? calcResult : Number(calcResult.toFixed(1));
    }

    //「大さじ・小さじ」の単位表示
    const formatAmount = (amount, unit) => (unit === '大さじ' || unit === '小さじ') ? `${unit}${amount}` : `${amount}${unit}`;


    return (
        <div className="mx-auto">
            {/* 戻るボタン */}
            <BackTop />

            {/* 画像・タイトル */}
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mb-20'>
                {/* 画像 */}
                <div className="rounded-3xl overflow-hidden shadow-lg h-64 md:h-96">
                    <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* タイトル・情報 */}
                <div className='flex flex-col items-center justify-center w-full'>
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">
                        {recipe.title}
                    </h1>

                    <div className='flex gap-2 mb-6 w-full'>
                        <div className="flex flex-col items-center text-gray-500 bg-gray-50 rounded-xl p-4 w-full">
                            <Clock
                                size={20}
                                className="text-orange-500"
                            />
                            <span className="font-medium">調理時間</span>
                            <span className='font-bold'>{recipe.time}</span>
                        </div>

                        <div className="flex flex-col items-center text-gray-500 bg-gray-50 rounded-xl p-4 w-full">
                            <Flame
                                size={20}
                                className="text-orange-500"
                            />
                            <span className="font-medium">カロリー</span>
                            <span className='font-bold'>{recipe.calorie}</span>
                        </div>
                    </div>

                    {/* お気に入りボタン */}
                    <button
                        onClick={() => toggleFavorite(recipe.id)}
                        className={`flex flex-row items-center justify-center gap-2 py-3 rounded-xl w-full transition-colors
                            ${isFavorite
                                ? 'bg-pink-400 hover:bg-pink-500'
                                : 'bg-orange-400 hover:bg-orange-500'
                            }`}
                    >
                        <Heart
                            size={20}
                            className={isFavorite ? 'fill-white text-white' : 'text-white'}
                        />
                        <span className='text-white'>
                            {isFavorite ? 'お気に入り済み' : 'お気に入りに追加'}
                        </span>
                    </button>
                </div>
            </section>

            {/* 材料・作り方 */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_3fr] gap-10">
                {/* 材料 */}
                <section className='bg-gray-50 rounded-xl p-4 h-fit'>
                    <div className="flex justify-center items-center gap-5 mb-4">
                        <button
                            onClick={() => setServings(s => Math.max(1, s - 1))}
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                        >
                            <Minus size={20} />
                        </button>

                        <h2 className="font-bold text-gray-800 text-center">
                            材料<br />
                            ({servings}人前)
                        </h2>

                        <button
                            onClick={() => setServings(s => Math.min(10, s + 1))}
                            className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600"
                        >
                            <Plus size={20} />
                        </button>
                    </div>

                    <ul className='flex flex-col gap-1'>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li
                                key={index}
                                className='flex justify-between items-center py-2 border-b border-gray-300'
                            >
                                <span>{ingredient.name}</span>
                                <span>
                                    {formatAmount(
                                        calcAmount(ingredient.amount), ingredient.unit
                                    )}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* 作り方・コツ */}
                <section>
                    <h2 className="text-xl font-bold mb-6 text-gray-800">作り方</h2>
                    <ol className='mb-5'>
                        {recipe.steps.map((steps) => (
                            <li
                                key={steps.step}
                                className='flex flex-row items-center gap-4 mb-10'
                            >
                                <span className='flex items-center justify-center w-8 h-8 rounded-full bg-orange-400 text-white font-bold shrink-0'>
                                    {steps.step}
                                </span>

                                <p>{steps.description}</p>
                            </li>
                        ))}
                    </ol>

                    {/* コツ */}
                    <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-300">
                        <h3 className="flex flex-row gap-1 mb-2 text-orange-400 ">
                            <Lightbulb
                                size={20}
                                className='text-orange-400'
                            />
                            美味しく作るコツ
                        </h3>

                        <p className="text-gray-600 leading-relaxed ">
                            {recipe.tip}
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}