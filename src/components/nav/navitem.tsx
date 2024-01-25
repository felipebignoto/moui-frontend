import Link from 'next/link'

interface NavItemProps {
  name: string
  url: string
}

export default function NavItem(props: NavItemProps) {
  return (
    <div>
      <Link
        href={props.url}
        prefetch={false}
        className="bg-primary-main rounded-lg font-bold p-3 text-white hover:bg-primary-light hover:text-white hover:border-2 border-secondary-main"
      >
        {' '}
        <span> {props.name}</span>
      </Link>
    </div>
  )
}
