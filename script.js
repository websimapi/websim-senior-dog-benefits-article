document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for better reading experience
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Handle expandable tips functionality
    const expandTipsBtn = document.getElementById('expandTipsBtn');
    const tipsList = document.getElementById('tipsList');
    
    if (expandTipsBtn && tipsList) {
        expandTipsBtn.addEventListener('click', function() {
            tipsList.classList.toggle('expanded');
            
            if (tipsList.classList.contains('expanded')) {
                expandTipsBtn.textContent = 'Show Fewer Tips';
                expandTipsBtn.setAttribute('aria-expanded', 'true');
            } else {
                expandTipsBtn.textContent = 'Show All Tips';
                expandTipsBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Add a simple 'back to top' button that appears when scrolling
    const createBackToTopButton = () => {
        const button = document.createElement('button');
        button.innerHTML = '↑ Top';
        button.className = 'back-to-top';
        button.style.display = 'none';
        button.style.position = 'fixed';
        button.style.bottom = '20px';
        button.style.right = '20px';
        button.style.padding = '10px 15px';
        button.style.backgroundColor = '#446688';
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.opacity = '0.8';
        button.style.transition = 'opacity 0.3s';
        button.style.zIndex = '1000';
        button.style.fontSize = '16px';
        
        button.addEventListener('mouseover', () => {
            button.style.opacity = '1';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.opacity = '0.8';
        });
        
        button.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        document.body.appendChild(button);
        return button;
    };
    
    const backToTopButton = createBackToTopButton();
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    // Add focus styling for better accessibility
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('focus', () => {
            element.style.outline = '3px solid #668844';
            element.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', () => {
            element.style.outline = 'none';
        });
    });
    
    // Optional: Add font size controls for elderly readers
    const addFontSizeControls = () => {
        const controls = document.createElement('div');
        controls.className = 'font-size-controls';
        controls.style.position = 'fixed';
        controls.style.top = '20px';
        controls.style.right = '20px';
        controls.style.backgroundColor = 'white';
        controls.style.padding = '5px';
        controls.style.borderRadius = '5px';
        controls.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
        controls.style.zIndex = '1000';
        controls.style.display = 'flex';
        controls.style.alignItems = 'center';
        
        const label = document.createElement('span');
        label.textContent = 'Text Size: ';
        label.style.marginRight = '8px';
        label.style.fontSize = '14px';
        controls.appendChild(label);
        
        const decreaseBtn = document.createElement('button');
        decreaseBtn.textContent = 'A-';
        decreaseBtn.style.marginRight = '5px';
        decreaseBtn.style.padding = '5px 10px';
        decreaseBtn.style.backgroundColor = '#eee';
        decreaseBtn.style.border = 'none';
        decreaseBtn.style.borderRadius = '3px';
        decreaseBtn.style.cursor = 'pointer';
        controls.appendChild(decreaseBtn);
        
        const increaseBtn = document.createElement('button');
        increaseBtn.textContent = 'A+';
        increaseBtn.style.padding = '5px 10px';
        increaseBtn.style.backgroundColor = '#eee';
        increaseBtn.style.border = 'none';
        increaseBtn.style.borderRadius = '3px';
        increaseBtn.style.cursor = 'pointer';
        controls.appendChild(increaseBtn);
        
        document.body.appendChild(controls);
        
        // Store the current font size multiplier
        let fontSizeMultiplier = 1;
        
        decreaseBtn.addEventListener('click', () => {
            if (fontSizeMultiplier > 0.8) {
                fontSizeMultiplier -= 0.1;
                document.body.style.fontSize = `${fontSizeMultiplier * 18}px`;
            }
        });
        
        increaseBtn.addEventListener('click', () => {
            if (fontSizeMultiplier < 1.5) {
                fontSizeMultiplier += 0.1;
                document.body.style.fontSize = `${fontSizeMultiplier * 18}px`;
            }
        });
    };
    
    addFontSizeControls();
});