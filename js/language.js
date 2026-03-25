// Language texts
const texts = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        skills: "Skills",
        services: "Services",
        journey: "Journey",
        books: "Books",
        certificates: "Certificates",
        projects: "Projects",
        contact: "Contact",

        // Hero Section
        heroTitle: "Sales Professional & Aspiring Developer",
        heroDescription: "Passionate about technology, communication, and continuous learning. I'm currently honing my persuasion and communication skills in sales while continuing my journey in programming and search engine optimization.",
        contactMe: "Contact Me",

        // About Section
        aboutTitle: "About Me",
        aboutText1: "Hello! I'm Mohamed Reda Moussa, a twenty-year-old from El Dakahlia, Belqas, Egypt. I currently work as a sales representative at Tie House to improve my communication and persuasion skills.",
        aboutText2: "I've explored many technology fields including front-end development, back-end development, and ethical hacking. Currently, I'm focusing on learning SEO to expand my digital skills.",
        aboutText3: "My goal is to become the best version of myself and establish my own business in the programming field within the next three years.",

        // Skills Section
        skillsTitle: "My Skills",
        skill1Title: "Communication & Sales",
        skill1Desc: "Developing strong persuasion and communication abilities through my current sales role at Tie House.",
        skill2Title: "Computer Skills",
        skill2Desc: "Proficient in Microsoft Office Suite (Word, Excel, PowerPoint) and Adobe Photoshop.",
        skill3Title: "Programming Basics",
        skill3Desc: "Knowledge of Python for data analysis and exploring front-end and back-end development concepts.",
        skill4Title: "SEO & Digital Marketing",
        skill4Desc: "Currently learning search engine optimization and digital marketing strategies.",
        skill5Title: "Soft Skills",
        skill5Desc: "Strong commitment, teamwork capabilities, and effective communication in both Arabic and English.",
        skill6Title: "Fast Learning",
        skill6Desc: "Quick to adapt and learn new technologies and methodologies in the constantly evolving tech landscape.",

        // Services Section
        servicesTitle: "My Services",
        service1Title: "SEO Services",
        service1Desc: "I provide comprehensive SEO services to improve your website's search engine visibility, increase organic traffic, and enhance your online presence.",
        service2Title: "Python Automation",
        service2Desc: "I develop custom Python programs to automate customer service tasks, including extracting customer data from Excel sheets and sending personalized messages.",
        service3Title: "Excel Data Solutions",
        service3Desc: "I create specialized programs to streamline Excel data handling, making it easier for business owners to efficiently manage and analyze their information.",
        service4Title: "Web Development",
        service4Desc: "I build responsive and modern websites using various programming languages as well as WordPress, specifically designed to meet your business needs.",

        // Journey Section
        journeyTitle: "My Journey",
        journey1Title: "Education",
        journey1Desc: "I hold a diploma in Agriculture (Intermediate Education) from Belqas Agricultural Secondary School.",
        journey1Grade: "Overall Grade: Excellent",
        journey2Title: "Courses & Certificates",
        journey2Desc: "I completed various courses including Digital Fabrication, Digital Marketing, Computer Applications, Human Resources, IC3 Certificate, General English, Business Administration, SEO, Freelance Skills, Python Basics, and Content Creation.",
        journey3Title: "Programming Exploration",
        journey3Desc: "I started my technology journey by exploring front-end development, then back-end development, and ethical hacking. I'm currently focusing on SEO and digital skills.",
        journey4Title: "Sales Experience",
        journey4Desc: "I currently work as a sales representative at Tie House to improve communication and persuasion skills while continuing my professional goals in technology.",
        journey5Title: "Future Goals",
        journey5Desc: "Planning to establish my own business in the programming field and build a successful career in freelancing within the next three years.",

        // Books Section
        booksTitle: "Books I've Read",
        book1Title: "الدحيح",
        book1Author: "طاهر المعتزبالله",
        book1Desc: "كتاب يتناول مواضيع علمية وثقافية بطريقة مبسطة وممتعة.",
        book2Title: "مالا يسع المسلم جهلة",
        book2Author: "د.عبدالله الصالح, د.صلاح الصاوي",
        book2Desc: "كتاب يشرح الأساسيات التي يجب على كل مسلم معرفتها في دينه.",
        book3Title: "The Mistakes",
        book3Author: "صلاح ابوالمجد",
        book3Desc: "كتاب يتناول الأخطاء الشائعة وكيفية تجنبها في الحياة والعمل.",
        book4Title: "How to Sell Anything to Anybody",
        book4Author: "Joe Girard",
        book4Desc: "كتاب في فنون البيع والتسويق من أشهر بائع سيارات في العالم.",
        book5Title: "The Subtle Art of Not Giving a F*ck",
        book5Author: "Mark Manson",
        book5Desc: "كتاب في التنمية الذاتية يتناول أهمية تحديد الأولويات في الحياة.",
        book6Title: "The Power of Your Subconscious Mind",
        book6Author: "Joseph Murphy",
        book6Desc: "كتاب كلاسيكي في قوة العقل الباطن وتأثيره على حياتنا.",
        book7Title: "Atomic Habits",
        book7Author: "James Clear",
        book7Desc: "كتاب رائد في بناء العادات الصغيرة التي تؤدي إلى تغييرات كبيرة.",
        book8Title: "تعلم بايثون",
        book8Author: "إبراهيم عادل",
        book8Desc: "كتاب تعليمي للمبتدئين في لغة البرمجة بايثون.",

        // Certificates Section
        certificatesTitle: "My Certificates",
        cert1Title: "Time Management & Productivity",
        cert1Desc: "Successfully participated in the Time Management and Productivity course",
        cert1Date: "Issue Date: 2025-09-09",
        cert2Title: "Digital Fabrication Workshop",
        cert2Desc: "Successfully completed a one-day workshop in Digital Fabrication",
        cert2Org: "Creative Mansoura FabLab",
        cert3Title: "Design Your Dream Career Training",
        cert3Desc: "Successfully completed a three-day training in designing your dream career path",
        cert3Org: "Creativa",
        cert4Title: "Business Administration",
        cert4Desc: "Successfully completed the Business Administration course with Excellent grade",
        cert4Date: "Issue Date: February 2024",
        cert5Title: "Digital Marketing Fundamentals",
        cert5Desc: "Successfully completed a one-day workshop in Digital Marketing Fundamentals",
        cert5Org: "Creativa",
        cert6Title: "Freelance Bootcamp",
        cert6Desc: "Successfully completed a three-day workshop in freelance development",
        cert6Org: "Creativa",
        cert7Title: "Advanced Computer Applications",
        cert7Desc: "Successfully completed the Advanced Computer Applications and IT training package",
        cert7Date: "Issue Date: January 2024",
        cert8Title: "Internet Core Competency Certification (IC3)",
        cert8Desc: "Successfully completed the IC3 certification with Excellent grade",
        cert8Date: "Issue Date: February 2024",
        cert9Title: "General English",
        cert9Desc: "Successfully completed the General English course with Excellent grade",
        cert9Date: "Issue Date: March 2024",
        cert10Title: "Human Resources",
        cert10Desc: "Successfully completed the Human Resources course with Excellent grade",
        cert10Date: "Issue Date: March 2024",

        // Projects Section
        projectsTitle: "My Projects",
        project1Title: "E-Commerce Website",
        project1Desc: "A fully responsive e-commerce website built with HTML, CSS, and JavaScript",
        project1Link: "View Project",
        project2Title: "Python Automation Tool",
        project2Desc: "Automated Excel data processing tool using Python and Pandas",
        project2Link: "View Project",
        project3Title: "Portfolio Website",
        project3Desc: "Modern portfolio website with dark mode and responsive design",
        project3Link: "View Project",

        // Contact Section
        contactTitle: "Contact Me",
        phoneTitle: "Phone",
        emailTitle: "Email",
        locationTitle: "Location",
        locationText: "El Dakahlia, Belqas, Egypt",
        formName: "Name",
        formEmail: "Email",
        formSubject: "Subject",
        formMessage: "Message",
        formSubmit: "Send Message",

        // Footer
        footerText: "Sales professional and aspiring developer passionate about technology, communication, and continuous learning. Let's work together to turn your ideas into reality!"
    },
    ar: {
        // Navigation
        home: "الرئيسية",
        about: "عني",
        skills: "المهارات",
        services: "الخدمات",
        journey: "رحلتي",
        books: "الكتب",
        certificates: "الشهادات",
        projects: "المشاريع",
        contact: "اتصل بي",

        // Hero Section
        heroTitle: "محترف مبيعات ومطور طموح",
        heroDescription: "شغوف بالتكنولوجيا والتواصل والتعلم المستمر. أحسن حاليًا مهارات الإقناع والتواصل في المبيعات بينما أواصل رحلتي في البرمجة وتحسين محركات البحث.",
        contactMe: "تواصل معي",

        // About Section
        aboutTitle: "عني",
        aboutText1: "مرحبًا! أنا محمد رضا موسى، شاب في العشرين من عمري من الدقهلية، بلقاس، مصر. أعمل حاليًا كمندوب مبيعات في Tie House لتحسين مهاراتي في التواصل والإقناع.",
        aboutText2: "لقد استكشفت العديد من مجالات التكنولوجيا بما في ذلك تطوير الواجهات الأمامية، تطوير الواجهات الخلفية، والقرصنة الأخلاقية. حاليًا، أركز على تعلم SEO لتوسيع مهاراتي الرقمية.",
        aboutText3: "هدفي هو أن أصبح أفضل نسخة من نفسي وأنشئ عملي الخاص في مجال البرمجة خلال السنوات الثلاث القادمة.",

        // Skills Section
        skillsTitle: "مهاراتي",
        skill1Title: "التواصل والمبيعات",
        skill1Desc: "تطوير قدرات قوية في الإقناع والتواصل من خلال دوري الحالي في المبيعات في Tie House.",
        skill2Title: "مهارات الكمبيوتر",
        skill2Desc: "متمكن في Microsoft Office Suite (Word, Excel, PowerPoint) و Adobe Photoshop.",
        skill3Title: "أساسيات البرمجة",
        skill3Desc: "معرفة بلغة Python لتحليل البيانات واستكشاف مفاهيم تطوير الواجهات الأمامية والخلفية.",
        skill4Title: "SEO والتسويق الرقمي",
        skill4Desc: "أتعلم حاليًا تحسين محركات البحث واستراتيجيات التسويق الرقمي.",
        skill5Title: "المهارات الشخصية",
        skill5Desc: "التزام قوي، قدرات العمل الجماعي، والتواصل الفعال باللغتين العربية والإنجليزية.",
        skill6Title: "سرعة التعلم",
        skill6Desc: "سريع في التكيف وتعلم التقنيات والمنهجيات الجديدة في المشهد التكنولوجي المتطور باستمرار.",

        // Services Section
        servicesTitle: "خدماتي",
        service1Title: "خدمات SEO",
        service1Desc: "أقدم خدمات SEO شاملة لتحسين ظهور موقعك على محركات البحث، وزيادة الزيارات العضوية، وتعزيز وجودك على الإنترنت.",
        service2Title: "أتمتة بايثون",
        service2Desc: "أطور برامج بايثون مخصصة لأتمتة مهام خدمة العملاء، بما في ذلك استخراج بيانات العملاء من جداول Excel وإرسال رسائل مخصصة.",
        service3Title: "حلول بيانات Excel",
        service3Desc: "أقوم بإنشاء برامج متخصصة لتبسيط التعامل مع البيانات في Excel، مما يسهل على أصحاب الأعمال إدارة وتحليل معلوماتهم بكفاءة.",
        service4Title: "تطوير المواقع",
        service4Desc: "أبني مواقع ويب متجاوبة وعصرية باستخدام لغات برمجة مختلفة بالإضافة إلى WordPress، مصممة خصيصًا لتلبية احتياجات عملك.",

        // Journey Section
        journeyTitle: "رحلتي",
        journey1Title: "التعليم",
        journey1Desc: "حاصل علي دبلوم زراعة (التعليم المتوسط) من المدرسة الثانوية الزراعية ببلقاس.",
        journey1Grade: "التقدير العام: ممتاز",
        journey2Title: "الدورات والشهادات",
        journey2Desc: "أكملت دورات مختلفة بما في ذلك التصنيع الرقمي، التسويق الرقمي، تطبيقات الكمبيوتر، الموارد البشرية، شهادة IC3، اللغة الإنجليزية العامة، إدارة الأعمال، SEO، مهارات العمل الحر، أساسيات بايثون، وإنشاء المحتوى.",
        journey3Title: "استكشاف البرمجة",
        journey3Desc: "بدأت رحلتي في التكنولوجيا باستكشاف تطوير الواجهات الأمامية، ثم تطوير الواجهات الخلفية، والقرصنة الأخلاقية. أركز حاليًا على SEO والمهارات الرقمية.",
        journey4Title: "خبرة المبيعات",
        journey4Desc: "أعمل حاليًا كمندوب مبيعات في Tie House لتحسين مهارات التواصل والإقناع بينما أواصل أهدافي المهنية في التكنولوجيا.",
        journey5Title: "الأهداف المستقبلية",
        journey5Desc: "التخطيط لإنشاء عملي الخاص في مجال البرمجة وبناء مسيرة مهنية ناجحة في العمل الحر خلال السنوات الثلاث القادمة.",

        // Books Section
        booksTitle: "الكتب التي قرأتها",
        book1Title: "الدحيح",
        book1Author: "طاهر المعتزبالله",
        book1Desc: "كتاب يتناول مواضيع علمية وثقافية بطريقة مبسطة وممتعة.",
        book2Title: "مالا يسع المسلم جهلة",
        book2Author: "د.عبدالله الصالح, د.صلاح الصاوي",
        book2Desc: "كتاب يشرح الأساسيات التي يجب على كل مسلم معرفتها في دينه.",
        book3Title: "The Mistakes",
        book3Author: "صلاح ابوالمجد",
        book3Desc: "كتاب يتناول الأخطاء الشائعة وكيفية تجنبها في الحياة والعمل.",
        book4Title: "How to Sell Anything to Anybody",
        book4Author: "Joe Girard",
        book4Desc: "كتاب في فنون البيع والتسويق من أشهر بائع سيارات في العالم.",
        book5Title: "The Subtle Art of Not Giving a F*ck",
        book5Author: "Mark Manson",
        book5Desc: "كتاب في التنمية الذاتية يتناول أهمية تحديد الأولويات في الحياة.",
        book6Title: "The Power of Your Subconscious Mind",
        book6Author: "Joseph Murphy",
        book6Desc: "كتاب كلاسيكي في قوة العقل الباطن وتأثيره على حياتنا.",
        book7Title: "Atomic Habits",
        book7Author: "James Clear",
        book7Desc: "كتاب رائد في بناء العادات الصغيرة التي تؤدي إلى تغييرات كبيرة.",
        book8Title: "تعلم بايثون",
        book8Author: "إبراهيم عادل",
        book8Desc: "كتاب تعليمي للمبتدئين في لغة البرمجة بايثون.",

        // Certificates Section
        certificatesTitle: "شهاداتي",
        cert1Title: "إدارة الوقت وزيادة الإنتاجية",
        cert1Desc: "شاركت بنجاح في دورة إدارة الوقت وزيادة الإنتاجية",
        cert1Date: "تاريخ الإصدار: 2025-09-09",
        cert2Title: "ورشة التصنيع الرقمي",
        cert2Desc: "أكملت بنجاح ورشة عمل ليوم واحد في التصنيع الرقمي",
        cert2Org: "Creative Mansoura FabLab",
        cert3Title: "تدريب تصميم مسارك المهني الحلم",
        cert3Desc: "أكملت بنجاح تدريب لمدة ثلاثة أيام في تصميم مسارك المهني الحلم",
        cert3Org: "Creativa",
        cert4Title: "إدارة الأعمال",
        cert4Desc: "أكملت بنجاح دورة إدارة الأعمال بتقدير ممتاز",
        cert4Date: "تاريخ الإصدار: فبراير 2024",
        cert5Title: "أساسيات التسويق الرقمي",
        cert5Desc: "أكملت بنجاح ورشة عمل ليوم واحد في أساسيات التسويق الرقمي",
        cert5Org: "Creativa",
        cert6Title: "معسكر العمل الحر",
        cert6Desc: "أكملت بنجاح ورشة عمل لمدة ثلاثة أيام في تطوير العمل الحر",
        cert6Org: "Creativa",
        cert7Title: "تطبيقات الكمبيوتر المتقدمة",
        cert7Desc: "أكملت بنجاح حزمة التدريب المتقدم في تطبيقات الكمبيوتر وتكنولوجيا المعلومات",
        cert7Date: "تاريخ الإصدار: يناير 2024",
        cert8Title: "شهادة الكفاءة الأساسية في الإنترنت (IC3)",
        cert8Desc: "أكملت بنجاح شهادة IC3 بتقدير ممتاز",
        cert8Date: "تاريخ الإصدار: فبراير 2024",
        cert9Title: "اللغة الإنجليزية العامة",
        cert9Desc: "أكملت بنجاح دورة اللغة الإنجليزية العامة بتقدير ممتاز",
        cert9Date: "تاريخ الإصدار: مارس 2024",
        cert10Title: "الموارد البشرية",
        cert10Desc: "أكملت بنجاح دورة الموارد البشرية بتقدير ممتاز",
        cert10Date: "تاريخ الإصدار: مارس 2024",

        // Projects Section
        projectsTitle: "مشاريعي",
        project1Title: "موقع تجارة إلكترونية",
        project1Desc: "موقع تجارة إلكترونية متجاوب بالكامل باستخدام HTML و CSS و JavaScript",
        project1Link: "عرض المشروع",
        project2Title: "أداة أتمتة بايثون",
        project2Desc: "أداة معالجة بيانات Excel آلية باستخدام Python و Pandas",
        project2Link: "عرض المشروع",
        project3Title: "موقع بورتفوليو",
        project3Desc: "موقع بورتفوليو حديث مع وضع مظلم وتصميم متجاوب",
        project3Link: "عرض المشروع",

        // Contact Section
        contactTitle: "تواصل معي",
        phoneTitle: "الهاتف",
        emailTitle: "البريد الإلكتروني",
        locationTitle: "الموقع",
        locationText: "الدقهلية، بلقاس، مصر",
        formName: "الاسم",
        formEmail: "البريد الإلكتروني",
        formSubject: "الموضوع",
        formMessage: "الرسالة",
        formSubmit: "إرسال الرسالة",

        // Footer
        footerText: "محترف مبيعات ومطور طموح شغوف بالتكنولوجيا والتواصل والتعلم المستمر. دعنا نعمل معًا لتحويل أفكارك إلى واقع!"
    }
};

// Current language
let currentLang = 'en';

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;

    // Update HTML direction and lang attribute
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (texts[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                if (element.placeholder !== undefined) {
                    element.placeholder = texts[lang][key];
                }
            } else {
                element.textContent = texts[lang][key];
            }
        }
    });

    // Update language toggle button text
    const languageText = document.getElementById('languageText');
    if (languageText) {
        languageText.textContent = lang === 'en' ? 'العربية' : 'English';
    }
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en');
});

// Language toggle event
const languageToggle = document.getElementById('languageToggle');
if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        changeLanguage(newLang);
    });
}