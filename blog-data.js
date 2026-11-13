/* Lightweight JSON array of blogs */
const blogs = [
    {
        title: "Olympiad Exams in November 2026: Your Final-Week Revision Checklist (IEO, ISO, IMO)",
        excerpt: "IEO, ISO (NSO), IHO and IMO all fall in the next few weeks. Here's exactly what to revise, what to skip, and how to spend your final 7 days before the exam.",
        date: "November 13, 2026",
        readTime: "7 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-november-2026-final-week-revision-checklist.html"
    },
    {
        title: "Olympiad Exam Schedule 2026-27: Every Upcoming Date You Need to Know",
        excerpt: "The complete, officially-sourced schedule for every SOF Olympiad exam this year - IMO, NSO (ISO), IEO, IGKO, ICSO, ISSO, IHO and ICO - plus registration deadlines and Level 2 dates.",
        date: "September 9, 2026",
        readTime: "9 min read",
        category: "General",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-olympiad-exam-schedule-2026-27.html"
    },
    {
        title: "Ultimate Guide to Acing the Maths Olympiad (IMO)",
        excerpt: "Master number systems, geometry, and the Achievers Section with proven strategies to secure a top International Rank in the IMO.",
        date: "August 08, 2026",
        readTime: "7 min read",
        category: "Maths",
        image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-maths-olympiad-preparation-guide.html"
    },
    {
        title: "How to Crack IMO Level 2: The Ultimate Strategy Guide",
        excerpt: "Qualified for IMO Level 2? This expert guide covers the exact exam pattern shift, Achievers section mastery, multi-concept problem-solving, the 30-day revision blueprint, and the top mistakes that cost students their International Rank.",
        date: "July 13, 2026",
        readTime: "12 min read",
        category: "Maths",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-how-to-crack-imo-level-2.html"
    },
    {
        title: "How to Choose the Right Olympiad Exam for Your Child",
        excerpt: "SOF, Silverzone, CREST, or NSTSE? Confused about which Olympiad to pick? A complete comparison guide to help parents and students choose the right exam by difficulty, subject fit, cost, and rewards.",
        date: "July 6, 2026",
        readTime: "9 min read",
        category: "General",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-choosing-right-olympiad.html"
    },
    {
        title: "How to Improve Speed and Accuracy in Olympiad Exams",
        excerpt: "Struggling to finish your Olympiad paper on time? Learn battle-tested techniques to dramatically improve your answering speed and accuracy without sacrificing marks.",
        date: "June 23, 2026",
        readTime: "8 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-improve-speed-accuracy-olympiad.html"
    },
    {
        title: "Spaced Repetition: The Ultimate Memory Technique for Olympiad Toppers",
        excerpt: "Stop forgetting what you study. Learn how spaced repetition — the science-backed memory technique used by IIT toppers — can transform your Olympiad and JEE/NEET preparation forever.",
        date: "June 21, 2026",
        readTime: "9 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-spaced-repetition-olympiad.html"
    },
    {
        title: "How to Crack NEET: A Comprehensive Strategy for Aspiring Doctors",
        excerpt: "A complete guide on how to crack the NEET exam. Learn the best strategies for Physics, Chemistry, and Biology, plus time management and revision techniques.",
        date: "June 12, 2026",
        readTime: "9 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-how-to-crack-neet.html"
    },
    {
        title: "Mastering the Art of Concentration: Focus Techniques for Olympiads",
        excerpt: "Learn scientifically proven focus techniques like Pomodoro and Active Recall to maximize your Olympiad and JEE/NEET study sessions.",
        date: "June 10, 2026",
        readTime: "8 min read",
        category: "General",
        image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-mastering-concentration.html"
    },
    {
        title: "Advanced Time Management Techniques for Competitive Exams",
        excerpt: "Discover advanced time management techniques to maximize your score in competitive exams and Olympiads.",
        date: "January 15, 2024",
        readTime: "15 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-advanced-time-management.html"
    },
    {
        title: "The Ultimate Guide to Crack NEET 2026: A 6-Month Study Plan",
        excerpt: "Master Biology, Physics, and Chemistry with this comprehensive 6-month NEET preparation strategy. Learn how to balance NCERT and mock tests efficiently.",
        date: "May 25, 2026",
        readTime: "10 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-ultimate-neet-2026-study-plan.html"
    },
    {
        title: "JEE Main vs JEE Advanced: Understanding the Key Differences",
        excerpt: "Discover the fundamental differences between JEE Main and JEE Advanced in terms of syllabus, exam pattern, difficulty, and preparation strategy.",
        date: "May 20, 2026",
        readTime: "8 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-jee-main-vs-jee-advanced.html"
    },
    {
        title: "Top 5 Benefits of Solving Previous Year Questions (PYQs) for JEE",
        excerpt: "Why are PYQs the secret weapon of every IIT topper? Learn how reverse engineering past NTA papers guarantees a massive boost in your JEE Main percentile.",
        date: "May 18, 2026",
        readTime: "7 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-benefits-of-jee-main-pyqs.html"
    },
    {
        title: "How to Prepare for SOF NSO Class 6: Best Strategies",
        excerpt: "A complete roadmap for Class 6 students to excel in the National Science Olympiad (NSO). Covering Physics, Chemistry, Biology, and Logical Reasoning.",
        date: "May 15, 2026",
        readTime: "9 min read",
        category: "Science",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-nso-class-6-preparation.html"
    },
    {
        title: "Mastering IEO: Tips to Improve English Grammar & Vocabulary",
        excerpt: "Dominate the International English Olympiad (IEO) by building a robust vocabulary and mastering complex grammar rules with these proven techniques.",
        date: "May 10, 2026",
        readTime: "8 min read",
        category: "English",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-mastering-ieo-english-grammar.html"
    },
    {
        title: "How to Score 100 Percentile in JEE Main Mathematics",
        excerpt: "Mathematics is the toughest section of JEE Main. Uncover the advanced tactics, chapter-wise weightage, and shortcuts needed to score a perfect 100 percentile.",
        date: "May 08, 2026",
        readTime: "10 min read",
        category: "Maths",
                image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-score-100-percentile-jee-maths.html"
    },
    {
        title: "H.O.T.S Problems: Why Higher Order Thinking Skills are Crucial",
        excerpt: "Learn why mastering the Achievers Section and HOTS problems is the absolute deciding factor for securing top international ranks in any Olympiad.",
        date: "May 05, 2026",
        readTime: "9 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-why-hots-problems-are-crucial.html"
    },
    {
        title: "The Crucial Role of Mock Tests in Olympiad Preparation",
        excerpt: "Stop relying solely on textbooks. Discover how timed mock tests, CBT environments, and performance analytics are the real keys to competitive exam success.",
        date: "May 02, 2026",
        readTime: "7 min read",
        category: "General",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-role-of-mock-tests-olympiad.html"
    },
    {
        title: "NEET Physics Preparation: How to Solve Numericals Fast",
        excerpt: "Physics is often the roadblock for NEET aspirants. Learn high-speed calculation tricks, unit elimination methods, and formula memorization strategies.",
        date: "April 28, 2026",
        readTime: "9 min read",
        category: "Science",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-neet-physics-numericals-fast.html"
    },
    {
        title: "Cracking the IGKO: Importance of General Knowledge for Students",
        excerpt: "General knowledge isn't just about trivia. Understand why building early awareness of current affairs and life skills gives students a lifelong competitive edge.",
        date: "April 25, 2026",
        readTime: "8 min read",
        category: "General",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-importance-of-igko-general-knowledge.html"
    },
    {
        title: "The Ultimate JEE Main Revision Strategy: Maximize Your Score",
        excerpt: "Discover the most effective revision techniques, time-management strategies, and PYQ analysis methods to dramatically boost your JEE Main percentile in the final months.",
        date: "April 22, 2026",
        readTime: "10 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-jee-main-revision-strategy.html"
    },
    {
        title: "How to Prepare for 2nd Level of IMO: A Complete Strategy",
        excerpt: "Master the advanced concepts and problem-solving techniques required to crack the highly competitive Level 2 of the International Mathematics Olympiad (IMO).",
        date: "April 18, 2026",
        readTime: "6 min read",
        category: "Maths",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-how-to-prepare-for-imo-level-2.html"
    },
    {
        title: "How to Prepare for 2nd Level of NSO: A Complete Strategy",
        excerpt: "Master the advanced concepts and problem-solving techniques required to crack the highly competitive Level 2 of the National Science Olympiad (NSO).",
        date: "April 15, 2026",
        readTime: "6 min read",
        category: "Science",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-how-to-prepare-for-nso-level-2.html"
    },
    {
        title: "The Art of Elimination: Smart Guessing in Objective Exams",
        excerpt: "Learn how to significantly increase your score by intelligently eliminating wrong options instead of blind guessing.",
        date: "April 12, 2026",
        readTime: "5 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-art-of-elimination.html"
    },
    {
        title: "The Ultimate 6-Month Olympiad Blueprint: From Beginner to Ranker",
        excerpt: "A comprehensive, step-by-step 6-month roadmap detailing daily schedules, resource selection, and advanced revision strategies to secure top national ranks.",
        date: "April 08, 2026",
        readTime: "10 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-6-month-olympiad-blueprint.html"
    },
    {
        title: "10 Secret Habits of Olympiad Toppers: A Comprehensive Guide",
        excerpt: "Discover the proven daily habits, study techniques, and mindsets used by international medalists to consistently top competitive exams.",
        date: "April 05, 2026",
        readTime: "10 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=1200&q=80&fm=webp",
        link: "blog-10-habits-of-olympiad-toppers.html"
    },
    {
        title: "Decoding the Achievers Section: The Ultimate Strategy",
        excerpt: "Learn how to systematically tackle high-weightage High-Order Thinking Skills (HOTS) questions to guarantee a top international rank.",
        date: "April 02, 2026",
        readTime: "5 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-decoding-achievers-section.html"
    },
    {
        title: "Top 5 Science Olympiad (NSO) Preparation Mistakes to Avoid",
        excerpt: "Ensure you're on the right track for the National Science Olympiad by avoiding these 5 critical preparation mistakes.",
        date: "March 28, 2026",
        readTime: "5 min read",
        category: "Science",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-top-5-nso-mistakes.html"
    },
    {
        title: "How to Balance School Studies and Olympiad Preparation",
        excerpt: "Learn effective time management and study techniques to excel in both your regular school exams and competitive Olympiads without burning out.",
        date: "March 25, 2026",
        readTime: "5 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-balancing-school-and-olympiads.html"
    },
    {
        title: "5 Best Strategies to Crack IGKO Olympiad",
        excerpt: "Discover the best study techniques and daily habits to master General Knowledge and current affairs for the IGKO Olympiad.",
        date: "March 22, 2026",
        readTime: "4 min read",
        category: "General",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-igko-preparation-strategies.html"
    },
    {
        title: "How to Prepare for NSO Olympiad in 30 Days",
        excerpt: "A complete 30-day study plan with tips, mock tests, and smart strategies to crack NSO easily.",
        date: "March 18, 2026",
        readTime: "5 min read",
        category: "Science",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-nso-30-days.html"
    },
    {
        title: "5 Time Management Strategies for Olympiad Success",
        excerpt: "Learn how to effectively manage your time during the exam to maximize your score and avoid last-minute panic.",
        date: "March 15, 2026",
        readTime: "5 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-olympiad-time-management.html"
    },
    {
        title: "How to Master Logical Reasoning for Olympiads",
        excerpt: "Crack complex patterns and puzzles with these expert strategies for the Reasoning Olympiad.",
        date: "March 12, 2026",
        readTime: "6 min read",
        category: "Reasoning",
        image: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-reasoning-olympiad-preparation-guide.html"
    },
    {
        title: "Ultimate Guide to Acing the English Olympiad (IEO)",
        excerpt: "Boost your grammar, vocabulary, and reading comprehension to secure a top rank in the International English Olympiad.",
        date: "March 10, 2026",
        readTime: "5 min read",
        category: "English",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-english-olympiad-preparation-guide.html"
    },
    {
        title: "Ultimate Guide to Acing the Science Olympiad",
        excerpt: "Discover top strategies, essential topics, and recommended study habits to secure an international rank in the NSO.",
        date: "March 08, 2026",
        readTime: "6 min read",
        category: "Science",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-science-olympiad-preparation-guide.html"
    },
    {
        title: "How to Prepare for IMO in 30 Days",
        excerpt: "Master the International Mathematics Olympiad with this strategic, week-by-week 30-day preparation plan for all classes.",
        date: "March 05, 2026",
        readTime: "5 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-how-to-prepare-for-imo-in-30-days.html"
    },
    {
        title: "Best Maths Tricks for Class 5 Students",
        excerpt: "Boost your calculation speed with these top mental math tricks perfect for Class 5 students preparing for competitive exams.",
        date: "March 02, 2026",
        readTime: "4 min read",
        category: "Maths",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-best-maths-tricks-for-class-5.html"
    },
    {
        title: "Why Olympiads Help CBSE Students",
        excerpt: "Discover how participating in Olympiads builds a stronger foundation for standard school board exams like CBSE and ICSE.",
        date: "February 28, 2026",
        readTime: "6 min read",
        category: "General",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-why-olympiads-help-cbse-students.html"
    },
    {
        title: "Top 10 Mistakes in Olympiad Exams",
        excerpt: "Avoid these common pitfalls that cost students precious marks during high-pressure competitive exams.",
        date: "February 25, 2026",
        readTime: "4 min read",
        category: "Strategy",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-top-10-mistakes-in-olympiad-exams.html"
    },
    {
        title: "Best Free Mock Test Platforms for Students",
        excerpt: "A comprehensive review of the best free online resources available to practice for national level Olympiads.",
        date: "February 20, 2026",
        readTime: "5 min read",
        category: "General",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80&fm=webp",
        link: "blog-best-free-mock-test-platforms.html"
    }
];
