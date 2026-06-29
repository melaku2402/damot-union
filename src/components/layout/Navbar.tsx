export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a href="#home" className="font-semibold text-zinc-950">
          Damot Union
        </a>
        <nav className="hidden gap-6 text-sm text-zinc-600 md:flex">
          <a className="hover:text-zinc-950" href="#home">
            Home
          </a>
          <a className="hover:text-zinc-950" href="#about">
            About
          </a>
          <a className="hover:text-zinc-950" href="#impact">
            Impact
          </a>
          <a className="hover:text-zinc-950" href="#projects">
            Projects
          </a>
          <a className="hover:text-zinc-950" href="#news">
            News
          </a>
          <a className="hover:text-zinc-950" href="#membership">
            Membership
          </a>
        </nav>
      </div>
    </header>
  );
}
