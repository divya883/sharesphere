export const navItems = [
    { name: "Post", link: "/post" },
    { name: "Help", link: "/help" },
    { name: "Profile", link: "/profile" },
];

export const gridTitles = [
    {
        id: 1,
        title: "Gain trust and collect points as you support your community.",
        description: "",
        className: "lg:col-span-2 md:col-span-4 md:row-span-2 lg:min-h-[40vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "./sharing.lottie",
        spareImg: "",
    },
    {
        id: 2,
        title: "Lend a hand, get support, and save money.",
        description: "",
        className: "lg:col-span-1 md:col-span-2 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "Share and request items, study buddies, housing, and interests.",
        description: "",
        className: "lg:col-span-1 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "All your on-campus essentials, just a stone’s throw away.",
        description: "",
        className: "lg:col-span-1 md:col-span-2 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "./grid.svg",
        spareImg: "./b4.svg",
    },
    {
        id: 5,
        title: "Your NC State community: safe, trusted, and rewarding.",
        description: "",
        className: "md:col-span-2 md:row-span-1",
        imgClassName: "flex-shrink-0 right-0 bottom-0 w-3/4 h-3/4",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "wolf.lottie",
        spareImg: "./grid.svg",
    },


];

export const projects = [
    {
        id: 1,
        title: "E Learning Hub",
        des: "A Faculty course management platform for seamless interaction (Flask, Blueprints, MySQL, and HTML/CSS) ",
        img: "./p1.jpg",
        iconLists: ["/flask.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://github.com/NityaNagaSai/E-LearnHub",
    },
    {
        id: 2,
        title: "WanderNest : MERN-Stack-App",
        des: "A Hotels Rental Application like Airbnb with User Friendly front-end",
        img: "./p2.jpg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/priyalkmurthy5/WanderNest-MERN-Stack-App",
    },
    {
        id: 3,
        title: "Mental Health Predictor",
        des: "Mental Health Treatment prediction using various ML models",
        img: "./p3.jpg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/priyalkmurthy5/Mental-Health-Predictor",
    },
    {
        id: 4,
        title: "Amazon Fine Foods Review : NLP - Roberta",
        des: "Sentiment analysis on Amazon Fine Food reviews using NLP",
        img: "./p4.jpg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://github.com/priyalkmurthy5/AmazonFineFoodsReview_NLP_Roberta",
    },
];

export const testimonials = [
    {
        quote:
            "I had the privilege of working with Priya in couple of projects as her Lead and Project Architect. In my association with Priya, I have been constantly impressed by her analytical, logical reasoning skills and knowledge in problem solving skills. She has been the role model for the new members in the team for her sincerity, honesty, integrity and punctuality. I highly recommend Priya for Project Lead, Research and Development roles that she is interested in Software.",
        name: "Bhavana Bhat",
        title: "Principal Staff Engineer, Motorola Mobility",
    },
    {
        quote:
            "I have had the pleasure of working closely with Priya for three years, and I am delighted to recommend her without hesitation. Our collaboration on developing a React web application for an entire year allowed me to witness firsthand her exceptional skills and dedication. Beyond her technical prowess, Priya is a hardworking and intelligent individual. She consistently goes above and beyond to deliver exceptional results, even when faced with challenging deadlines or complex problems.",
        name: "Gopalkrishna MS",
        title: "Staff Engineer, Motorola Mobility",
    },
    {
        quote:
            "I would highly Priya Krishnamurthy for any opportunity that involves ReactJS development. I have had the pleasure of working closely with Priya for the past two years, and I have been consistently impressed by her technical expertise, dedication, and excellent communication skills. Priya's proficiency in ReactJS is excellent. Furthermore, Priya is a quick learner who adapts swiftly to new technologies and tools, making her an invaluable asset in any development team.",
        name: "Somina Lakshmana Hanuman Mahath",
        title: "Software Engineer, Motorola Mobility",
    },
];

export const companies = [
    {
        id: 1,
        name: "Motorola Mobility",
        img: "./moto.png",
    },
    {
        id: 2,
        name: "iSimcha LLC",
        img: "./isimcha.png",
    },
    {
        id: 3,
        name: "Toshiba Global Commerce Solutions",
        img: "./toshiba.png",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Software Engineer Intern",
        company: "Toshiba Global Commerce  Solutions",
        dates: "August 2024 - December 2024",
        desc: "Enhanced MongoDB data access speed through API optimization and developed a Vue.js UI in a microservice environment with robust automated testing.",
        className: "md:col-span-2",
        thumbnail: "./exp1.svg",
    },
    {
        id: 2,
        title: "AI Software Engineer Intern",
        company: "iSimcha LLC",
        dates: "May 2024 - August 2024",
        desc: "Built an LLM-based chatbot leveraging RAG and LangChain, achieving a 96% semantic similarity score and improving clinical trial usability filters by 15%.",
        className: "md:col-span-2",
        thumbnail: "./exp2.svg",
    },
    {
        id: 3,
        title: "Software Engineer",
        company: "Motorola Mobility",
        dates: "October 2020 - June 2023",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2",
        thumbnail: "./exp3.svg",
    },
    {
        id: 4,
        title: "Software Engineer Intern",
        company: "Motorola Mobility",
        dates: "January 2020 - May 2020",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "./exp4.svg",
    },
];

export const resume = {
    img: "./resume.lottie",
    title: "My Resume",
    Description: "Dive into my journey—check out my Resume."
}

export const socialMedia = [
    {
        id: 1,
        img: "./git.svg",
    },
    {
        id: 2,
        img: "./link.svg",
    },
];
