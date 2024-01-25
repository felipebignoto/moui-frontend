import NavItem from './navitem'

export default function Nav() {
  return (
    <div className=" hidden md:flex lg:flex-row justify-around bg-primary-light w-screen items-center p-8">
      <NavItem name="Moui" url="/" />
      <NavItem name="Entar" url="/" />
    </div>
  )
}
