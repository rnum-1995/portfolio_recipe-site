import { tagList } from '../data/tagList.js';

export const SearchTag = ({ setSearchQuery }) => {
    return (
        <div className="flex flex-wrap gap-2 justify-center items-center text-sm text-gray-600">
            <span>注目のキーワード:</span>
            {tagList.map((tag) => (
                <button
                    key={tag}
                    onClick={() => setSearchQuery(tag)} className="px-3 py-1 bg-white border border-gray-200 rounded-full hover:bg-orange-100 hover:border-orange-300 transition-colors"
                >
                    #{tag}
                </button>
            ))}
        </div>
    )
}
