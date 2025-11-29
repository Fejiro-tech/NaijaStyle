import ProductDetail from "@/app/components/ProductDetail";

export default async function ProductDetailPage({ params }) {
  
  const { id } = await params;
  return <ProductDetail id={id} />;
}