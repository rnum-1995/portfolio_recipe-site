import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import logo from '../assets/logo.svg';
import { BackTop } from '../components/BackTop';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'メールアドレスを入力してください';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'メールアドレスの形式が正しくありません';
        }
        if (!password) {
            newErrors.password = 'パスワードを入力してください';
        } else if (password.length < 6) {
            newErrors.password = 'パスワードは6文字以上で入力してください';
        }
        return newErrors;
    };

    const handleLogin = () => {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
    };

    return (
        <>
            {/* 戻るボタン */}
            < BackTop />

            <div className="flex items-center justify-center h-full">
                <div className="w-full flex flex-col lg:flex-row">
                    {/* 左側：キャッチコピーエリア */}
                    <div className="flex w-full lg:w-1/2 bg-orange-400 flex-col items-center justify-center p-10 rounded-xl">
                        <div className="text-center">
                            <img src={logo} alt="Cook Recipe" className="w-40 h-auto mx-auto mb-8 brightness-0 invert" />
                            <h2 className="text-2xl font-bold text-white mb-4">
                                おいしいレシピを<br />見つけよう
                            </h2>
                            <p className="text-orange-100 text-sm leading-relaxed">
                                お気に入りのレシピを保存して<br />
                                毎日の献立をもっと楽しく
                            </p>
                        </div>
                    </div>

                    {/* 右側：フォームエリア */}
                    <div className="w-full lg:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">

                        {/* タイトル */}
                        <h1 className="text-2xl font-bold text-gray-800 mb-1">ログイン</h1>
                        <p className="text-gray-400 text-sm mb-8">
                            アカウントにログインしてください
                        </p>

                        {/* フォーム */}
                        <div className="flex flex-col gap-4 max-w-sm">
                            {/* メールアドレス */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    メールアドレス
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="example@email.com"
                                        className={`w-full py-3 pl-10 pr-4 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition
                                    ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
                                    />
                                </div>

                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email}
                                    </p>
                                )}
                            </div>

                            {/* パスワード */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    パスワード
                                </label>

                                <div className="relative">
                                    <Lock
                                        size={18}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                    />

                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="6文字以上"
                                        className={`w-full py-3 pl-10 pr-10 border rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400 transition
                                    ${errors.password
                                                ? 'border-red-400'
                                                : 'border-gray-200'}`}
                                    />

                                    <button
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword
                                            ? <EyeOff size={18} />
                                            : <Eye size={18} />
                                        }
                                    </button>
                                </div>

                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>

                            {/* ログインボタン */}
                            <button
                                onClick={handleLogin}
                                className="w-full bg-orange-400 text-white py-3 rounded-xl font-bold hover:bg-orange-500 transition mt-2"
                            >
                                ログイン
                            </button>

                            {/* 新規登録リンク */}
                            <p className="text-center text-gray-500 text-xs mt-2">
                                アカウントをお持ちでない方は
                                <Link
                                    to="*"
                                    className="text-orange-500 font-bold hover:underline ml-1"
                                >
                                    新規登録
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}