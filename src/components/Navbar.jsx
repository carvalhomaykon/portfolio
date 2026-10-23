import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
} from "flowbite-react";
import Logo from "./Logo";

// Sobrescreve o tema padrão do Flowbite com a paleta do portfólio
const navbarTheme = {
  root: {
    base: "fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 px-4 py-3 backdrop-blur-md sm:px-8",
    inner: {
      base: "mx-auto flex max-w-6xl flex-wrap items-center justify-between",
    },
  },
  collapse: {
    list: "mt-3 pb-2 md:pb-0 md:text-[15px] md:font-medium",
  },
  link: {
    base: "nav-link block w-fit py-2 text-[15px] transition-colors md:p-0",
    active: {
      off: "text-muted hover:text-ink",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded p-2 text-muted hover:text-ink md:hidden",
    icon: "h-6 w-6 shrink-0",
    title: "sr-only",
  },
};

export default function NavbarFlowbite() {
  return (
    <Navbar
      fluid
      theme={navbarTheme}
      clearTheme={{ root: true, link: true, toggle: true }}
    >
      <NavbarBrand href="#about">
        <Logo className="text-2xl" />
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <NavbarLink href="#about">About</NavbarLink>
        <NavbarLink href="#projects">Projects</NavbarLink>
        <NavbarLink href="#skills">Skills</NavbarLink>
        <NavbarLink href="#experience">Experience</NavbarLink>
        <NavbarLink href="#footer">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
