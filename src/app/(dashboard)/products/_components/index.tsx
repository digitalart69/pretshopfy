"use client";

import { useState, Fragment } from "react";

import ProductActions from "./ProductActions";
import ProductFilters from "./ProductFilters";
import AllProducts from "./products-table";
import ProductFormSheet from "./form/ProductFormSheet";

export default function Products() {
  return (
    <div className="space-y-4">
      <ProductFormSheet />

      {/* table kamu */}
    </div>
  );
}
export default function Products() {
  const [rowSelection, setRowSelection] = useState({});

  return (
    <Fragment>
      <ProductActions
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
	<div className="space-y-4">
      <ProductFormSheet />
      <ProductFilters />
      <AllProducts
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
	</div>
    </Fragment>
  );
}
