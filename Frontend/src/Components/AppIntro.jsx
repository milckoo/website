import React, { useEffect, useRef, useState } from 'react';
import './Styles/AppIntro.css';

const AppIntro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalIdRef = useRef(null);
  const imageContainerRef = useRef(null);
  const sectionsRef = useRef([]);

  const sections = [
    {
      id: "section0",
      title: "Delicious",
      subtitle: "Meals",
      content: "Not only are our meals deliciously homely, they are also customizable. Pick and choose from our varied menu on the app and we'll serve it up, piping hot."
    },
    {
      id: "section1",
      title: "Easy",
      subtitle: "Ordering",
      content: "Our intuitive app makes ordering your favorite meals as easy as a few taps. No complicated menus, just simple, delicious choices."
    },
    {
      id: "section2",
      title: "Fast",
      subtitle: "Delivery",
      content: "We guarantee your food will arrive hot and fresh. Our delivery network ensures your meal gets to you as quickly as possible."
    },
    {
      id: "section3",
      title: "Custom",
      subtitle: "Options",
      content: "Special dietary needs? No problem. Customize any meal to fit your preferences with our easy-to-use customization options."
    }
  ];

  const images = [
    { id: "image0", src: "/AppIntro/iPhone 14 Pro - 25.png", alt: "App Introduction" },
    { id: "image1", src: "/AppIntro/iPhone 14 Pro - 32.png", alt: "Ordering Screen" },
    { id: "image2", src: "/AppIntro/iPhone 14 Pro - 35.png", alt: "Delivery Screen" },
    { id: "image3", src: "/AppIntro/iPhone 14 Pro - 45.png", alt: "Customization Screen" }
  ];

  const createCircleAnimation = () => {
    const circle = document.createElement("div");
    circle.className = "appintro-circle-animation appintro-animate-circle";
    imageContainerRef.current.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 1000);
  };

  const switchImage = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
    createCircleAnimation();
  };

  const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

  useEffect(() => {
    if (isMobile()) {
      // Mobile view - auto cycle images
      intervalIdRef.current = setInterval(switchImage, 2000);

      // Pause cycling when user interacts
      const container = imageContainerRef.current;
      const handleTouchStart = () => {
        if (intervalIdRef.current) {
          clearInterval(intervalIdRef.current);
          intervalIdRef.current = null;
        }
      };
      const handleTouchEnd = () => {
        if (!intervalIdRef.current) {
          intervalIdRef.current = setInterval(switchImage, 2000);
        }
      };

      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchend", handleTouchEnd);

      return () => {
        clearInterval(intervalIdRef.current);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      };
    } else {
      // Desktop view - intersection observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id;
              const imageIndex = parseInt(sectionId.replace("section", ""));
              setCurrentIndex(imageIndex);
              createCircleAnimation();
            }
          });
        },
        { threshold: 0.5 }
      );

      sectionsRef.current.forEach(section => {
        if (section) observer.observe(section);
      });

      return () => {
        sectionsRef.current.forEach(section => {
          if (section) observer.unobserve(section);
        });
      };
    }
  }, []);

  useEffect(() => {
    // Cleanup on resize
    const handleResize = () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
      if (isMobile()) {
        intervalIdRef.current = setInterval(switchImage, 2000);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="appintro-container">
      <div className="appintro-left-wrapper">
        <div className="appintro-fixed-heading">
          <h1>Always have us <span>at your fingertips</span></h1>
        </div>

        <div className="appintro-scroll-container">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className="appintro-section"
              ref={el => sectionsRef.current[index] = el}
            >
              <h1>{section.title} <span>{section.subtitle}</span></h1>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="appintro-right-content">
        <div className="appintro-image-container" ref={imageContainerRef}>
          {images.map((image, index) => (
            <img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className={`appintro-device-image ${index === currentIndex ? 'active' : ''}`}
              id={image.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppIntro;