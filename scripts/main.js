```javascript
// Initialize the menu bar
function initMenu() {
    const menu = document.getElementById('menu');
    const menuItems = menu.getElementsByTagName('a');

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function(event) {
            event.preventDefault();
            document.getElementById(this.getAttribute('href').substring(1)).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// Initialize the call-to-action button
function initCTA() {
    const ctaButton = document.getElementById('cta-button');
    ctaButton.addEventListener('click', function() {
        window.location.href = 'pricing.html';
    });
}

// Send a message when a page is fully loaded
window.addEventListener('load', function() {
    console.log('pageLoad');
});

// Send a message when the call-to-action button is clicked
document.getElementById('cta-button').addEventListener('click', function() {
    console.log('ctaClick');
});

// Call the initialization functions
initMenu();
initCTA();
```