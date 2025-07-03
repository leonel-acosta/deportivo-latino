import Logo from "../common/Logo";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 bg-secondary text-white py-4 px-10 text-center flex flex-row items-center justify-between z-50">
      <div className="w-24" style={{ alignItems: "center" }}>
        <a href="/#" className="hover:underline col-auto">
          <Logo />
        </a>
        {/* <h1 className="text-2xl font-bold">Deportivo Latino</h1> */}
      </div>
      <nav className="mt-2 body-font">
        {/* <!-- Mobile menu --> */}

        {/* <!-- Desktop menu --> */}
        <ul className="xs:hidden sm:flex sm:space-x-6 md:space-x-6 lg:space-x-8 uppercase text-sm font-semibold flex flex-row items-center justify-center">
          <li>
            <a href="/#mision" className="hover:underline col-auto">
              Nuestra misión
            </a>
          </li>
          <li>
            <a href="/#teams" className="hover:underline col-auto ">
              Equipos
            </a>
          </li>
          <li>
            <a href="/#contact" className="hover:underline col-auto">
              Contacto
            </a>
          </li>
          <li>
            <a href="/#contact">
              <Button accent text={"ÚNETE"} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
