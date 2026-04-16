"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { ProductBadgeVariants } from "@/constants/badge";

import ProductActions from "../ProductActions";

export type Product = {
  id: string;
  name: string;
  slug: string;
  image_url: string;
  selling_price: number;
  stock: number;
  is_published: boolean;
  categories: {
    name: string;
  };
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image_url",
    header: "Image",
    cell: ({ row }) => (
      <Image
        src={row.original.image_url}
        alt={row.original.name}
        width={50}
        height={50}
        className="rounded-lg object-cover"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "categories.name",
    header: "Category",
    cell: ({ row }) => row.original.categories?.name || "-",
  },
  {
    accessorKey: "selling_price",
    header: "Price",
    cell: ({ row }) => `$${row.original.selling_price}`,
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    id: "status",
    header: "Status",
    cell: ({ row }) => (
      <Badge
        variant={
          ProductBadgeVariants[
            row.original.stock > 0 ? "selling" : "out-of-stock"
          ]
        }
      >
        {row.original.stock > 0 ? "Selling" : "Out of stock"}
      </Badge>
    ),
  },

  // 🔥 INI YANG MISSING DI PROJECT KAMU
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const product = row.original;

      return <ProductActions product={product} />;
    },
  },
];
