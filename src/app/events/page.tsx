"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function EventsSectionDemo() {
  const technicalEvents = {
    CodingContest: {
      title: "Coding Contest",
      facultyCoordinators: [
        { name: "P Penchal Prasad", contact: "+91 90305 51881" },
        { name: "Y P Srinath Reddy", contact: "+91 99492 82667" },
      ],
      studentCoordinators: [
        {
          name: "W. Pranay Kumar Reddy",
          rollNo: "22095A3204",
          contact: "+91 79895 88283",
        },
        {
          name: "M. Sai Lakshmi Reddy",
          rollNo: "21091A3237",
          contact: "+91 93466 53295",
        },
      ],
      teamMembers: [
        "P. Chaitanya",
        "G. Lohitha",
        "Navya",
        "Sunitha",
        "Sudharshan",
        "Siva Bhavani",
        "Sethu",
      ],
      description:
        "Test your coding skills by competing against the brightest minds in a fast-paced, challenging environment.",
      rules: [
        "Round 1: MCQs & pattern (30m), Round 2: 3 coding problems (1hr), Round 3: 1 coding problem (30m).",
        "Compete individually or in teams of up to 2. Languages: C, C++, Python, Java.",
        "Basic C knowledge needed. Code must be submitted on the platform.",
      ],
      painPoints: [
        "Difficulty in maintaining stable internet, consistent power supply, and functional systems.",
        "Challenges in adhering to the schedule and managing smooth transitions between rounds.",
        "Delays in addressing participant queries during the contest.",
        "Lack of backup plans for unforeseen technical or logistical issues.",
      ],
      cost: "₹300 per team",
      icon: "IconEaseInOut",
      registerLink: "https://forms.gle/example-hackathon",
    },

    PaperPresentation: {
      title: "Paper Presentation",
      facultyCoordinators: [
        { name: "Dr. M. Suleman Basha", contact: "+91 91770 14186" },
        { name: "Dr. M. SriRaghavendra", contact: "+91 90523 87499" },
      ],
      studentCoordinators: [
        {
          name: "C. Dwarka Sandeep",
          rollNo: "21091A3212",
          contact: "+91 78424 93040",
        },
        {
          name: "B. Bhavana",
          rollNo: "21091A3209",
          contact: "+91 86391 40540",
        },
      ],
      teamMembers: ["Dhanush", "Hemanth", "Thanusree", "Deekshitha", "Athika"],
      description:
        "Present your research and deliver an impactful presentation, focusing on communication, analysis, and problem-solving.",
      rules: [
        "6-minute presentation, 3-minute Q&A. Slides should be clear, concise, with visuals.",
        "Speak confidently, engage the audience, and avoid reading directly from slides.",
        "Dress formally, maintain professionalism, and be prepared to answer questions.",
        "1-2 members per team, paper must be original and unpublished.",
      ],
      cost: "₹150 per participant",
      icon: "IconDocumentText",
      registerLink: "https://forms.gle/example-paper-presentation",
    },
    // PosterPresentation: {
    //   title: "Poster Presentation",
    //   facultyCoordinators: [
    //     { name: "M Suleman Basha", contact: "+91 91770 14186" },
    //     { name: "M Jahir Pasha", contact: "+91 99496 25263" },
    //   ],
    //   studentCoordinators: [
    //     {
    //       name: "K. Sai Siva Rama Krishna",
    //       rollNo: "21091A3239",
    //       contact: "+91 99498 28846",
    //     },
    //     {
    //       name: "S. Harshitha",
    //       rollNo: "21091A3214",
    //       contact: "+91 77802 40189",
    //     },
    //   ],
    //   teamMembers: ["Mabasha", "Suresh", "Anitha", "Kavya", "Jyothi", "Tanuja"],
    //   description:
    //     "Create an eye-catching and informative poster that communicates your innovative ideas. Perfect for those who want to blend creativity and knowledge.",
    //   cost: "₹150 per participant",
    //   icon: "IconImage",
    //   registerLink: "https://forms.gle/example-poster-presentation",
    //   rules: [
    //     "Time Limit: 6 minutes presentation, 2 minutes Q&A.",
    //     "Poster must be clear, visually appealing, and include graphs, images, or charts.",
    //     "Speak clearly, confidently, and maintain eye contact with the audience.",
    //     "Dress appropriately and respect the event schedule.",
    //   ],
    //   painPoints: [
    //     "Network issues",
    //     "HDMI cable management",
    //     "Sensor board setup",
    //   ],
    // },
    // TechnicalQuiz: {
    //   title: "Technical Quiz",
    //   facultyCoordinators: [
    //     { name: "Md Shakeer", contact: "+91 91770 14186" },
    //     { name: "Rangaswamy", contact: "+91 79891 05881" },
    //   ],
    //   studentCoordinators: [
    //     {
    //       name: "K. Vishnu Vardhan Reddy",
    //       rollNo: "21091A3264",
    //       contact: "+91 95158 92932",
    //     },
    //     {
    //       name: "G. Lohitha Reddy",
    //       rollNo: "21091A3219",
    //       contact: "+91 62816 45501",
    //     },
    //   ],
    //   teamMembers: [
    //     "A. Mounika",
    //     "Prasanna",
    //     "Manisha",
    //     "Supriya",
    //     "Kiran",
    //     "Amarnath",
    //     "Surya",
    //   ],
    //   description:
    //     "Challenge your technical knowledge and quick thinking abilities in a quiz competition that covers various technical domains and problem-solving.",
    //   rules: [
    //     "Individual participation only.",
    //     "No electronic devices allowed.",
    //     "Time limit: 1 hour for all rounds.",
    //   ],
    //   cost: "₹800 per participant",
    //   icon: "IconLightbulb",
    //   registerLink: "https://forms.gle/example-technical-quiz",
    // },
    // Workshop: {
    //   title: "Workshop",
    //   facultyCoordinators: [
    //     { name: "G Vikram Chandra", contact: "+91 98859 96934" },
    //   ],
    //   studentCoordinators: [
    //     {
    //       name: "J. Vamsi Charan",
    //       rollNo: "21091A3261",
    //       contact: "+91 99080 89699",
    //     },
    //     {
    //       name: "D. Sunitha",
    //       rollNo: "21091A3253",
    //       contact: "+91 91779 35741",
    //     },
    //     {
    //       name: "K. Naga Harshitha",
    //       rollNo: "21091A3228",
    //       contact: "+91 93928 69328",
    //     },
    //     {
    //       name: "Vara Prasad",
    //       rollNo: "22095A3205",
    //       contact: "+91 83670 54233",
    //     },
    //     {
    //       name: "D. Sreevani",
    //       rollNo: "21091A3250",
    //       contact: "+91 70132 90398",
    //     },
    //   ],
    //   teamMembers: [
    //     "Vamsi",
    //     "Sunitha",
    //     "Naga Harshitha",
    //     "Vara Prasad",
    //     "Sreevani",
    //   ],
    //   description:
    //     "Attend expert-led workshops designed to enhance your skills in various technical areas, from web development to robotics.",
    //   rules: [
    //     "Individual participation only.",
    //     "No prior knowledge is required.",
    //     "Workshop duration: 2 hours.",
    //   ],
    //   cost: "₹1000 per participant",
    //   icon: "IconHammer",
    //   registerLink: "https://forms.gle/example-workshop",
    // },
    // WebDevelopment: {
    //   title: "Web Development",
    //   facultyCoordinators: [
    //     { name: "M Suleman Basha", contact: "+91 91770 14187" },
    //     { name: "S. Khaleel", contact: "+91 80966 74404" },
    //   ],
    //   studentCoordinators: [
    //     {
    //       name: "C. Vivekanandha Reddy",
    //       rollNo: "22095A3206",
    //       contact: "+91 63049 65782",
    //     },
    //     {
    //       name: "A. Sai Deekshitha",
    //       rollNo: "21091A3233",
    //       contact: "+91 94403 88230",
    //     },
    //   ],
    //   teamMembers: ["Tirumalesu", "Bhargavi", "Dharani"],
    //   description:
    //     "Build a responsive and dynamic website that functions seamlessly across different devices, showcasing your web development skills.",
    //   rules: [
    //     "Individual participation only.",
    //     "Use HTML, CSS, JavaScript, or React.js.",
    //     "Functionality and design both matter.",
    //   ],
    //   cost: "₹1200 per participant",
    //   icon: "IconDesktop",
    //   registerLink: "https://forms.gle/example-web-development",
    // },
  };

  const nonTechnicalEvents = [
    {
      title: "Treasure Hunt",
      description:
        "A fun and challenging scavenger hunt where participants will need to solve clues and find hidden items across the campus.",
      rules: [
        "Teams must consist of 3 to 5 members.",
        "Clues will be distributed at the starting point.",
        "Each clue will lead you to the next location.",
        "The first team to find the final item wins.",
        "No use of mobile phones or GPS devices.",
      ],
      FacultyCoordinators: [
        { Name: "Kiran Rao", Contact: "" },
        { Name: "K Rathi", Contact: "+91 81796 94419" },
      ],
      StudentCoordinators: [
        { Name: "K. Balaji", RollNo: "21091A3207", Contact: "+91 99633 76522" },
        {
          Name: "B. Mounika",
          RollNo: "21091A3227",
          Contact: "+91 76600 74077",
        },
        {
          Name: "K. Manisha",
          RollNo: "21091A3222",
          Contact: "+91 99661 30643",
        },
      ],
      TeamMembers: [
        "Asad",
        "G. Prasad",
        "Hari Charan",
        "Shiva Reddy",
        "Thanusree",
        "Jyothi",
        "Naga Harshitha",
        "Satish",
        "Shashank",
        "Pradeep",
        "Rahul",
      ],
    },
    {
      title: "College Cam Clash And Photography",
      description:
        "Capture the best moments of the event with your camera and showcase your photography skills in this competition.",
      rules: [
        "Participants must submit 3 photos from the event.",
        "Photos should reflect creativity, composition, and clarity.",
        "No editing of the photos allowed, except basic adjustments (brightness, contrast).",
        "The event will have a specific time limit to capture photos.",
        "Only college students are allowed to participate.",
      ],
      FacultyCoordinators: [
        { Name: "G. Viswanath", Contact: "" },
        { Name: "S. Khaleel", Contact: "+91 80966 74404" },
      ],
      StudentCoordinators: [
        {
          Name: "K. Mohan Krishna",
          RollNo: "22095A3202",
          Contact: "+91 79817 88409",
        },
        {
          Name: "S. Sreeram",
          RollNo: "21091A3249",
          Contact: "+91 96768 46111",
        },
        {
          Name: "A. Mounika",
          RollNo: "21091A3226",
          Contact: "+91 81212 27225",
        },
        {
          Name: "J. P. Samantha",
          RollNo: "21091A3240",
          Contact: "+91 91105 29914",
        },
      ],
      TeamMembers: [
        "K. Mohan Krishna",
        "S. Sreeram",
        "A. Mounika",
        "J. P. Samantha",
      ],
    },
    {
      title: "Online Games",
      description:
        "Participate in competitive online games, showcasing your strategic thinking and quick reflexes.",
      rules: [
        "Players must have a valid gaming account.",
        "No cheating or exploiting bugs in the game.",
        "Players must follow the game’s official rules.",
        "Each game will have a specific time frame to finish.",
        "Team size and format will be announced beforehand.",
      ],
      FacultyCoordinators: [
        { Name: "Y P Srinath Reddy", Contact: "+91 99492 82667" },
        { Name: "G Vikram Chandra", Contact: "+91 98859 96934" },
      ],
      StudentCoordinators: [
        {
          Name: "P. Hima Chaitanya",
          RollNo: "21091A3266",
          Contact: "+91 81868 11109",
        },
        {
          Name: "P. Sandeep",
          RollNo: "21091A3241",
          Contact: "+91 83745 37996",
        },
      ],
      TeamMembers: ["Afrid", "Rushi", "Omkar", "Khaleel"],
    },
    // {
    //   title: "Tug O' War",
    //   description:
    //     "A test of strength and teamwork where teams compete in a thrilling tug-of-war challenge.",
    //   rules: [
    //     "Each team must consist of 5 members.",
    //     "The rope should remain straight and free of any obstructions.",
    //     "The team that crosses the centerline wins.",
    //     "No forceful actions or foul play allowed.",
    //     "Teams must be coordinated to pull together at once.",
    //   ],
    //   FacultyCoordinators: [
    //     { Name: "P Penchal Prasad", Contact: "+91 90305 51881" },
    //     { Name: "M Jahir Pasha", Contact: "+91 99496 25263" },
    //   ],
    //   StudentCoordinators: [
    //     {
    //       Name: "N. Sethu Madhava",
    //       RollNo: "21091A3221",
    //       Contact: "+91 93921 00255",
    //     },
    //     {
    //       Name: "G. Surya Prakash",
    //       RollNo: "21091A3257",
    //       Contact: "+91 78158 90683",
    //     },
    //   ],
    //   TeamMembers: ["Akram", "Sudharshan"],
    // },
    {
      title: "Offline Games",
      description:
        "Compete in various offline games and activities, testing both mental and physical skills.",
      rules: [
        "Games may include various formats like puzzles, team challenges, and board games.",
        "All players must participate in each round.",
        "No use of external aids or help.",
        "Teams will be given a specific time limit to complete each round.",
        "Fair play and respect for all participants are mandatory.",
      ],
      FacultyCoordinators: [
        { Name: "Annapurna", Contact: "+91 91822 21528" },
        { Name: "M Suleman Basha", Contact: "+91 91770 14186" },
      ],
      StudentCoordinators: [
        {
          Name: "S. Abdul Gafoor",
          RollNo: "21091A3201",
          Contact: "+91 95818 51301",
        },
        { Name: "K. Pream", RollNo: "21091A3231", Contact: "+91 98851 12453" },
        {
          Name: "K. Thanuja",
          RollNo: "21091A3258",
          Contact: "+91 96036 06025",
        },
        {
          Name: "S. Shreya Reddy",
          RollNo: "21091A3245",
          Contact: "+91 77994 81411",
        },
      ],
      TeamMembers: ["Gafoor", "Pream", "Tanuja", "Shreya"],
    },
    {
      title: "Singing",
      description:
        "Show off your vocal skills in this singing competition and captivate the audience with your performance.",
      rules: [
        "Participants can perform solo or in groups.",
        "Each participant is allowed to sing for 5 minutes.",
        "No explicit content or inappropriate lyrics allowed.",
        "Judges will evaluate based on voice quality, performance, and stage presence.",
        "Participants must submit their song choice before the event.",
      ],
      FacultyCoordinators: [{ Name: "K Rathi", Contact: "+91 81796 94419" }],
      StudentCoordinators: [
        {
          Name: "J. Sai Navya",
          RollNo: "21091A3238",
          Contact: "+91 93906 96602",
        },
        {
          Name: "P. Sudha Aruna",
          RollNo: "21091A3251",
          Contact: "+91 89195 22328",
        },
      ],
      TeamMembers: ["Thanusree", "Jyothi", "Naga Harshitha"],
    },
  ];

  return (
    <div className="w-full bg-gray-900 py-16 px-4 lg:px-16">
      <motion.h1
        className="text-4xl font-extrabold text-center text-white mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Our Exciting Events
      </motion.h1>

      <Section
        title="Technical Events"
        events={Object.values(technicalEvents)}
      />
      <Section title="Non-Technical Events" events={nonTechnicalEvents} />
    </div>
  );
}

const Section = ({ title, events }: { title: string; events: any }) => (
  <div className="mb-20">
    <h2 className="text-3xl font-semibold text-center text-white mb-12">
      {title}
    </h2>
    <div className="flex justify-center flex-wrap gap-8">
      {events.map((event: any, index: any) => (
        <motion.div
          key={event.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex"
        >
          <Event {...event} />
        </motion.div>
      ))}
    </div>
  </div>
);

const Event = ({
  title,
  description,
  rules,
  cost,
  icon,
  registerLink,
}: {
  title: string;
  description: string;
  rules: string[];
  cost: string;
  icon: React.ReactNode;
  registerLink: string;
}) => (
  <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full sm:w-[350px] md:w-[420px] hover:scale-105 transition-all duration-300">
    <div className="relative text-center mb-6">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
    <div className="relative flex-grow mb-4">
      <strong className="block text-sm text-white mb-2">Rules:</strong>
      <ul className="list-none space-y-2 text-sm text-gray-400">
        {rules.map((rule, i) => (
          <li key={i} className="flex items-start">
            <span className="mr-2 text-white">•</span>
            {rule}
          </li>
        ))}
      </ul>
    </div>
    <div className="relative text-center text-sm font-semibold mt-4">
      <span className="text-white">
        <strong>Cost:</strong> <span className="text-green-500">{cost}</span>
      </span>
    </div>
    <div className="relative flex justify-center mt-6">
      <a
        href={registerLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all duration-300"
      >
        Register Now
      </a>
    </div>
  </div>
);
