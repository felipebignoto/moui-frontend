export interface uiCategoriesProps {
  id: number
  name: string
  description: string
  featured: boolean
  createdAt: Date
  updatedAt: Date
  deletedAt: null | Date
}

export const uiCategories: uiCategoriesProps[] = [
  {
    id: 1,
    name: 'Category 1',
    description: 'Description for Category 1',
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 2,
    name: 'Category 2',
    description: 'Description for Category 2',
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 3,
    name: 'Category 3',
    description: 'Description for Category 3',
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 4,
    name: 'Category 4',
    description: 'Description for Category 4',
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 5,
    name: 'Category 5',
    description: 'Description for Category 5',
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 6,
    name: 'Category 6',
    description: 'Description for Category 6',
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 7,
    name: 'Category 7',
    description: 'Description for Category 7',
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 8,
    name: 'Category 8',
    description: 'Description for Category 8',
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 9,
    name: 'Category 9',
    description: 'Description for Category 9',
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 10,
    name: 'Category 10',
    description: 'Description for Category 10',
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
]
