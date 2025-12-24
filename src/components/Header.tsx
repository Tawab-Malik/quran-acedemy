'use client';

import { useState, useEffect } from 'react';
import WhatsAppButton from './WhatsAppButton';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#curriculum', label: 'Curriculum' },
        { href: '#how-it-works', label: 'How It Works' },
        { href: '#testimonials', label: 'Testimonials' }
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/10 backdrop-blur-md shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="!text-2xl xl:text-4xl">🕌</div>
                        <div>
                            <h1 className="!text-xl xl:text-2xl font-bold text-gray-900">Quran Academy</h1>
                            <p className="!text-xs text-gray-600">Online Quran Classes</p>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden xl:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-gray-600 hover:text-green-600 font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className='flex gap-x-3 items-center'>
                        {/* Desktop CTA Button */}
                        <div className="hidden sm:block">
                            <WhatsAppButton
                                variant="primary"
                                text="📱 Get Started"
                                className="px-6 py-2.5 text-sm"
                            />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="xl:hidden p-2 text-gray-600 hover:text-green-600 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <svg
                                className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>

                {/* Mobile Menu - Fixed Overlay */}
                {isMenuOpen && (
                    <>
                        {/* Backdrop Overlay */}
                        <div
                            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 xl:hidden animate-fade-in"
                            onClick={() => setIsMenuOpen(false)}
                            style={{ top: '80px' }}
                        />

                        {/* Menu Dropdown */}
                        <nav className="fixed top-20 left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-lg animate-fade-in xl:hidden h-screen">
                            <div className=" max-w-7xl mx-auto w-full flex flex-col justify-between h-full">
                                <div className="flex flex-col space-y-1 py-4 px-4 full">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50 font-medium transition-all rounded-lg"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>

                                <div className="px-4 py-3 h-full flex items-end mb-44">
                                    <WhatsAppButton
                                        variant="primary"
                                        text="📱 Get Started"
                                        className="w-full px-4 py-2.5 text-sm"
                                    />
                                </div>
                            </div>
                        </nav>
                    </>
                )}
            </div>
        </header>
    );
}


