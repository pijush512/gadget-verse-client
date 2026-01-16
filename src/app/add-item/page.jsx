"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { 
  Plus, 
  Image as ImageIcon, 
  Tag, 
  DollarSign, 
  AlignLeft, 
  Grid, 
  Layers,
  ArrowLeft
} from "lucide-react";

const AddItemPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
      price: parseFloat(e.target.price.value),
      category: e.target.category.value,
      stock: e.target.stock.value,
      image: e.target.imageUrl.value,
      description: e.target.description.value,
      status: "Active",
      rating: 5,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await fetch('http://localhost:5000/add-item', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      });

      const data = await response.json();

      if (data.insertedId || data.acknowledged) {
        toast.success('Product added successfully');
        e.target.reset();
        setTimeout(() => router.push("/items"), 1200);
      }
    } catch (error) {
      toast.error('Failed to add product');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Centered Heading Style - আপনার Features সেকশনের মতো */}
        <div className="text-center mb-16 relative">
          
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            Add New <span className="text-primary italic">Product</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-base-content/60 font-medium max-w-xl mx-auto">
           Add the latest innovation to your store.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm">
          <form onSubmit={handleAddItem} className="space-y-6">
            
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2 uppercase text-[10px] tracking-widest">
                  <Tag size={14} className="text-primary" /> Product Name
                </span>
              </label>
              <input name="itemName" type="text" placeholder="e.g. iPhone 15 Pro Max" 
                className="input input-bordered w-full rounded-2xl bg-white border-gray-200 focus:outline-primary h-14 font-semibold" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-gray-600 flex items-center gap-2 uppercase text-[10px] tracking-widest">
                    <DollarSign size={14} className="text-primary" /> Price (USD)
                  </span>
                </label>
                <input name="price" type="number" step="0.01" placeholder="999" 
                  className="input input-bordered w-full rounded-2xl bg-white border-gray-200 focus:outline-primary h-14 font-semibold" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-gray-600 flex items-center gap-2 uppercase text-[10px] tracking-widest">
                    <Grid size={14} className="text-primary" /> Category
                  </span>
                </label>
                <select name="category" className="select select-bordered w-full rounded-2xl bg-white border-gray-200 focus:outline-primary h-14 font-semibold" required>
                  <option value="Laptops">Laptops</option>
                  <option value="Smartphones">Smartphones</option>
                  <option value="Audio">Audio</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Accessories">Accessories</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-gray-600 flex items-center gap-2 uppercase text-[10px] tracking-widest">
                    <ImageIcon size={14} className="text-primary" /> Image URL
                  </span>
                </label>
                <input name="imageUrl" type="url" placeholder="https://image-link.com" 
                  className="input input-bordered w-full rounded-2xl bg-white border-gray-200 focus:outline-primary h-14 font-semibold" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-gray-600 flex items-center gap-2 uppercase text-[10px] tracking-widest">
                    <Layers size={14} className="text-primary" /> Stock Status
                  </span>
                </label>
                <select name="stock" className="select select-bordered w-full rounded-2xl bg-white border-gray-200 focus:outline-primary h-14 font-semibold">
                  <option value="In Stock">In Stock</option>
                  <option value="Limited Stock">Limited Stock</option>
                  <option value="Coming Soon">Coming Soon</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-gray-600 flex items-center gap-2 uppercase text-[10px] tracking-widest">
                  <AlignLeft size={14} className="text-primary" /> Product Description
                </span>
              </label>
              <textarea name="description" rows="4" className="textarea textarea-bordered w-full rounded-2xl bg-white border-gray-200 focus:outline-primary font-medium p-4" placeholder="Describe the gadget's top features..." required></textarea>
            </div>

            <div className="pt-6">
              <button 
                type="submit" 
                disabled={loading}
                className="btn btn-primary w-full rounded-2xl text-white font-black uppercase tracking-widest h-16 shadow-lg shadow-primary/20"
              >
                {loading ? <span className="loading loading-spinner"></span> : <><Plus size={20} className="mr-2" /> Add to Inventory</>}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemPage;