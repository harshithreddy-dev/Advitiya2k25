"use client";
import { motion } from "framer-motion";

export default function EventsSectionDemo() {
  const technicalEvents = {
    AInspire: {
      title: "AInspire",
      facultyCoordinators: [
        {
          name: "M Suleman Basha",
          contact: "+91 9177014186",
        },
      ],
      studentCoordinators: [
        {
          name: "Praveen",
          rollNo: "23095A3213",
          contact: "+91 9949437203",
        },
        {
          name: "B. Sai Sreeker Reddy",
          rollNo: "21091A32C0",
          contact: "+91 7013401659",
        },
      ],
      description:
        "Step into the realm of smart innovation — where intelligence is built, automated, and engineered to think beyond human limits.",
      rules: [
        "Individual event: design and implement AI automation workflows.",
        "Conducted in 3 rounds of increasing difficulty.",
        "Evaluated on accuracy, efficiency, and speed.",
        "Each round features a specific automation scenario.",
        "Use existing AI tools/platforms; coding from scratch is optional.",
        "Winners shortlisted progressively based on performance and time.",
        "Prizes for winners and runners-up.",
        "E-certificates for all participants.",
      ],
      painPoints: [
        "Ensuring stable internet connections and consistent power supply.",
        "Managing transitions smoothly between different rounds on time.",
        "Providing timely support for participant queries during the contest.",
        "Handling unforeseen technical or logistical challenges with a backup plan.",
      ],
      cost: "₹200 per participant",
      icon: "IconEaseInOut",
      registerLink: "https://forms.gle/bD2GG4ANVaAYL6x96",
    },

    TechnicalQuiz: {
      title: "Quizion",
      facultyCoordinators: [
        { name: "A.Annapurna", contact: "+91 79891 05881" },
      ],
      studentCoordinators: [
        {
          name: "M Neha",
          rollNo: "22091A3295",
          contact: "+91 9030406806",
        },
        {
          name: "G.Pradeep Reddy",
          rollNo: "22091A32A1",
          contact: "+91 9640309744",
        },
      ],
      description:
        "Participate in an engaging and competitive technical quiz event as part of ADVITIYA 2K25 at Rajeev Gandhi Memorial College of Engineering & Technology. Showcase your knowledge and quick thinking to emerge victorious.",
      rules: [
        "Individual registration; teams formed on-site.",
        "Quiz covers: CS fundamentals, programming (C/C++/Java/Python), emerging tech (AI, IoT, Blockchain, Cloud), IT awareness, logical reasoning.",
        "Rounds: Preliminary (MCQs) → Final (live quiz, buzzer/rapid-fire).",
        "Maintain discipline and fairness; no phones or gadgets allowed.",
        "Quiz master's decision is final.",
        "Event held offline at designated venue.",
        "Prizes for winners and runners-up.",
        "E-certificates for all participants.",
      ],
      cost: "₹150 per participant",
      teamSize: "Based upon registrations",
      icon: "IconLightbulb",
      registerLink: "https://forms.gle/k6GMeLxVmiP7vgRA6",
      painPoints: [
        "Time Pressure: In the final round, teams must not only answer correctly but also quickly to score higher.",
        "Time Management: Teams must focus on balancing speed and accuracy throughout the competition.",
        "Elimination Rounds: The gradual increase in stakes requires teams to strategize effectively.",
        "Focus Under Pressure: The dynamic nature of the final round demands sharp focus and effective teamwork.",
      ],
    },
    Workshop: {
      title: "Graphinity",
      facultyCoordinators: [
        { name: "M Suleman Basha",
          contact: "+91 9177014186" },
      ],
      studentCoordinators: [
        {
          name: "A.Kevin",
          rollNo: "22091A3260",
          contact: "+91 7036339609",
        }
      ],
      description: "Unleash your creativity in this digital design competition! Create stunning original designs based on given themes using your favorite graphic design tools.",
      rules: [
        "Individual event; no teams.",
        "Create original digital designs based on a given theme.",
        "Any graphic software allowed (Photoshop, Illustrator, Canva, Figma, CorelDRAW, etc.).",
        "Focus on creativity, visual appeal, and thematic relevance.",
        "Submit final design in PNG, JPEG, or PDF.",
        "May have multiple rounds: concept/quick sketch → final design.",
        "Judged on originality, aesthetics, theme relevance, color/typography, overall impact.",
        "Complete tasks within allotted time.",
        "Prizes for winners and runners-up.",
        "E-certificates for all participants.",
      ],

      cost: "₹200 per participant",
      teamSize: "Individual",
      icon: "IconHammer",
      registerLink: "https://forms.gle/UrqL53u7Pwi1CRwd6",
      painPoints: [
        "Technical Issues: Problems with projectors, internet connectivity, or software can disrupt the flow.",
        "Time Overruns: Poor time management can lead to skipping key sections.",
        "Participant Engagement: Lack of interaction or overly complex topics may lose participant interest.",
        "Unclear Communication: Misunderstood instructions or explanations can confuse participants.",
        "Insufficient Materials: Missing handouts, tools, or resources can frustrate attendees.",
        "Venue Constraints: Limited space, poor lighting, or noise can affect the learning experience.",
        "Unprepared Facilitators: Lack of rehearsal or familiarity with the content may reduce effectiveness.",
        "Diverse Skill Levels: Managing participants with vastly different knowledge levels can be challenging.",
      ],
    },
    PaperPresentation: {
      title: "Papervate",
      facultyCoordinators: [
        {
          name: "Dr. M. SriRaghavendra",
          contact: "+91 90523 87499",
        },
      ],
      studentCoordinators: [
        {
          name: "S.Arshiya Praveen",
          rollNo: "22091A3210",
          contact: "+91 7995336522",
        },
      ],
      description:
        "Showcase your research and analytical skills through a compelling presentation designed to communicate ideas effectively.",
      rules: [
        "The paper must be formatted in IEEE style.",
        "After selecting your paper, you must share it with us at ripplecseds2k25@gmail.com.",
        "The submission deadline is 11th October 2025, before 6:00 PM.",
        "Once your paper is Evaluated, you will receive a WhatsApp DM on the number you provided, on or before 13th October 2025, by 6:00 PM.",
        "Exciting prizes await the winners and runners-up.",
        "The presentation time will be 8–10 minutes, followed by a 2-minute Q&A session.",
        "Participants must bring a soft copy (PDF) and a presentation (PPT) of their paper on the day of the event.",
        "Evaluation will be based on innovation, technical depth, content delivery and communication skills and how good you answer for the Q&A.",
        "Certificates will be provided to all participants.",
        "Note: Participation can be either individual or as a team, with an entry fee of ₹300."
      ],
      cost: "₹300 per team",
      icon: "IconDocumentText",
      registerLink: "https://forms.gle/5mrFsye3QdkVvppJ8",
    },
    PosterPresentation: {
      title: "Posterium",
      facultyCoordinators: [
        { name: "K.Rathi", contact: "+91 91770 14186" },
      ],
      studentCoordinators: [
        {
          name: "C. Anjali",
          rollNo: "22091A3207 ",
          contact: "+91 99498 28846",
        },
      ],
      description:
        "Participate in a poster presentation event at Rajeev Gandhi Memorial College of Engineering & Technology, blending creativity and knowledge to communicate innovative ideas effectively.",
      rules: [
        "Clearly showcase concept, problem, methodology, and outcome.",
        "Individual event only; no teams.",
        "Preferred size: A1 (594×841 mm) or A2 (420×594 mm).",
        "Original work only; plagiarism leads to disqualification.",
        "Presentation: 5–7 minutes + short Q&A.",
        "Prizes for winners and runners-up.",
        "E-Certificates for all participants.",
      ],
      cost: "₹200 per participant",
      teamSize: "Individual",
      icon: "IconImage",
      registerLink: "https://forms.gle/Ugg9bger4GenBXNR8",
      painPoints: [
        "Network issues",
        "HDMI cable management",
        "Sensor board setup",
      ],
    },
    WebDevelopment: {
      title: "DevNest",
      facultyCoordinators: [
        { name: "P.V.Prashanna Kumari", contact: "+91 91770 14187" },
      ],
      studentCoordinators: [
        {
          name: "T.V. Sanith Kumar Reddy",
          rollNo: "22095A32G4",
          contact: "+91 6302376911 ",
        }
      ],
      teamMembers: ["Tirumalesu", "Bhargavi", "Dharani"],
      description:
        "Create a beautiful static website using HTML & CSS only. Showcase your design skills and creativity in this individual web development challenge.",
      rules: [
        "Individual event only.",
        "Build a static website using HTML & CSS only; no JS or frameworks.",
        "Minimum 2 pages (e.g., Home, About, Contact).",
        "Focus on creativity, layout, consistency, and usability.",
        "Ensure responsive design, alignment, and clean code.",
        "Content can be thematic or conceptual (social, educational, or tech).",
        "Be ready to explain your code and design to judges.",
        "Prizes for winners and runners-up.",
        "E-certificates for all participants.",
      ],

      cost: "₹200 per participant",
      teamSize: "Individual",
      icon: "IconDesktop",
      registerLink: "https://forms.gle/CUSzFVpW8n9xFKth9",
      painPoints: [
        "Time Constraints",
        "Technical Issues",
        "Enforcement of rules",
      ],
      additionalDetails: {
        college:
          "Rajeev Gandhi Memorial College of Engineering & Technology (Autonomous), Nandyal-518501, Andhra Pradesh, India.",
        department:
          "Department of Computer Science & Engineering (DATA SCIENCE)",
        eventName: "ADVITIYA 2K25",
      },
    },
  };



  return (
    <div className="w-full bg-gray-900 py-16 px-4 lg:px-16">
      <motion.h1
        className="text-4xl font-extrabold text-center text-white mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Explore Our Technical Events
      </motion.h1>

      <Section
        title="Technical Events"
        events={Object.values(technicalEvents)}
      />
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
  icon?: string;
  registerLink: string;
}) => (
  <div className="bg-gray-800 text-white p-6 rounded-xl shadow-lg w-full sm:w-[350px] md:w-[420px] hover:scale-105 transition-all duration-300 flex flex-col justify-between h-full">
    <div>
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
    </div>
    <div className="mt-auto">
      <div className="relative text-center text-sm font-semibold mb-4">
        <span className="text-white">
          <strong>Cost:</strong> <span className="text-green-500">{cost}</span>
        </span>
      </div>
      <div className="relative flex justify-center">
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
  </div>
);
