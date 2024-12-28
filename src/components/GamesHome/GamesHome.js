import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { genericPost } from '../../Services';

/*const gamesData = [
  {
    id: 1,
    title: "League of Legends",
    category: "MOBA",
    players: "10M+",
    image: "/api/placeholder/300/200",
    rating: 4.5
  },
  {
    id: 2,
    title: "Fortnite",
    category: "Battle Royale",
    players: "15M+",
    image: "/api/placeholder/300/200",
    rating: 4.3
  },
  {
    id: 3,
    title: "Minecraft",
    category: "Sandbox",
    players: "20M+",
    image: "/api/placeholder/300/200",
    rating: 4.8
  },
  {
    id: 4,
    title: "Counter-Strike",
    category: "FPS",
    players: "8M+",
    image: "/api/placeholder/300/200",
    rating: 4.6
  }
];*/

const GameCard = ({ game }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img 
        src={game.image} 
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{game.title}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
            {game.category}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-500 mr-1">★</span>
            <span className="text-gray-600">{game.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm">
          Giocatori attivi: {game.players}
        </p>
      </div>
    </div>
  );
};

const GamesHome = () => {
  
    const [gamesData, setGamesData] = useState([])

    useEffect(() => {
        genericPost('games-list',{}, gamesListCallback)
    },[])

    const gamesListCallback = (data) => {
        setGamesData(data)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 p-6">
        {/* Header */}
        <header className="max-w-6xl mx-auto mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center">
            GameHub Online
            </h1>
            
            {/* Search Bar */}
            <div className="relative">
            <input
                type="text"
                placeholder="Cerca il tuo gioco..."
                className="w-full px-6 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>
        </header>

        {/* Categories */}
        <div className="max-w-6xl mx-auto mb-8">
            <div className="flex gap-4 overflow-x-auto pb-2">
            {['Tutti', 'MOBA', 'FPS', 'Battle Royale', 'RPG', 'Sandbox'].map((category) => (
                <button
                key={category}
                className="px-4 py-2 bg-white rounded-full shadow-sm hover:bg-blue-500 hover:text-white transition-colors whitespace-nowrap"
                >
                {category}
                </button>
            ))}
            </div>
        </div>

        {/* Games Grid */}
        <main className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gamesData.map((game) => (
                <GameCard key={game._id} game={game} />
            ))}
            </div>
        </main>
        </div>
    );
};

export default GamesHome;