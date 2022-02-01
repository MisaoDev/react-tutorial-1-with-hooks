function SearchBar(props) {
  return (
    <div className="mb-5">
      <div className="field">
        <div className="control">
          <input
            className="input"
            name="productName"
            type="text"
            placeholder="Search..."
            value={props.productName}
            onChange={props.onChange}
          />
        </div>
      </div>

      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input
              name="inStockOnly"
              type="checkbox"
              className="mr-2"
              checked={props.inStockOnly}
              onChange={props.onChange}
            />
            Only show products in stock
          </label>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
