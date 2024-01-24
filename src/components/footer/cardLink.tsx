import { Icon } from 'next/dist/lib/metadata/types/metadata-types'
import Link from 'next/link'

interface CardLinkProps {
  icon?: Icon
  name: string
  url: string
}

export default function CardLink({ name, url }: CardLinkProps) {
  return (
    <div className="hover:underline">
      <Link href={url} prefetch={false} target="_blank">
        <span>{name}</span>
      </Link>
    </div>
  )
}
