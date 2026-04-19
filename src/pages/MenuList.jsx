import { useState } from 'react';
import { Calendar, Plus, Trash2 } from 'lucide-react';
import { DAYS } from '../data/days';
import { BackTop } from '../components/BackTop';

export default function MenuList() {
    // 各曜日の献立を管理
    const [menus, setMenus] = useState(
        DAYS.reduce((acc, day) => {
            acc[day] = [];
            return acc;
        }, {})
    );

    // 各曜日の入力欄を管理
    const [inputValues, setInputValues] = useState(
        DAYS.reduce((acc, day) => {
            acc[day] = '';
            return acc;
        }, {})
    );

    // 献立を追加
    const addMenu = (day) => {
        if (inputValues[day].trim() === '') return;
        const newMenu = {
            id: Date.now(),
            text: inputValues[day]
        };
        setMenus({
            ...menus,
            [day]: [...menus[day], newMenu]
        });
        setInputValues({ ...inputValues, [day]: '' });
    };

    // 献立を削除
    const deleteMenu = (day, id) => {
        setMenus({
            ...menus,
            [day]: menus[day].filter(menu => menu.id !== id)
        });
    };

    return (
        <div className="mx-auto">
            {/* 戻るボタン */}
            <BackTop />

            {/* タイトル */}
            <div className="flex items-center gap-2 mb-8">
                <Calendar
                    size={24}
                    className="text-orange-500"
                />
                <h1 className="text-2xl font-bold text-gray-800">献立リスト</h1>
            </div>

            {/* 曜日ごとのカード */}
            <div className="grid grid-cols-1 gap-6">
                {DAYS.map((day) => (
                    <section
                        key={day}
                        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5"
                    >
                        {/* 曜日ヘッダー */}
                        <h2 className="font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100">
                            {day}
                        </h2>

                        {/* 献立リスト */}
                        <ul className="flex flex-col gap-2 mb-4 min-h-16">
                            {menus[day].length > 0 ? (
                                menus[day].map((menu) => (
                                    <li
                                        key={menu.id}
                                        className="flex items-center justify-between p-2 bg-orange-50 rounded-xl"
                                    >
                                        <span className="text-gray-700 text-sm font-medium">
                                            {menu.text}
                                        </span>
                                        <button
                                            onClick={() => deleteMenu(day, menu.id)}
                                            className="text-gray-400 hover:text-red-500 transition p-1"
                                        >
                                            <Trash2 size={16} />
                                        </button>
                                    </li>
                                ))
                            ) : (
                                <p className="text-gray-400 text-sm text-center py-2">未設定</p>
                            )}
                        </ul>

                        {/* 入力エリア */}
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputValues[day]}
                                onChange={(e) => setInputValues({ ...inputValues, [day]: e.target.value })}
                                onKeyDown={(e) => e.key === 'Enter' && addMenu(day)}
                                placeholder="献立を追加..."
                                className="flex-1 p-3 text-sm border border-gray-300 bg-gray-50 rounded-xl focus:outline-orange-500"
                            />
                            <button
                                onClick={() => addMenu(day)}
                                className="bg-orange-300 text-white p-2 rounded-xl hover:bg-orange-400 transition"
                            >
                                <Plus size={18} />
                            </button>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}