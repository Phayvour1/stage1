document.addEventListener('DOMContentLoaded', function() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    
    function updateTimeAndDay() {
        const now = new Date();
       

        const options = { weekday: 'long' };
        
        // Format time in HH:MM:SS AM/PM format
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // The hour '0' should be '12'
        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        
        // Display current time and day
        currentTimeElement.textContent = `${timeString} UTC+1`;
        currentDayElement.textContent = new Intl.DateTimeFormat('en-GB', options).format(now);
    }

    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000); // Update every second
});
