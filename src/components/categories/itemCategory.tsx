import { uiCategoriesProps } from '@/api/uiCategories'
import Link from 'next/link'

export default function ItemCategory({
  category,
}: {
  category: uiCategoriesProps
}) {
  return (
    <Link
      href={'/'}
      className="text-white rounded-lg max-w-96 border-secondary-main border-4 p-5 gap-4 text-lg"
    >
      <span className="flex justify-center uppercase underline">
        {category.name}
      </span>
      <span className="flex justify-center">{category.description}</span>
    </Link>
  )
}
