// Form submission handler
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });

        // Carousel functionality
        const carouselContainer = document.getElementById('carouselContainer');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const totalCards = 5;
        let currentIndex = 0;

        // Function to get number of visible cards based on screen size
        function getVisibleCards() {
            if (window.innerWidth >= 1024) {
                return 3; // Desktop
            } else if (window.innerWidth >= 768) {
                return 2; // Tablet
            } else {
                return 1; // Mobile
            }
        }

        // Function to update carousel position
        function updateCarousel() {
            const visibleCards = getVisibleCards();
            const cardWidth = carouselContainer.querySelector('.carousel-card').offsetWidth;
            const gap = 30;
            const offset = currentIndex * (cardWidth + gap);
            
            carouselContainer.style.transform = `translateX(-${offset}px)`;
            
            // Update button states
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= totalCards - visibleCards;
        }

        // Previous button click - scroll one card at a time
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        // Next button click - scroll one card at a time
        nextBtn.addEventListener('click', () => {
            const visibleCards = getVisibleCards();
            if (currentIndex < totalCards - visibleCards) {
                currentIndex++;
                updateCarousel();
            }
        });

        // Handle window resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                const visibleCards = getVisibleCards();
                // Adjust currentIndex if necessary
                if (currentIndex > totalCards - visibleCards) {
                    currentIndex = Math.max(0, totalCards - visibleCards);
                }
                updateCarousel();
            }, 200);
        });

        // Initialize carousel
        updateCarousel();