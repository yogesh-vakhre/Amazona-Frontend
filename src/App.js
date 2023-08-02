function App() {
  return (
    <>
      <header>
        <a href="/">Amazona</a>
      </header>
      <main>
        <h1>Features Products</h1>
        <div className="products">
          <div className="product" key="product.slug">
            <a href="/product/product.slug">
              <img src="images/p1.jpg" alt="product" />
            </a>
            <div className="product-info">
              <p>product.name</p>
              <p>
                <strong>product.price</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
