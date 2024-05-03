// App.js
import React, { useState } from 'react';
import './App.css';

const productsData = [
  { id: 1, name: 'Oxford Shirts', category: 'Category A', price: 10, rating: 4, image: 'https://source.unsplash.com/200x200/?shirts' },
  { id: 2, name: 'Tunic', category: 'Category B', price: 20, rating: 3, image: 'https://source.unsplash.com/200x200/?tunic' },
  { id: 3, name: 'Huawei watch Buds', category: 'Category A', price: 15, rating: 5, image: 'https://source.unsplash.com/200x200/?watch' },
  // Add more products as needed
];

function App() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = productsData.filter((product) => {
    if (selectedCategory !== 'All' && product.category !== selectedCategory) {
      return false;
    }
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">Shopping Cart</div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
          </div>
          <div className="categories">
            <select onChange={(e) => handleCategoryChange(e.target.value)} value={selectedCategory}>
              <option value="All">All Categories</option>
              <option value="Category A">Category A</option>
              <option value="Category B">Category B</option>
              {/* Add more categories */}
            </select>
          </div>
        </nav>
      </header>
      <main>
        <div className="product-list">
          {filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating}</p>
              <div className="quantity-controls">
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;