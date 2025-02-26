// Set the date we're counting down to (30 days from now)
const countDownDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000;

// Update the countdown every second
const countdownTimer = setInterval(() => {
    // Get current date and time
    const now = new Date().getTime();
    
    // Calculate the remaining time
    const distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the results
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    
    // If the countdown is finished, clear the interval
    if (distance < 0) {
        clearInterval(countdownTimer);
        document.querySelector('.countdown').innerHTML = '<h2>Launch Time!</h2>';
    }
}, 1000);

// Email subscription handling
document.getElementById('notify-me').addEventListener('click', async () => {
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    
    // Basic email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Here you would typically send the email to your backend
    // For now, we'll just show a success message
    try {
        // Simulating an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        alert('Thank you for subscribing! We\'ll notify you when we launch.');
        emailInput.value = '';
    } catch (error) {
        alert('Something went wrong. Please try again later.');
    }
});