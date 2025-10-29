import BookGrid from "./components/BookGrid";
import './App.css';

function App() {
  return (
    <div className="fixed inset-0 min-h-screen min-w-full text-white overflow-auto surface-sheen">
      {/* Decorative liquid blobs */}
      <div className="liquid-blob blob-pink animate-floaty" style={{ width: 260, height: 260, top: 80, left: -40 }} />
      <div className="liquid-blob blob-cyan animate-floaty" style={{ width: 320, height: 320, top: 140, right: -60, animationDelay: '1.5s' }} />
      <div className="liquid-blob blob-violet animate-floaty" style={{ width: 280, height: 280, bottom: -40, left: 120, animationDelay: '0.5s' }} />

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="glass-panel p-4 sm:p-6 md:p-8">
          <BookGrid />
        </div>
      </div>
    </div>
  );
}

export default App;