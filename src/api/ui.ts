interface uiProps {
  id: string
  name: string
  description: string
  source: string
  path: string
  fileType: string
  categoryId: number
  createdAt: string
  updatedAt: string
  deletedAt: null | string
}

export const uiData: uiProps[] = [
  {
    id: '1',
    name: 'Asset 1',
    description: 'Description for Asset 1',
    source: 'Source for Asset 1',
    path: 'Path for Asset 1',
    fileType: 'png',
    categoryId: 1,
    createdAt: '2022-01-01T00:00:00.000Z',
    updatedAt: '2022-01-01T00:00:00.000Z',
    deletedAt: null,
  },
  {
    id: '2',
    name: 'Asset 2',
    description: 'Description for Asset 2',
    source: 'Source for Asset 2',
    path: 'Path for Asset 2',
    fileType: 'jpg',
    categoryId: 2,
    createdAt: '2022-01-02T00:00:00.000Z',
    updatedAt: '2022-01-02T00:00:00.000Z',
    deletedAt: null,
  },
]
