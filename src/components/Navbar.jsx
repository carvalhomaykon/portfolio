import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";

export default function NavbarFlowbite() {
  return (
    <Navbar
      fluid
      rounded
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] bg-white/90 backdrop-blur-md shadow-lg border border-gray-200 rounded-2xl"
    >
      <NavbarBrand href="#">
        <span className="self-center whitespace-nowrap text-2xl font-semibold text-gray-800">
          Carvalho<span className="text-blue-700">Maykon</span>
        </span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <NavbarLink href="#about" className="text-gray-700 hover:text-blue-700 transition">
          About
        </NavbarLink>
        <NavbarLink href="#projects" className="text-gray-700 hover:text-blue-700 transition">
          Projects
        </NavbarLink>
        <NavbarLink href="#skills" className="text-gray-700 hover:text-blue-700 transition">
          Skills
        </NavbarLink>
        <NavbarLink href="#experience" className="text-gray-700 hover:text-blue-700 transition">
          Experience
        </NavbarLink>
        <NavbarLink href="#footer" className="text-gray-700 hover:text-blue-700 transition">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
