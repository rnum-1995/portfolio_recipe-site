import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';


export const NotFound = () => {
  return (
    <div className="w-full p-8 flex flex-col justify-center items-center">

      {/* 404 */}
      <p className="text-9xl font-bold text-orange-400 mb-15">404</p>

      {/* タイトル */}
      <h1 className="text-xl font-bold text-gray-800 mb-3">
        ページが見つかりません
      </h1>
      <p className="text-gray-400 text-sm mb-15 leading-relaxed max-w-80">
        アクセスしようとしたページは削除されたか、URLが間違っている可能性があります。または、作成中です。
      </p>

      {/* ボタン */}
      <div className="flex flex-col gap-3 max-w-sm">
        <Link
          to="/"
          className="w-full bg-orange-400 text-white py-3 px-5 rounded-xl font-bold hover:bg-orange-500 transition text-center mb-3"
        >
          トップページに戻る
        </Link>

        <button
          onClick={() => window.history.back()}
          className="w-full flex items-center justify-center gap-2 py-3 px-5 border border-gray-200 rounded-xl text-gray-600 hover:bg-gray-50 transition font-medium"
        >
          <ArrowLeft size={18} />
          前のページに戻る
        </button>
      </div>
    </div>
  )
}
