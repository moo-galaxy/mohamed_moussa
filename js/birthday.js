// ==========================================
// BIRTHDAY & AGE CALCULATION SYSTEM
// ==========================================

const BirthdaySystem = (() => {
    // Configuration
    const BIRTH_DATE = new Date(2006, 2, 23); // Month is 0-indexed: 2 = March
    const BIRTH_DAY = 23;
    const BIRTH_MONTH = 2; // 0-indexed (2 = March)
    
    // Language management
    let currentLanguage = 'en';
    
    const translations = {
        en: {
            myJourney: 'MY JOURNEY',
            yearsOld: 'YEARS OLD',
            ageLabel: 'AGE',
            nextBirthday: 'NEXT BIRTHDAY',
            days: 'DAYS',
            hours: 'HOURS',
            minutes: 'MINUTES',
            seconds: 'SECONDS',
            happyBirthday: '🎉 Happy Birthday Mohamed!',
            birthdayMessage: 'Wishing you an amazing year ahead!',
            progressLabel: 'Birthday Progress',
            years: 'Years',
            months: 'Months',
            daysLabel: 'Days'
        },
        ar: {
            myJourney: 'رحلتي',
            yearsOld: 'سنة',
            ageLabel: 'العمر',
            nextBirthday: 'عيد ميلادي القادم',
            days: 'يوم',
            hours: 'ساعة',
            minutes: 'دقيقة',
            seconds: 'ثانية',
            happyBirthday: '🎉 عيد ميلاد سعيد يا محمد!',
            birthdayMessage: 'أتمنى لك عاماً رائعاً قادماً!',
            progressLabel: 'تقدم عيد الميلاد',
            years: 'سنة',
            months: 'شهر',
            daysLabel: 'يوم'
        }
    };
    
    // DOM Elements cache
    let elements = {};
    
    // Calculate exact age (years, months, days)
    function calculateExactAge(birthDate, currentDate) {
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();
        
        // Adjust for negative days
        if (days < 0) {
            months--;
            // Get days in previous month
            const prevMonth = new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                0
            );
            days += prevMonth.getDate();
        }
        
        // Adjust for negative months
        if (months < 0) {
            years--;
            months += 12;
        }
        
        return { years, months, days };
    }
    
    // Get next birthday date
    function getNextBirthday(currentDate) {
        const currentYear = currentDate.getFullYear();
        let nextBirthday = new Date(currentYear, BIRTH_MONTH, BIRTH_DAY);
        
        // If birthday has passed this year, use next year
        if (currentDate > nextBirthday) {
            nextBirthday = new Date(currentYear + 1, BIRTH_MONTH, BIRTH_DAY);
        }
        
        return nextBirthday;
    }
    
    // Get last birthday
    function getLastBirthday(currentDate) {
        const currentYear = currentDate.getFullYear();
        let lastBirthday = new Date(currentYear, BIRTH_MONTH, BIRTH_DAY);
        
        // If birthday hasn't occurred this year, use previous year
        if (currentDate < lastBirthday) {
            lastBirthday = new Date(currentYear - 1, BIRTH_MONTH, BIRTH_DAY);
        }
        
        return lastBirthday;
    }
    
    // Check if today is birthday
    function isBirthday(currentDate) {
        return currentDate.getDate() === BIRTH_DAY && 
               currentDate.getMonth() === BIRTH_MONTH;
    }
    
    // Calculate countdown
    function calculateCountdown(targetDate, currentDate) {
        const difference = targetDate - currentDate;
        
        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
        }
        
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        return { days, hours, minutes, seconds, total: difference };
    }
    
    // Calculate progress percentage (0-100)
    function calculateProgress(currentDate, nextBirthday, lastBirthday) {
        const totalYear = nextBirthday - lastBirthday;
        const elapsed = currentDate - lastBirthday;
        const progress = (elapsed / totalYear) * 100;
        
        return Math.min(Math.max(progress, 0), 100);
    }
    
    // Format number with leading zero
    function padNumber(num) {
        return num.toString().padStart(2, '0');
    }
    
    // Update the DOM
    function updateDisplay() {
        const now = new Date();
        const exactAge = calculateExactAge(BIRTH_DATE, now);
        const nextBirthday = getNextBirthday(now);
        const lastBirthday = getLastBirthday(now);
        const countdown = calculateCountdown(nextBirthday, now);
        const progress = calculateProgress(now, nextBirthday, lastBirthday);
        const birthdayToday = isBirthday(now);
        const t = translations[currentLanguage];
        
        // Update age display
        if (elements.ageYears) {
            elements.ageYears.textContent = exactAge.years;
        }
        
        // Update exact age display
        if (elements.exactAge) {
            elements.exactAge.textContent = 
                `${exactAge.years} ${t.years} • ${exactAge.months} ${t.months} • ${exactAge.days} ${t.daysLabel}`;
        }
        
        // Update labels with translations
        document.querySelectorAll('[data-key="myJourney"]').forEach(el => {
            el.textContent = t.myJourney;
        });
        document.querySelectorAll('[data-key="yearsOld"]').forEach(el => {
            el.textContent = t.yearsOld;
        });
        document.querySelectorAll('[data-key="nextBirthday"]').forEach(el => {
            el.textContent = t.nextBirthday;
        });
        document.querySelectorAll('[data-key="progressLabel"]').forEach(el => {
            el.textContent = t.progressLabel;
        });
        
        // Update countdown
        if (elements.countdown) {
            if (birthdayToday) {
                elements.countdown.innerHTML = `
                    <div class="birthday-celebration">
                        <h3>${t.happyBirthday}</h3>
                        <p>${t.birthdayMessage}</p>
                    </div>
                `;
            } else {
                elements.countdown.innerHTML = `
                    <div class="countdown-item">
                        <span class="countdown-number">${padNumber(countdown.days)}</span>
                        <span class="countdown-label">${t.days}</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${padNumber(countdown.hours)}</span>
                        <span class="countdown-label">${t.hours}</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${padNumber(countdown.minutes)}</span>
                        <span class="countdown-label">${t.minutes}</span>
                    </div>
                    <div class="countdown-item">
                        <span class="countdown-number">${padNumber(countdown.seconds)}</span>
                        <span class="countdown-label">${t.seconds}</span>
                    </div>
                `;
            }
        }
        
        // Update progress ring
        if (elements.progressRing) {
            const circumference = 2 * Math.PI * 52; // radius = 52
            const offset = circumference - (progress / 100) * circumference;
            elements.progressRing.style.strokeDasharray = `${circumference}`;
            elements.progressRing.style.strokeDashoffset = `${offset}`;
        }
        
        // Update progress percentage
        if (elements.progressPercent) {
            elements.progressPercent.textContent = `${Math.round(progress)}%`;
        }
    }
    
    // Update language
    function updateLanguage(lang) {
        currentLanguage = lang;
        updateDisplay();
    }
    
    // Initialize the system
    function init() {
        // Cache DOM elements
        elements = {
            ageYears: document.getElementById('ageYears'),
            exactAge: document.getElementById('exactAge'),
            countdown: document.getElementById('birthdayCountdown'),
            progressRing: document.getElementById('progressRing'),
            progressPercent: document.getElementById('progressPercent')
        };
        
        // Only proceed if birthday section exists
        if (!elements.ageYears || !elements.countdown) {
            return;
        }
        
        // Initial update
        updateDisplay();
        
        // Update every second
        setInterval(updateDisplay, 1000);
        
        // Listen for language changes
        document.addEventListener('languageChanged', (e) => {
            updateLanguage(e.detail.language);
        });
    }
    
    // Public API
    return {
        init,
        updateLanguage,
        calculateExactAge,
        getNextBirthday,
        isBirthday,
        calculateCountdown
    };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => BirthdaySystem.init());
} else {
    BirthdaySystem.init();
}