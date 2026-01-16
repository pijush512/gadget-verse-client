"use client";
import React, { useEffect, useState } from 'react';

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // ব্যাকএন্ড থেকে ডেটা ফেচ করা
  useEffect(() => {
    fetch('http://localhost:5000/items') // আপনার এক্সপ্রেস সার্ভারের URL এখানে দিন
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10 text-primary">
          Available Items List
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-gray-500">No items found!</h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <div key={item._id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                <figure className="px-4 pt-4">
                  <img
                    src={item.image || "https://via.placeholder.com/300"}
                    alt={item.name}
                    className="rounded-xl h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-primary">{item.name}</h2>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {item.description || "No description available for this item."}
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-xl font-bold text-secondary">${item.price}</span>
                    <div className="badge badge-outline badge-primary">New</div>
                  </div>
                  <div className="card-actions mt-4">
                    <button className="btn btn-primary btn-block btn-sm md:btn-md">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsPage;