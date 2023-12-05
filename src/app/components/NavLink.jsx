import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#111] sm:text-lg rounded md:p-0 hover:text-primary-400 transition-all"
    >
      {title}
    </Link>
  );
};

export default NavLink;
