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
        className="bg-white rounded-lg font-bold p-3 hover:bg-slate-900 text-slate-900 hover:text-white hover:border-2 border-white"
      >
        {' '}
        <span> {props.name}</span>
      </Link>
    </div>
  )
}
