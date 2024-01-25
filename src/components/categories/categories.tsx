import { uiCategories } from '@/api/uiCategories'
import ItemCategory from './itemCategory'

export default function Categories() {
  const categories = uiCategories

  if (categories && categories.length > 0) {
    return (
      <div className=" bg-primary-dark p-16 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <ItemCategory key={category.id} category={category} />
        ))}
      </div>
    )
  } else {
    return <div>Sem categorias</div>
  }
}
