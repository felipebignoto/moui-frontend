import Categories from '@/components/categories/categories'

export default function Home() {
  return (
    <div className="bg-primary-main flex-col">
      <div className="bg-primary-dark">
        <h2 className="flex justify-center text-white text-2xl pt-3 underline">
          Categorias
        </h2>
        <Categories />
      </div>
    </div>
  )
}
