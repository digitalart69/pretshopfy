"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { deleteProduct } from "@/actions/products/deleteProduct";
import { toggleProductStatus } from "@/actions/products/toggleProductStatus";

type Props = {
  product: {
    id: string;
    slug: string;
    is_published: boolean;
  };
};

export default function ProductActions({ product }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm("Delete this product?")) return;

    startTransition(async () => {
      await deleteProduct(product.id);
      router.refresh();
    });
  };

  const handleToggle = () => {
    startTransition(async () => {
      await toggleProductStatus(product.id, !product.is_published);
      router.refresh();
    });
  };

  return (
    <div className="flex gap-2">
      {/* EDIT */}
      <Button
        size="sm"
        variant="outline"
        onClick={() => router.push(`/products/${product.slug}`)}
      >
        Edit
      </Button>

      {/* DELETE */}
      <Button
        size="sm"
        variant="destructive"
        onClick={handleDelete}
        disabled={isPending}
      >
        Delete
      </Button>

      {/* TOGGLE */}
      <Button
        size="sm"
        variant="secondary"
        onClick={handleToggle}
        disabled={isPending}
      >
        {product.is_published ? "Unpublish" : "Publish"}
      </Button>
    </div>
  );
}

