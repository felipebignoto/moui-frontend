import NavItem from './navitem'

export default function Nav() {
  return (
    <div className=" hidden md:flex bg-slate-900 bg-no-repeat lg:flex-row justify-around bg-transparent w-screen items-center p-8">
      <NavItem name="Moui" url="/" />
      <NavItem name="Entar" url="/" />
    </div>
  )
}
