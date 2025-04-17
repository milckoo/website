// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Styles/Navbar.css';

// const Navbar = () => {
//   const [sidebarActive, setSidebarActive] = useState(false);
//   const [scrolledPastHero, setScrolledPastHero] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.getElementById('hero-section');
//       if (heroSection) {
//         const heroHeight = heroSection.offsetHeight;
//         const heroBottom = heroSection.offsetTop + heroHeight;
//         // Only change color when completely past hero section
//         setScrolledPastHero(window.scrollY >= heroBottom);
//       } else {
//         // Fallback if hero section isn't found
//         setScrolledPastHero(window.scrollY > 100);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarActive(!sidebarActive);
//   };

//   const closeSidebar = () => {
//     setSidebarActive(false);
//   };

//   return (
//     <>
//       <nav className={`navbar ${scrolledPastHero ? 'dark-bg' : ''}`}>
//         <div className="logo">
//           <Link to="/">
//             <img src="/milcko .pdf 1.png" alt="MILCKO Logo" />
//           </Link>
//         </div>
//         <ul className="nav-links">
//           <li><Link to="/contact-us">Contact Us</Link></li>
//           <li><Link to="/products">Our Products</Link></li>
//           <li><Link to="/trial-pack">Trial Pack</Link></li>
//           <li><Link to="/faqs">FAQ's</Link></li>
//           <li><Link to="/about-us">About Us</Link></li>
//         </ul>
//         <button className="toggle-btn" onClick={toggleSidebar}>
//           {sidebarActive ? (
//             <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="18" y1="6" x2="6" y2="18"></line>
//               <line x1="6" y1="6" x2="18" y2="18"></line>
//             </svg>
//           ) : (
//             <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="12" cy="8" r="1"/>
//               <circle cx="12" cy="12" r="1"/>
//               <circle cx="12" cy="16" r="1"/>
//             </svg>
//           )}
//         </button>
//       </nav>

//       <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
//         <ul className="sidebar-links">
//           <li><Link to="/contact-us" onClick={closeSidebar}>Contact Us</Link></li>
//           <li><Link to="/products" onClick={closeSidebar}>Our Products</Link></li>
//           <li><Link to="/trial-pack" onClick={closeSidebar}>Trial Pack</Link></li>
//           <li><Link to="/faqs" onClick={closeSidebar}>FAQ's</Link></li>
//           <li><Link to="/about-us" onClick={closeSidebar}>About Us</Link></li>
//         </ul>
//       </div>

//       <div className={`overlay ${sidebarActive ? 'active' : ''}`} onClick={closeSidebar}></div>
//     </>
//   );
// };

// export default Navbar;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [navState, setNavState] = useState('transparent'); // 'transparent' | 'translucent' | 'solid'

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        
        if (scrollPosition === 0) {
          setNavState('transparent');
        } else if (scrollPosition < heroHeight) {
          setNavState('translucent');
        } else {
          setNavState('solid');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const closeSidebar = () => {
    setSidebarActive(false);
  };

  return (
    <>
      <nav className={`navbar ${navState}`}>
        <div className="logo">
          <Link to="/">
            <img src="/milcko .pdf 1.png" alt="MILCKO Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/products">Our Products</Link></li>
          <li><Link to="/trial-pack">Trial Pack</Link></li>
          <li><Link to="/faqs">FAQ's</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {sidebarActive ? (
            <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg className="toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="1"/>
              <circle cx="12" cy="12" r="1"/>
              <circle cx="12" cy="16" r="1"/>
            </svg>
          )}
        </button>
      </nav>

      <div className={`sidebar ${sidebarActive ? 'active' : ''}`}>
        <ul className="sidebar-links">
          <li><Link to="/contact-us" onClick={closeSidebar}>Contact Us</Link></li>
          <li><Link to="/products" onClick={closeSidebar}>Our Products</Link></li>
          <li><Link to="/trial-pack" onClick={closeSidebar}>Trial Pack</Link></li>
          <li><Link to="/faqs" onClick={closeSidebar}>FAQ's</Link></li>
          <li><Link to="/about-us" onClick={closeSidebar}>About Us</Link></li>
        </ul>
      </div>

      <div className={`overlay ${sidebarActive ? 'active' : ''}`} onClick={closeSidebar}></div>
    </>
  );
};

export default Navbar;