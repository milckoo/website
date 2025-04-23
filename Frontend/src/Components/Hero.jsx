
import React, { useEffect, useRef } from 'react';
import './Styles/Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const typingTextRef = useRef(null);
  const doorstepTextRef = useRef(null);
  const fallingDropRef = useRef(null);
  const milkContainerRef = useRef(null);
  const splashContainerRef = useRef(null);
  const milkBubblesRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const typingText = typingTextRef.current;
    const doorstepText = doorstepTextRef.current;
    const splashContainer = splashContainerRef.current;
    const milkBubbles = milkBubblesRef.current;
    const milkContainer = milkContainerRef.current;

    // Words to cycle through for h1 typing animation
    const words1 = ["Fresh.", "Natural.", "Organic."];
    let wordIndex1 = 0;

    // Words to cycle through for h2 typing animation
    const words2 = ["Doorstep!", "Home!", "Family!", "Table!"];
    let wordIndex2 = 0;

    // Create milk bubbles
    function createMilkBubbles() {
      for (let i = 0; i < 20; i++) {
        const bubble = document.createElement("div");
        bubble.className = "bubble";

        // Set size and position
        const size = 3 + Math.random() * 10;
        const startPos = Math.random() * 100;

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${startPos}%`;
        bubble.style.setProperty("--duration", `${3 + Math.random() * 4}s`);
        bubble.style.setProperty("--shift", `${Math.random() * 40 - 20}px`);
        bubble.style.setProperty("--opacity", `${0.3 + Math.random() * 0.5}`);

        // Add random delay to bubbles
        bubble.style.animationDelay = `${Math.random() * 5}s`;

        milkBubbles.appendChild(bubble);
      }
    }

    // Enhanced Milk Drop Animation
    function initMilkDropAnimation() {
      function createSplash() {
        // Clear previous splashes
        splashContainer.innerHTML = "";

        // Create multiple splash particles
        for (let i = 0; i < 16; i++) {
          const splash = document.createElement("div");
          splash.className = "splash";

          // Random direction and distance
          const angle = Math.random() * Math.PI * 2;
          const distance = 10 + Math.random() * 40;
          const tx = Math.cos(angle) * distance;
          const ty = Math.sin(angle) * distance;
          const scale = 0.5 + Math.random() * 1.5;

          splash.style.setProperty("--tx", `${tx}px`);
          splash.style.setProperty("--ty", `${ty}px`);
          splash.style.setProperty("--scale", scale);
          splash.style.left = `${50 + Math.random() * 10 - 5}%`;
          splash.style.top = `${50 + Math.random() * 10 - 5}%`;
          splash.style.animationDuration = `${0.3 + Math.random() * 0.4}s`;
          splash.style.width = `${3 + Math.random() * 8}px`;
          splash.style.height = splash.style.width;
          splash.style.backgroundColor = `rgba(255, 255, 255, ${0.6 + Math.random() * 0.3})`;

          splashContainer.appendChild(splash);
        }
      }

      function animateMilkDrop() {
        const drop = fallingDropRef.current;

        // Reset animation
        drop.style.animation = "none";
        void drop.offsetWidth;

        // Start falling animation
        drop.style.animation = "dropFall 1.2s cubic-bezier(0.42, 0, 0.58, 1) forwards";

        // Create splash when drop hits bottom
        setTimeout(createSplash, 900);

        // Repeat animation
        setTimeout(animateMilkDrop, 3000);
      }

      // Initial animation
      setTimeout(animateMilkDrop, 1000);

      // Click/tap interaction
      milkContainer.addEventListener("click", function () {
        animateMilkDrop();
      });
      
      return () => {
        milkContainer.removeEventListener("click", animateMilkDrop);
      };
    }

    // Initialize word transition with stable positioning
    function initWordTransition() {
      // Create all word elements first
      words1.forEach((word, index) => {
        const wordElement = document.createElement("span");
        wordElement.className = "word milk-text";
        wordElement.textContent = word;
        wordElement.setAttribute("data-text", word);
        wordElement.dataset.index = index;
        typingText.appendChild(wordElement);
      });

      // Set first word as active
      const wordElements = document.querySelectorAll(".typing-text .word");
      wordElements[0].classList.add("active");

      // Start cycling through words
      const wordInterval = setInterval(() => {
        const currentIndex = wordIndex1;
        wordIndex1 = (wordIndex1 + 1) % words1.length;
        const nextIndex = wordIndex1;

        const currentWord = document.querySelector(
          `.typing-text .word[data-index="${currentIndex}"]`
        );
        const nextWord = document.querySelector(
          `.typing-text .word[data-index="${nextIndex}"]`
        );

        if (currentWord && nextWord) {
          currentWord.classList.remove("active");
          currentWord.classList.add("exiting");

          nextWord.classList.add("entering");

          setTimeout(() => {
            nextWord.classList.add("active");
            nextWord.classList.remove("entering");

            setTimeout(() => {
              currentWord.classList.remove("exiting");
            }, 600);
          }, 50);
        }
      }, 2500);
      
      return () => clearInterval(wordInterval);
    }

    // Typing animation function for h2
    function typeHeading2() {
      let currentWord = words2[wordIndex2];
      let charIndex2 = 0;
      let isDeleting2 = false;
      let typingSpeed2 = 100;
      let pauseBetweenWords2 = 1500;
      let isFirstWord2 = true;
      let typingInterval;

      function type() {
        if (isDeleting2) {
          doorstepText.textContent = currentWord.substring(0, charIndex2 - 1);
          charIndex2--;
          typingSpeed2 = 50;
        } else {
          doorstepText.textContent = currentWord.substring(0, charIndex2 + 1);
          charIndex2++;
          typingSpeed2 = isFirstWord2 ? 150 : 100;
        }

        if (!isDeleting2 && charIndex2 === currentWord.length) {
          typingSpeed2 = pauseBetweenWords2;
          isDeleting2 = true;
          isFirstWord2 = false;
        } else if (isDeleting2 && charIndex2 === 0) {
          isDeleting2 = false;
          wordIndex2 = (wordIndex2 + 1) % words2.length;
          currentWord = words2[wordIndex2];
          typingSpeed2 = 500;
        }

        typingInterval = setTimeout(type, typingSpeed2);
      }

      type();
      
      return () => clearTimeout(typingInterval);
    }

    // Handle video responsiveness
    const resizeVideo = () => {
      const videoContainer = document.querySelector(".video-container");
      if (video && videoContainer) {
        const containerWidth = videoContainer.offsetWidth;
        const containerHeight = videoContainer.offsetHeight;

        if (video.videoWidth / video.videoHeight > containerWidth / containerHeight) {
          video.style.width = "100%";
          video.style.height = "auto";
        } else {
          video.style.width = "auto";
          video.style.height = "100%";
        }
      }
    };

    // Add event listeners
    if (video) {
      video.addEventListener("loadedmetadata", resizeVideo);
    }
    
    window.addEventListener("resize", resizeVideo);

    // Start animations
    const wordTransitionTimeout = setTimeout(initWordTransition, 1000);
    const typeHeadingTimeout = setTimeout(typeHeading2, 1500);
    const dropAnimationCleanup = initMilkDropAnimation();
    createMilkBubbles();

    // Cleanup
    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", resizeVideo);
      }
      window.removeEventListener("resize", resizeVideo);
      
      clearTimeout(wordTransitionTimeout);
      clearTimeout(typeHeadingTimeout);
      if (dropAnimationCleanup) dropAnimationCleanup();
    };
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" id="hero-section">
      <div className="video-container">
        <video autoPlay muted loop id="hero-video" playsInline ref={videoRef}>
          <source src="./hero section - video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-text milk-text" data-text="Pure">Pure</span>
          <div className="milk-drop-container" id="milk-drop-container" ref={milkContainerRef}>
            <img
              src="./milk drop.png"
              className="milk-drop-falling"
              alt="Milk Drop"
              id="falling-drop"
              ref={fallingDropRef}
            />
            <div className="splash-container" id="splash-container" ref={splashContainerRef}></div>
          </div>
          <span className="typing-container">
            <span className="typing-text milk-text" id="typing-text" ref={typingTextRef}></span>
          </span>

          {/* Milk bubbles animation */}
          <div className="milk-bubbles" id="milk-bubbles" ref={milkBubblesRef}></div>
        </h1>

        <h2 className="hero-subtitle">
          <span className="subtitle-text">Straight from the Farm to your</span>
          <span className="doorstep-container">
            <span className="doorstep-typing creamy-underline" id="doorstep-text" ref={doorstepTextRef}></span>
          </span>
        </h2>

        <div className="app-buttons">
          <a href="#" className="app-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Get on Google Play"
              className="store-badge"
            />
          </a>
          <a href="#" className="app-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
              alt="Download on the App Store"
              className="store-badge"
            />
          </a>
        </div>
      </div>

      <div className="scroll-down" onClick={scrollToNextSection}>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default Hero;