import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const ITEMS_PER_PAGE = 10;

  const fetchProducts = async () => {
    const dummyProducts = await axios.get("https://dummyjson.com/products");
    setProducts(dummyProducts.data.products);
    console.log(dummyProducts.data);
  };

  const fetchNextPage = () => {
    setPage(page + 1);
  };

  const fetchPreviousPage = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);
  return (
    <div>
      <div>
        {products.length > 0 && (
          <div className="products">
            {products
              .slice(page * 10 - ITEMS_PER_PAGE, page * 10)
              .map((product) => {
                return <div>{product.title}</div>;
              })}
          </div>
        )}
      </div>

      <div className="previous">
        <button onClick={fetchPreviousPage}>Previous</button>
      </div>

      <div className="next">
        <button onClick={fetchNextPage}>Next</button>
      </div>
    </div>
  );
}

export default App;
