import ProductCard from "./components/ProductCard";

const product = {
  title: "Livre React Pro",
  description: "Apprenez React avec des projets réels",
  price: 120,
  image: "https://picsum.photos/400/300"
};

function App() {
  return (
    <div style={{ padding: "40px" }}>
      <ProductCard product={product} />
    </div>
  );
}

export default App;
