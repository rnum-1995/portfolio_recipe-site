import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const BackTop = () => {
    return (
        <>
            <Link
                to="/"
                className="flex items-center gap-2 text-orange-500 mb-6 hover:underline"
            >
                <ArrowLeft size={20} />
                <span>トップに戻る</span>
            </Link>
        </>
    )
}
