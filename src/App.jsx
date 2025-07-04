import BookGrid from "./components/BookGrid";
import './App.css';

function App() {
  return (
    <div className="fixed inset-0 min-h-screen min-w-full bg-gradient-to-br from-[#181828] via-[#232946] to-[#1a223f] text-white overflow-auto">
      <div className="max-w-7xl mx-auto px-4">
        <BookGrid />
      </div>
    </div>
  );
}

export default App;