import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import productData from "../data/products";
import React, { useState } from "react";

function FilterableProductTable(props) {
  const [formState, setFormState] = useState({
    productName: "",
    inStockOnly: false
  });

  function handleSearchBarChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormState({
      ...formState,
      [name]: value
    });
  }

  return (
    <section>
      <div className="container is-max-desktop">
        <div className="box mx-6">
          <SearchBar onChange={handleSearchBarChange} />
          <ProductTable
            productData={productData}
            inStockOnly={formState.inStockOnly}
            filter={formState.productName}
          />
        </div>
      </div>
    </section>
  );
}

export default FilterableProductTable;
