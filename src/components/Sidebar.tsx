"use client";

import React from 'react';
import Link from 'next/link';
import { Home, MapPin, Menu, Info, Phone } from 'lucide-react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const navItems = [
    { icon: <Home size={24} />, label: 'Home', href: '/' },
    { icon: <Info size={24} />, label: 'About', href: '/about' },
    { icon: <Menu size={24} />, label: 'Menu', href: '/menu' },
    { icon: <MapPin size={24} />, label: 'Locations', href: '/locations' },
    { icon: <Phone size={24} />, label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={styles.sidebar}>
      {navItems.map((item, index) => (
        <Link key={index} href={item.href} className={styles.navItem}>
          <div className={styles.icon}>{item.icon}</div>
          <span className={styles.label}>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default Sidebar;
