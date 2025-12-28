import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

// Data for the 6 Trending Items
const trendingItems = [
  { name: "Sebastian", title: "Golden Flower", price: "2.3 ETH", img: "/images/Rectangle 22743.png" },
  { name: "Ferhat Deniz", title: "Neon District", price: "2.5 ETH", img: "/images/Rectangle 22742.png" },
  { name: "Javier Miranda", title: "Abstract Cubes", price: "1.8 ETH", img: "/images/Rectangle 22745.png" },
  { name: "Polina", title: "Fluid Motion", price: "3.1 ETH", img: "/images/Rectangle 22744.png" },
  { name: "Alex Rivera", title: "Cyber Face #09", price: "4.2 ETH", img: "/images/Rectangle 22747.png" },
  { name: "Maria S.", title: "Space Walker", price: "1.5 ETH", img: "/images/Rectangle 22746.png" }
];

// Split items for Staggered Layout
const leftColumnItems = trendingItems.filter((_, i) => i % 2 === 0);
const rightColumnItems = trendingItems.filter((_, i) => i % 2 !== 0);

// --- REUSABLE CARD COMPONENT ---
const TrendingCard = ({ item }) => (
  <div className="mb-8 max-w-[350px] mx-auto group">
    {/* TEXT INFO (ON TOP) */}
    <div className="flex justify-between items-end mb-3 px-1">
      <div>
        <h3 className="font-bold text-white text-xl mb-1">{item.name}</h3>
        <p className="text-gray-400 text-xs font-medium uppercase tracking-wide">{item.title}</p>
      </div>
      <div className="text-purple-400 font-bold text-lg">{item.price}</div>
    </div>

    {/* IMAGE (SHARP RECTANGLE) */}
    <div className="aspect-square overflow-hidden rounded-none relative">
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors z-10 pointer-events-none"></div>
      <img 
        src={item.img} 
        className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
        alt={item.title} 
      />
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="relative overflow-hidden font-sans">
      {/* GLOBAL BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary/20 blur-[180px] rounded-full -z-10 pointer-events-none"></div>
      <div className="absolute top-[30%] right-[-20%] w-[600px] h-[600px] bg-secondary/20 blur-[180px] rounded-full -z-10 pointer-events-none"></div>

      {/* --- SECTION 1: HERO --- */}
      <section className="max-w-7xl mx-auto px-6 pt-36 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div className="space-y-8 z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Discover Rare <br />
            Collections Of <br />
            Art & NFT's
          </h1>
          <p className="text-gray-400 text-lg max-w-lg font-medium">
            Create, Explore, & Collect Digital Art NFTs
          </p>
          
          <button 
            className="bg-gradient-to-r from-[#7F56D9] to-[#4FACFE] text-white text-sm font-extrabold px-12 py-5 rounded-md uppercase tracking-widest shadow-lg shadow-primary/30 hover:scale-105 transition-transform"
            style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)' }}
          >
            Explore
          </button>
          
          <div className="flex gap-12 pt-8 border-t border-white/10">
            {[
              { num: "32k+", label: "Artwork" },
              { num: "20k+", label: "Auctions" },
              { num: "10k+", label: "Artists" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-white">{stat.num}</div>
                <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Cards */}
        <div className="relative h-[550px] flex items-center justify-center hidden md:flex animate-fade-in delay-100">
          <div className="absolute top-0 right-16 w-[320px] h-[420px] bg-gradient-to-br from-secondary/30 to-primary/30 rounded-none transform rotate-[-8deg] border border-white/10 backdrop-blur-sm"></div>
          <div className="absolute top-8 right-24 w-[340px] h-[460px] bg-card-bg backdrop-blur-xl border border-white/20 rounded-none p-5 shadow-2xl transform rotate-[3deg]">
             {/* SHARP RECTANGLE IMAGE */}
             <img 
               src="/images/hero img.png" 
               alt="Abstract Art" 
               className="w-full h-3/4 object-cover rounded-none" 
             />
             <div className="mt-5 flex justify-between items-center text-sm px-1">
                <div className="flex items-center gap-2">
                   <div className="w-7 h-7 rounded-full bg-gray-500 border-2 border-white">
                      <img src="/images/Rectangle 22748.png" alt="avatar" className="rounded-full" />
                   </div>
                   <span className="font-semibold">Raja S</span>
                </div>
                <div className="text-gray-400 font-medium">18h : 57m : 14s</div>
             </div>
             <div className="mt-4 flex justify-between items-end px-1">
                <div>
                   <div className="text-xs text-gray-400 font-medium mb-1">Current Bid</div>
                   <div className="font-extrabold text-lg">2.8 ETH</div>
                </div>
                <button className="bg-white text-background px-6 py-2 rounded-none text-xs font-extrabold hover:bg-gray-200 transition uppercase">PLACE A BID</button>
             </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: FEATURED AUCTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-5/12">
           {/* SHARP RECTANGLE IMAGE */}
           <img 
             src="/images/Rectangle 22748.png" 
             alt="Bitcoin Art" 
             className="rounded-none shadow-2xl shadow-primary/10 border border-white/10 hover:scale-[1.02] transition-transform duration-500 w-full object-cover"
           />
        </div>
        <div className="w-full md:w-7/12 space-y-8">
           <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Bitcoin <br/> Art Work</h2>
           {/* COLOR UPDATE: White "Created by", Purple Pink Name */}
           <p className="text-white font-semibold text-lg">
             Created by <span className="text-[#CF56D9]">Jonathan Borba</span>
           </p>
           
           <div className="flex gap-12 items-end border-l-4 border-primary/30 pl-8">
              <div>
                 <div className="text-gray-400 text-sm font-medium mb-2">Current Bid</div>
                 <div className="text-4xl font-extrabold">1.09 ETH</div>
                 <div className="text-gray-400 text-sm font-medium mt-1">$3,835.45</div>
              </div>
              <div>
                 <div className="text-gray-400 text-sm font-medium mb-2">Auction Ends in</div>
                 <div className="flex gap-4 text-2xl font-mono font-bold">
                    <div>18<span className="text-xs text-gray-500 block font-sans font-medium mt-1">Hours</span></div>
                    <div>57<span className="text-xs text-gray-500 block font-sans font-medium mt-1">Minutes</span></div>
                    <div>14<span className="text-xs text-gray-500 block font-sans font-medium mt-1">Seconds</span></div>
                 </div>
              </div>
           </div>
           
           <button className="bg-white text-background px-8 py-4 rounded-none font-bold flex items-center gap-3 mt-6 hover:bg-gray-200 transition uppercase tracking-wider">
             View Art Work <ArrowUpRight size={20} strokeWidth={2.5} />
           </button>
        </div>
      </section>

      {/* --- SECTION 3: TRENDING --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Trending This Week</h2>
            <p className="text-gray-400 max-w-md text-base font-medium leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <button className="text-sm font-bold text-white border-2 border-white/20 px-8 py-3 rounded-none flex items-center gap-2 hover:bg-white/10 transition uppercase tracking-wider">
             View All <ArrowRight size={16} strokeWidth={3} />
          </button>
        </div>

        {/* --- STAGGERED LAYOUT --- */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center">
           <div className="w-full lg:w-1/2 pt-0 lg:pt-24">
              {leftColumnItems.map((item, idx) => (
                <TrendingCard key={`left-${idx}`} item={item} />
              ))}
           </div>
           <div className="w-full lg:w-1/2">
              {rightColumnItems.map((item, idx) => (
                <TrendingCard key={`right-${idx}`} item={item} />
              ))}
           </div>
        </div>
      </section>

      {/* --- SECTION 4: POPULAR ARTISTS & COMMUNITY --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
         <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold">Popular Artists</h2>
            <button className="text-xs font-bold text-white border border-white/30 px-6 py-3 rounded-none flex items-center gap-1 hover:bg-white/10 transition uppercase tracking-wider">
                View all Artists <ArrowUpRight size={14} strokeWidth={2.5}/>
            </button>
         </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-28">
          {[
            { name: "Ferhat Deniz", img: "/images/Ellipse 434.png" },
            { name: "Sebastian", img: "/images/Ellipse 435.png" },
            { name: "Javier Miranda", img: "/images/Ellipse 436.png" },
            { name: "Erick Butler", img: "/images/Ellipse 437.png" }
          ].map((artist, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div className="w-24 h-24 rounded-full bg-gray-800 overflow-hidden mx-auto mb-4 border-4 border-transparent group-hover:border-primary transition-all duration-300 shadow-xl">
                    <img src={artist.img} alt={artist.name} className="w-full h-full object-cover group-hover:scale-110 transition"/>
                </div>
                <p className="font-bold text-base">{artist.name}</p>
              </div>
          ))}
        </div>

         {/* Join Community Banner */}
         <div className="bg-card-bg border border-white/10 rounded-none p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="w-full md:w-1/2 h-80 md:h-96 bg-secondary rounded-none overflow-hidden relative z-10 shadow-2xl shadow-secondary/20">
               <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
               <img src="/images/cta img.png" className="w-full h-full object-cover mix-blend-overlay" alt="Abstract" />
            </div>

            <div className="w-full md:w-1/2 space-y-8 z-10 text-center md:text-left">
               <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Join The Community <br/> And Get The Best NFT <br/> Collection</h2>
               <p className="text-gray-400 text-lg font-medium max-w-md mx-auto md:mx-0">Join our Discord channel and get access to exclusive drops and connect with artists.</p>
               
               <button 
                  className="bg-hero-gradient px-12 py-5 rounded-md font-bold shadow-lg shadow-primary/30 hover:scale-105 transition uppercase tracking-wider"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)' }}
               >
                  JOIN COMMUNITY
               </button>
            </div>
             <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full -z-0 pointer-events-none"></div>
         </div>
      </section>
    </div>
  );
};

export default Home;