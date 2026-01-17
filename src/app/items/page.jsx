"use client";
import React, { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { ShoppingCart, Eye, Star, Search, ChevronLeft, ChevronRight, SlidersHorizontal, Sparkles } from 'lucide-react';

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch('https://gadget-verse-server.vercel.app/items')
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [items, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = ["All", ...new Set(items.map(item => item.category).filter(Boolean))];

  if (loading) return (
    <div className="min-h-screen flex justify-center items-center bg-base-100">
      <span className="loading loading-spinner loading-lg text-primary"></span>
    </div>
  );

  return (
    <div className="min-h-screen bg-base-100 py-24 px-4 md:px-10">
      <div className="w-11/12 mx-auto">

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-2">
              <Sparkles size={14} /> Global Store
            </div>
            <h1 className="text-4xl md:text-6xl font-black mt-2 tracking-tighter uppercase leading-none">
              All <span className="italic text-primary">Gadgets</span>
            </h1>
            <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-3"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <div className="relative group flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors" size={18} />
              <input
                type="text"
                placeholder="Search gadgets..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full md:w-64 h-14 pl-12 pr-4 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none font-bold text-sm transition-all"
              />
            </div>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn h-14 px-6 rounded-2xl bg-base-200 border-none hover:bg-base-300 gap-3 text-[11px] font-black uppercase tracking-widest">
                <SlidersHorizontal size={16} /> {selectedCategory}
              </div>
              <ul tabIndex={0} className="dropdown-content z-[20] menu p-2 shadow-2xl bg-base-100 rounded-2xl w-52 mt-2 border border-base-200">
                {categories.map(cat => (
                  <li key={cat}>
                    <button
                      onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                      className={`${selectedCategory === cat ? 'bg-primary text-white' : ''} font-bold uppercase text-[10px] tracking-widest p-3`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Items Grid - Featured Card Style */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-32 bg-base-200/50 rounded-[3rem] border border-dashed border-base-300">
            <h2 className="text-2xl font-black uppercase opacity-20 tracking-widest">No items found!</h2>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentItems.map((item) => (
                <div key={item._id} className="group bg-base-200 rounded-lg border border-base-300 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">

                  {/* Image Area - Featured Style */}
                  <div className="relative aspect-[5/4] overflow-hidden bg-white p-4 flex items-center justify-center">
                    <span className="absolute top-4 left-4 z-10 bg-white/20 px-2 py-0.5 rounded-lg text-[8px] font-black uppercase tracking-widest shadow-sm">
                      {item.category || "New"}
                    </span>
                    <img
                      src={item.image || "https://via.placeholder.com/400"}
                      alt={item.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Area - Featured Style */}
                  <div className="p-5 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-1">
                        <Star size={17} fill="currentColor" className="text-orange-400" />
                        <span className="text-[15px] font-bold opacity-40">4.9</span>
                      </div>
                      <span className="text-lg font-black text-primary tracking-tight">
                        ${item.price}
                      </span>
                    </div>

                    <h3 className="text-base font-black leading-tight mb-2 line-clamp-1 uppercase">
                      {item.name}
                    </h3>

                    <p className="text-[11px] text-base-content/60 font-medium line-clamp-2 mb-4 leading-normal">
                      {item.description || "The ultimate gadget for professionals and tech enthusiasts."}
                    </p>

                    <div className="flex gap-2 mt-auto">
                      <Link
                        href={`/items/${item._id}`}
                        className="flex-grow btn btn-primary rounded px-12 font-bold text-xs hover:scale-105 transition-all"
                      >
                        <Eye size={14} /> View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center mt-20 gap-3">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} className="btn disabled:opacity-20">
                  <ChevronLeft size={20} />
                  Prev</button>
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`w-12 h-12 rounded-2xl font-black text-xs transition-all duration-300 ${currentPage === i + 1
                        ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-110'
                        : 'bg-base-200 text-base-content/40 hover:bg-base-300'
                      }`}
                  >
                    {String(i + 1).padStart(2, '0')}

                  </button>
                ))}
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} className="btn disabled:opacity-30">
                  Next
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ItemsPage;