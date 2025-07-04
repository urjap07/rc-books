import { useEffect, useState } from "react";
import BookCard from "./BookCard";

function BookGrid() {
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch("/books.json")
        .then(res => res.json())
        .then(setBooks);
    }, []);
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            {/* Heading */}
            <h1 className="text-5xl font-extrabold text-center mt-8 mb-4 tracking-tight text-white drop-shadow-lg">
                Shri Raj Pustak
            </h1>
            <br />
            {/* Search Box with clear icon */}
            <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-2xl">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Search books..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white/80 text-gray-900 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
                    />
                    {search && (
                        <button
                            type="button"
                            onClick={() => setSearch("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/60 hover:bg-red-100 transition-colors shadow-sm"
                            aria-label="Clear search"
                            style={{ lineHeight: 0 }}
                        >
                            <svg width="25" height="25" fill="none" stroke="#e53935" strokeWidth="2.2" viewBox="0 0 24 24">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
            <br />
            <br />
            {/* Responsive Book Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 justify-center">
                {filteredBooks.length === 0 ? (
                    <div className="col-span-full flex flex-col items-center justify-center min-h-[40vh]">
                        <span className="mb-6 text-[72px] flex justify-center animate-bounce">😢</span>
                        <div className="text-lg font-semibold text-white text-center">
                            No books found. Keep searching, keep learning! 📚✨
                        </div>
                    </div>
                ) : (
                    filteredBooks.map(book => (
                        <BookCard key={book.pdf} book={book} />
                    ))
                )}
            </div>
            {/* Footer */}
            <footer className="mt-8 mb-4">
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                        <hr className="border-t-2 border-sky-400 opacity-60 mb-4" />
                    </div>
                </div>
                <div className="text-center text-sky-300 text-xl font-semibold tracking-wide drop-shadow">
                    This website is developed by <span className="text-white font-bold">Urja Pipalia</span>
                    <br />
                    Email - <span className="text-white font-bold">cutegirlurja@gmail.com</span>
                </div>
            </footer>
        </>
    );
}

export default BookGrid;