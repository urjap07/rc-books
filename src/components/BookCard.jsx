function BookCard({ book }) {
    const hasCover = book.cover && book.cover !== "Poster Not Available";
    return (
        <div className="glass-card glow-border w-[220px] flex flex-col items-center transition-all duration-300">
            <a
                href={`/books/${book.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 mb-4 rounded-xl overflow-hidden group"
            >
                {hasCover ? (
                    <img
                        src={`/covers/${book.cover}`}
                        alt={book.title}
                        className="w-[196px] h-[294px] object-cover rounded-xl bg-[#222] shadow-lg transition-transform duration-200 group-hover:scale-105 group-hover:ring-4 group-hover:ring-sky-400"
                    />
                ) : (
                    <div className="w-[196px] h-[294px] flex items-center justify-center rounded-xl bg-[#232946] border-2 border-dashed border-pink-400 text-pink-300 text-center text-lg font-semibold shadow-inner animate-pulse group-hover:ring-4 group-hover:ring-sky-400">
                        Poster Not Available
                    </div>
                )}
            </a>
            <div className="mt-2 w-full flex flex-col items-center">
                <h3 className="text-lg font-bold text-white text-center min-h-[48px] flex items-center justify-center drop-shadow">{book.title}</h3>
                <a
                    href={`/books/${book.pdf}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-300 font-semibold mt-2 hover:text-white transition-colors underline underline-offset-4"
                >
                    Read / Download
                </a>
            </div>
        </div>
    );
}

export default BookCard;