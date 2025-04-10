import React from 'react';
import { PlayIcon, InfoIcon } from 'lucide-react';
export function HeroBanner() {
  return <div className="relative h-[50vh] md:h-[70vh] bg-cover bg-center" style={{
    backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url('https://f.woowoowoowoo.net/resize/250x400/3b/91/3b91830ad5dd362f8539be1a3402e739/3b91830ad5dd362f8539be1a3402e739.jpg')`
  }}>
      <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
        <div className="max-w-2xl">
          <h2 className="text-5xl font-bold mb-2">Snow White</h2>
          <p className="text-gray-300 mb-4">
            A princess joins forces with seven dwarfs to liberate her kingdom
            from her cruel stepmother, the Evil Queen.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://movies2watch.tv/watch-movie/watch-snow-white-hd-122053.11008744" className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full flex items-center transition">
              <PlayIcon size={20} className="mr-2" />
              Watch Now
            </a>
            <button className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-6 rounded-full flex items-center transition">
              <InfoIcon size={20} className="mr-2" />
              <a href="https://www.profitableratecpm.com/efc1e6f9ap?key=2c4df7dd89ee99f19649b29400085460" class="watch-now-btn">More Info</a>
            </button>
          </div>
        </div>
      </div>
    </div>;
}