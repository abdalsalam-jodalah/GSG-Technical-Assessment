import "./ProductList.css";

const ProductListTask1 = () => {
    const products = ["Apple", "Banana", "Orange","Strawberry "];
    return (
        <div className="container">
            <h1 className="heading">Product List</h1>
            <ul className="product-list">
                {products.map((product, index) => (
                    <li key={index} className="item">
                        {product}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductListTask1;
