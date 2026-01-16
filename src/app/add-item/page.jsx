"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AddItemPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // ১. প্রোটেকশন: লগইন না থাকলে ইউজারকে লগইন পেজে পাঠিয়ে দেবে
  useEffect(() => {
    const cookies = document.cookie.split("; ");
    const isLogged = cookies.find((row) => row.startsWith("isLoggedIn=true"));
    if (!isLogged) {
      router.push("/login");
    }
  }, [router]);

  const handleAddItem = async (e) => {
    e.preventDefault();
    setLoading(true);

    const newItem = {
      name: e.target.itemName.value,
      price: e.target.price.value,
      description: e.target.description.value,
      image: e.target.imageUrl.value,
    };

    try {
      // ২. আপনার এক্সপ্রেস সার্ভারে রিয়েল API কল
      const response = await fetch('http://localhost:5000/add-item', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      });

      const data = await response.json();

      // MongoDB সাধারণত insertedId রিটার্ন করে সফল হলে
      if (data.insertedId || data.acknowledged) {
        alert("Success: Item Added to Database Successfully!");
        e.target.reset(); // ফর্ম খালি করা
        router.push("/items"); // আইটেম লিস্ট পেজে রিডাইরেক্ট
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error adding item:", error);
      alert("Error: Failed to connect to server. Make sure your backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-xl mx-auto card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary mb-6">Add New Item</h2>
          
          <form onSubmit={handleAddItem} className="space-y-4">
            {/* Item Name */}
            <div className="form-control">
              <label className="label font-semibold">Item Name</label>
              <input name="itemName" type="text" placeholder="e.g. Wireless Mouse" className="input input-bordered focus:input-primary" required />
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label font-semibold">Price ($)</label>
              <input name="price" type="number" placeholder="49.99" className="input input-bordered focus:input-primary" required />
            </div>

            {/* Image URL */}
            <div className="form-control">
              <label className="label font-semibold">Image URL</label>
              <input name="imageUrl" type="text" placeholder="https://example.com/image.jpg" className="input input-bordered focus:input-primary" required />
            </div>

            {/* Description */}
            <div className="form-control">
              <label className="label font-semibold">Description</label>
              <textarea name="description" className="textarea textarea-bordered h-24 focus:textarea-primary" placeholder="Write item details here..." required></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button type="submit" className={`btn btn-primary text-white ${loading ? 'loading' : ''}`} disabled={loading}>
                {loading ? "Adding..." : "Add Item to Store"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;