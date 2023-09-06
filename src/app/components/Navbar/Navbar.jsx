import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white" href={"/"}>NextCrudApp</Link>
      <Link className="bg-white p-2" href={'/add'}>Add</Link>
    </nav>
  );
};

export default Navbar;
