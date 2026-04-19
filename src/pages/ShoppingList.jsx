import { useState } from 'react';
import { Plus, Trash2, ShoppingBasket } from 'lucide-react';
import { BackTop } from '../components/BackTop';


export default function ShoppingList() {
    // リストの状態を管理
    const [items, setItems] = useState([
        { id: 1, text: '例：にんじん', checked: false }
    ]);

    // 入力フォームの文字を管理
    const [inputValue, setInputValue] = useState('');

    // 追加ボタンを押した時の処理
    const addItem = () => {
        if (inputValue.trim() === '') return;

        const newItem = {
            id: Date.now(),
            text: inputValue,
            checked: false
        };

        setItems([...items, newItem]);
        setInputValue('');
    };

    // 削除ボタンを押した時の処理
    const deleteItem = (id) => {
        const newItems = items.filter(item => item.id !== id);
        setItems(newItems);
    };

    // チェックボックスの切り替え
    const toggleItem = (id) => {
        setItems(items.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    // 未完了・完了でリストを分ける
    const uncheckedItems = items.filter(item => !item.checked);
    const checkedItems = items.filter(item => item.checked);

    return (
        <div className="mx-auto">
            {/* 戻るボタン */}
            <BackTop />

            <div className="flex items-center gap-2 mb-13 text-orange-500">
                <ShoppingBasket size={24} />
                <h1 className="text-2xl font-bold text-gray-800">買い物リスト</h1>
            </div>

            {/* 入力エリア */}
            <section className='mb-11'>
                <h2 className='text-gray-500 mb-2'>リストに追加</h2>
                <div className="flex gap-2 mb-8">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addItem()}
                        placeholder="購入するものを入力..."
                        className="flex-1 p-3 border border-gray-300 bg-gray-50 rounded-xl focus:outline-orange-500"
                    />

                    <button
                        onClick={addItem}
                        className="bg-orange-300 text-white p-3 rounded-xl hover:bg-orange-400 transition shadow-md"
                    >
                        <Plus size={24} />
                    </button>
                </div>
            </section>

            {/* 追加リスト表示エリア */}
            <section className='mb-8'>
                <h2 className='text-gray-500 mb-2'>NEED TO BUY</h2>
                <ul className="space-y-3">
                    {uncheckedItems.length > 0 ? (
                        uncheckedItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group hover:bg-orange-50 transition shadow-sm"
                            >
                                <div className='flex items-center gap-3'>
                                    {/* チェックボックス */}
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={() => toggleItem(item.id)}
                                        className="w-5 h-5 accent-orange-400 cursor-pointer"
                                    />
                                    <span className="text-gray-700 font-medium">{item.text}</span>
                                </div>

                                <button
                                    onClick={() => deleteItem(item.id)}
                                    className="text-gray-400 hover:text-red-500 transition p-1"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 py-4">
                            リストは空っぽです。
                        </p>
                    )}
                </ul>
            </section>

            {/* 完了リスト表示エリア */}
            <section>
                <h2 className='text-gray-500 mb-2'>COMPLETED</h2>
                <ul className="space-y-3">
                    {checkedItems.length > 0 ? (
                        checkedItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl group hover:bg-orange-50 transition shadow-sm"
                            >
                                <div className='flex items-center gap-3'>
                                    {/* チェックボックス */}
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={() => toggleItem(item.id)}
                                        className="w-5 h-5 accent-orange-300 cursor-pointer"
                                    />
                                    {/* 打ち消し線 */}
                                    <span className="text-gray-400 font-medium line-through">{item.text}
                                    </span>
                                </div>

                                <button
                                    onClick={() => deleteItem(item.id)}
                                    className="text-gray-400 hover:text-red-500 transition p-1"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </li>
                        ))
                    ) : (
                        <p className="text-center text-gray-400 py-4">
                            完了したアイテムはありません。
                        </p>
                    )}
                </ul>
            </section>
        </div>
    );
}
