import { getCategoryBySlug } from "@/app/lib/categories";
import { CategoryPageProps } from "@/app/types";
import { getModelByCategory } from "@/app/lib/models";
import ModelsGrid from "@/app/components/Modelsgrid";

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryName } = await params;
  const category = getCategoryBySlug(categoryName);
  console.log(category);
  const models = await getModelByCategory(categoryName);
  console.log(models);

  return <ModelsGrid title={category.displayName} models={models} />
}
