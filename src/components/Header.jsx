"use client"; // مهم جدًا في Next.js App Router
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // <--- هنا
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { UserButton } from "@clerk/nextjs";

const Header = () => {
  const pathname = usePathname(); // المسار الحالي

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contactus", label: "Contact Us" },
  ];

  return (
    <div className="header-container">

      <div className="logo-search">
        <Image src="/img/Logo.svg" width={80} height={40} alt="Logo" />
      </div>

      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Search..." />
      </div>

      <div className="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "active" : ""}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="header-icons">
     <Link href="/favorites">   <FontAwesomeIcon icon={faHeart} className="icon" /></Link>
        <Link href="/cart"> <FontAwesomeIcon icon={faCartShopping} className="icon" /></Link>
       
        <UserButton></UserButton>
      </div>

    </div>
  );
};

export default Header;