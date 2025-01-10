"use client";
import { motion } from "framer-motion";

export default function EventsSectionDemo() {
  const technicalEvents = {
    CodingContest: {
      title: "Code Verse",
      facultyCoordinators: [
        {
          name: "P. Penchal Prasad",
          contact: "+91 90305 51881",
        },
        {
          name: "Y. P. Srinath Reddy",
          contact: "+91 99492 82667",
        },
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
        "Showcase your coding skills in a high-stakes, competitive environment designed to challenge the best minds.",
      rules: [
        "Round 1: MCQs and one pattern question. Duration: 30 minutes.",
        "Round 2: Three coding problems (Easy, Medium, and Hard level). Duration: 1 hour.",
        "Round 3: One coding problem. Duration: 30 minutes.",
        "General Rules:",
        "Participation is only allowed in teams of exactly 2 members.",
        "Use any approved programming languages: C, C++, Python, or Java.",
        "Participants must have a basic understanding of the C language.",
        "All code must be written and submitted directly on the contest platform.",
        "Plagiarism or sharing solutions will lead to immediate disqualification.",
        "Judge decisions are final and binding.",
        "No late submissions; follow the contest timeline strictly.",
      ],
      painPoints: [
        "Ensuring stable internet connections and consistent power supply.",
        "Managing transitions smoothly between different rounds on time.",
        "Providing timely support for participant queries during the contest.",
        "Handling unforeseen technical or logistical challenges with a backup plan.",
      ],
      cost: "₹400 per team",
      icon: "IconEaseInOut",
      registerLink: "https://forms.gle/3ResqKSz9x8aCFW26",
    },

    TechnicalQuiz: {
      title: "TechTussle",
      facultyCoordinators: [
        { name: "Dr. K. Rangaswamy", contact: "+91 79891 05881" },
        { name: "Mr. S. Md. Shakeer", contact: "+91 91770 14186" },
      ],
      studentCoordinators: [
        {
          name: "K. Vishnu Vardhan Reddy",
          rollNo: "21091A3264",
          contact: "+91 95158 92932",
        },
        {
          name: "G. Lohitha Reddy",
          rollNo: "21091A3219",
          contact: "+91 62816 45501",
        },
      ],
      teamMembers: [
        "A. Mounika",
        "Prasanna",
        "Manisha",
        "Supriya",
        "Kiran",
        "Amarnath",
        "Surya",
      ],
      description:
        "Participate in an engaging and competitive technical quiz event as part of ADVITIYA 2K25 at Rajeev Gandhi Memorial College of Engineering & Technology. Showcase your knowledge and quick thinking to emerge victorious.",
      rules: [
        "Round 1: 24 teams participate. Each team answers 3 questions. Correct answer: 10 points, Skipped/Incorrect: -5 points. Top 12 teams qualify; 12 teams eliminated.",
        "Round 2: 12 teams compete. Same scoring system as Round 1. Top 6 teams qualify; 6 teams eliminated.",
        "Round 3: 6 teams compete. Same scoring system applies. Top 3 teams qualify; 3 teams eliminated.",
        "Final Round: 3 teams compete. Teams must answer within a fixed time frame. 2 teams will win prizes.",
        "General Rules:",
        "Time limits will be strictly enforced for all rounds, especially the final round.",
        "No use of mobile phones, books, or external help during the quiz.",
        "Decisions made by the quiz master are final and binding.",
        "Any team found violating rules will be immediately disqualified.",
      ],
      cost: "₹100 per participant & ₹600 per team",
      teamSize: "Based upon registrations",
      icon: "IconLightbulb",
      registerLink: "https://forms.gle/RptBRuHm1hzr2rgN6",
      painPoints: [
        "Time Pressure: In the final round, teams must not only answer correctly but also quickly to score higher.",
        "Time Management: Teams must focus on balancing speed and accuracy throughout the competition.",
        "Elimination Rounds: The gradual increase in stakes requires teams to strategize effectively.",
        "Focus Under Pressure: The dynamic nature of the final round demands sharp focus and effective teamwork.",
      ],
    },
    Workshop: {
      title: "TechCraft",
      facultyCoordinators: [
        { name: "Mr. G. Vikram Chandra", contact: "+91 98859 96934" },
      ],
      studentCoordinators: [
        {
          name: "J. Vamsi Charan",
          rollNo: "21091A3261",
          contact: "+91 99080 89699",
        },
        {
          name: "D. Sunitha",
          rollNo: "21091A3253",
          contact: "+91 91779 35741",
        },
        {
          name: "K. Naga Harshitha",
          rollNo: "21091A3228",
          contact: "+91 93928 69328",
        },
        {
          name: "G. Vara Prasad",
          rollNo: "22095A3205",
          contact: "+91 83670 54233",
        },
        {
          name: "D. Sreevani",
          rollNo: "21091A3250",
          contact: "+91 70132 90398",
        },
      ],
      teamMembers: [
        "Vamsi",
        "Sunitha",
        "Naga Harshitha",
        "Vara Prasad",
        "Sreevani",
      ],
      description:
        "Participate in an immersive, expert-led workshop at ADVITIYA 2K25 to enhance your technical skills in domains like web development and robotics. A hands-on learning experience awaits you!",
      rules: [
        "Participants must arrive at the venue at least 15 minutes before the scheduled start time.",
        "Mobile phones must be kept on silent mode during the sessions.",
        "Participants must attend the entire workshop to receive a certificate of participation.",
        "Treat facilitators, organizers, and fellow participants with respect and courtesy.",
        "Any provided resources (e.g., laptops, tools, software) must be handled with care.",
        "Follow all instructions provided by the workshop coordinators and facilitators.",
        "Refrain from engaging in unrelated activities during the workshop.",
        "Participants are encouraged to provide constructive feedback at the end of the session.",
      ],
      cost: "₹250 per participant",
      teamSize: "Individual",
      icon: "IconHammer",
      registerLink: "https://forms.gle/6kJxhr4gVuWoq3Bj6",
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
      title: "Paperlogue",
      facultyCoordinators: [
        {
          name: "Dr. M. Suleman Basha",
          contact: "+91 91770 14186",
        },
        {
          name: "Dr. M. SriRaghavendra",
          contact: "+91 90523 87499",
        },
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
        "Showcase your research and analytical skills through a compelling presentation designed to communicate ideas effectively.",
      rules: [
        "Time Limit: Presentation: 6 minutes maximum, Q&A Session: 3 minutes after each presentation.",
        "Paper Rules: Must be an IEEE format paper submitted before the event commences.",
        "Presentation Skills: Speak clearly and confidently. Maintain eye contact with the audience. Use gestures to emphasize points.",
        "Professionalism: Dress appropriately for the presentation. Respect the time of others and adhere to the schedule.",
      ],
      cost: "₹150 per participant",
      icon: "IconDocumentText",
      registerLink: "https://forms.gle/hTpwEcZr1i6v3Qfp8",
    },
    PosterPresentation: {
      title: "Postora",
      facultyCoordinators: [
        { name: "Dr. M. Suleman Basha", contact: "+91 91770 14186" },
        { name: "Dr. M. Jahir Pasha", contact: "+91 99496 25263" },
      ],
      studentCoordinators: [
        {
          name: "K. Sai Siva Rama Krishna",
          rollNo: "21091A3239",
          contact: "+91 99498 28846",
        },
        {
          name: "S. Harshitha",
          rollNo: "21091A3214",
          contact: "+91 77802 40189",
        },
      ],
      teamMembers: ["Mabasha", "Suresh", "Anitha", "Kavya", "Jyothi", "Tanuja"],
      description:
        "Participate in a poster presentation event at Rajeev Gandhi Memorial College of Engineering & Technology, blending creativity and knowledge to communicate innovative ideas effectively.",
      rules: [
        "Time Limit: Presentation: 6 minutes maximum, Q&A Session: 3 minutes after each presentation.",
        "Poster Design: Must be clear, visually appealing, and include key points. Use graphs, images, and charts where applicable to enhance understanding.",
        "Presentation Skills: Speak clearly and confidently. Maintain eye contact with the audience. Use gestures to emphasize points.",
        "Professionalism: Dress appropriately for the presentation. Respect the time of others and adhere to the schedule.",
      ],
      cost: "₹150 per participant",
      teamSize: "1-2 members",
      icon: "IconImage",
      registerLink: "https://forms.gle/Pwr3DxiM2GWEH9Cj9",
      painPoints: [
        "Network issues",
        "HDMI cable management",
        "Sensor board setup",
      ],
    },
    WebDevelopment: {
      title: "WebForge",
      facultyCoordinators: [
        { name: "M. Suleman Basha", contact: "+91 91770 14187" },
        { name: "S. Khaleel", contact: "+91 80966 74404" },
      ],
      studentCoordinators: [
        {
          name: "C. Vivekanandha Reddy",
          rollNo: "22095A3206",
          contact: "+91 63049 65782",
        },
        {
          name: "A. Sai Deekshitha",
          rollNo: "21091A3233",
          contact: "+91 94403 88230",
        },
      ],
      teamMembers: ["Tirumalesu", "Bhargavi", "Dharani"],
      description:
        "Build a responsive and dynamic website that functions seamlessly across different devices, showcasing your web development skills.",
      rules: [
        "Each team must consist of 2 members.",
        "50 teams in Round 1; top 20 advance to Round 2.",
        "Use only provided resources (VS Code). External devices prohibited.",
        "Malpractice or plagiarism leads to disqualification.",
        "Round 1: Create a static website using HTML & CSS in 20 minutes. Top 20 teams qualify.",
        "Round 2: Create a dynamic website using HTML, CSS, & JavaScript in 30 minutes. Top 6 teams qualify.",
        "Final Round: Top 6 teams present their projects. Judges' questions determine winners.",
      ],
      eventFormat: [
        {
          round: "First Round: Static Website Development",
          details: [
            "Teams must create a static website using HTML and CSS only.",
            "The time limit is 20 minutes.",
            "Evaluation will be based on the visual appeal and layout of the website.",
            "This is an elimination round, and only the top 20 teams will proceed to the next round.",
          ],
        },
        {
          round: "Second Round: Dynamic Website Development",
          details: [
            "Selected teams must create a dynamic website using HTML, CSS, and JavaScript.",
            "The time limit is 30 minutes.",
            "The top 6 teams will be selected based on the judging criteria.",
          ],
        },
        {
          round: "Final Evaluation",
          details: [
            "The top 6 teams will present their projects to the judges.",
            "Judges will ask technical questions related to the project, and the answers will determine the top 3 winners.",
          ],
        },
      ],
      judgingCriteria: {
        innovationAndCreativity:
          "30% - The uniqueness and originality of the idea.",
        functionality:
          "30% - The performance and functionality of the website.",
        designAndUserInterface:
          "20% - The aesthetic appeal and user-friendliness of the website.",
        technicalImplementation:
          "20% - The use of coding practices and appropriate technologies.",
      },
      cost: "₹300 per team",
      teamSize: "2 members per team",
      icon: "IconDesktop",
      registerLink: "https://forms.gle/uthc15RC4RkGMN5F6",
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

  const nonTechnicalEvents = [
    {
      title: "Questoria",
      description:
        "A fun and challenging scavenger hunt where participants will need to solve clues and find hidden items across the campus.",
      rules: [
        "Respect the Environment: Do not damage property or litter while searching for clues.",
        "Safety First: Stay within the designated areas; no running or dangerous behaviour.",
        "Fair Play: Teams must work independently without disrupting other team's progress.",
        "Obey Event Coordinators: Follow instructions from game facilitators at all times.",
      ],
      FacultyCoordinators: [
        { Name: "Dr. P Kiran Rao", Contact: "+91 XXX XXXXX" },
        { Name: "K. Rathi", Contact: "+91 81796 94419" },
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
      cost: "₹600 per team",
      teamSize: "3 to 5 members",
      eventDuration: "9:30 AM to 1:00 PM",
      location: "Campus-wide (Specific areas marked for clues)",
      eventFormat: [
        "Kick-off and briefing: All participants receive the first clue and instructions.",
        "Clue-solving and progression: Teams solve clues and navigate to different areas.",
        "Final stage: The first team to reach the final treasure wins.",
        "Award Ceremony: Winners are announced, and prizes are distributed.",
      ],
      registerLink: "https://forms.gle/UKAd6S9c6YqZmyix8",

      painPoints: [
        "Clue Complexity: Clues that are too hard or too easy may affect the game's flow.",
        "Time Management: Insufficient time for certain clues may lead to frustration.",
        "Team Dynamics: Imbalance in skills or teamwork can hinder progress.",
        "Rule Violations: Players ignoring the rules may disrupt the integrity of the hunt.",
        "Safety Concerns: Inadequate supervision or unsafe areas can cause issues.",
      ],
    },
    {
      title: "CamPeaks (Cam Clash)",
      description:
        "Capture the best moments of the event with your camera and showcase your photography skills in this competition.",
      rules: [
        "Submissions must be original, created specifically for this event, and must not be copied from the web.",
        "Previously used or old photographs/videos are not allowed.",
        "Video duration should be between 2 to 5 minutes.",
        "Videos must align with the provided theme.",
        "All entries must be submitted before the specified deadline.",
        "Ensure submissions adhere to the specified theme and rules.",
        "Any copied or previously used content will lead to disqualification.",
        "Respect deadlines to ensure eligibility.",
      ],
      FacultyCoordinators: [
        { Name: "G. Viswanath", Contact: "+91 98859 72096" },
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
      cost: "₹100 per participant & 200 per team",
      registerLink: "https://forms.gle/Mqc85vnCTrz9q2WLA",
      TeamMembers: [
        "K. Mohan Krishna",
        "S. Sreeram",
        "A. Mounika",
        "J. P. Samantha",
      ],
    },
    {
      title: "CamPeaks (Photography)",
      description:
        "Capture the best moments of the event with your camera and showcase your photography skills in this competition.",
      rules: [
        "Submissions must be original, created specifically for this event, and must not be copied from the web.",
        "Previously used or old photographs/videos are not allowed.",
        "Each participant can submit only one photograph.",
        "Submissions must include a short description.",
        "All entries must be submitted before the specified deadline.",
        "Ensure submissions adhere to the specified theme and rules.",
        "Any copied or previously used content will lead to disqualification.",
        "Respect deadlines to ensure eligibility.",
      ],
      FacultyCoordinators: [
        { Name: "G. Viswanath", Contact: "+91 98859 72096" },
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
      cost: "₹50 per participant",
      registerLink: "https://forms.gle/5Nt9YtGK73eGXjA99",
      TeamMembers: [
        "K. Mohan Krishna",
        "S. Sreeram",
        "A. Mounika",
        "J. P. Samantha",
      ],
    },

    {
      title: "E- Arena (BGMI)",
      description:
        "Participate in competitive online games, showcasing your strategic thinking and quick reflexes.",
      FacultyCoordinators: [
        { Name: "Y. P. Srinath Reddy", Contact: "+91 99492 82667" },
        { Name: "G. Vikram Chandra", Contact: "+91 98859 96934" },
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
      rules: [
        "One Erangel Match will be conducted.",
        "The top squad from the match will win the prize.",
        "In case of a tie, TDM will be conducted.",
        "Ensure fair play and respect for all participants.",
        "Teams must adhere to the event schedule.",
      ],
      cost: "₹50 per head & ₹200 per team",
      registerLink: "https://forms.gle/6d8apZHpDBMKNUQ86",
      TeamMembers: ["Afrid", "Rushi", "Omkar", "Khaleel"],
    },
    {
      title: "E- Arena (Freefire)",
      description:
        "Participate in competitive online games, showcasing your strategic thinking and quick reflexes.",
      FacultyCoordinators: [
        { Name: "Y. P. Srinath Reddy", Contact: "+91 99492 82667" },
        { Name: "G. Vikram Chandra", Contact: "+91 98859 96934" },
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
      rules: [
        "One Bermuda Match will be conducted.",
        "The top squad from the match will win the prize.",
        "In case of a tie, a Clash Squad match will be conducted.",
        "Ensure fair play and respect for all participants.",
        "Teams must adhere to the event schedule.",
        "Players facing internet issues are expected to switch to their mobile data.",
      ],
      cost: "₹50 per head & ₹200 per team",
      registerLink: "https://forms.gle/gRDXQJLFksrgbTBt5",
      TeamMembers: ["Afrid", "Rushi", "Omkar", "Khaleel"],
    },

    {
      title: "PlayZone (Chess)",
      description:
        "Compete in various offline games and activities, testing both mental and physical skills.",
      rules: [
        "Each round is an elimination round.",
        "Every game is a knockout match.",
        "All FIDE rules applicable.",
      ],
      eventFormat: "Each round is an elimination round",
      painPoints: ["Carrom boards", "Chess boards"],
      facultyCoordinators: [
        { name: "Annapurna", contact: "+91 91822 21528" },
        { name: "M Suleman Basha", contact: "+91 91770 14186" },
        { name: "Penchal Prasad Sir", contact: "Not Provided" },
      ],
      studentCoordinators: [
        {
          name: "S. Abdul Gafoor",
          rollNo: "21091A3201",
          contact: "+91 95818 51301",
        },
        {
          name: "K. Pream",
          rollNo: "21091A3231",
          contact: "+91 98851 12453",
        },
        {
          name: "K. Thanuja",
          rollNo: "21091A3258",
          contact: "+91 96036 06025",
        },
        {
          name: "S. Shreya Reddy",
          rollNo: "21091A3245",
          contact: "+91 77994 81411",
        },
      ],
      registerLink: "https://forms.gle/tTTMV9XJubiPp2Bo8",
      teamMembers: ["Gafoor", "Pream", "Tanuja", "Shreya"],
      locationDetails: {
        collegeName:
          "Rajeev Gandhi Memorial College of Engineering & Technology",
        autonomous: true,
        address: "Nandyal-518501, Andhra Pradesh, India",
        department:
          "Department of Computer Science & Engineering (Data Science)",
        eventName: "ADVITIYA 2K25",
      },
      activity: "Offline Games (Chess and Carroms)",
      teamSize: {
        chess: "Individual",
        carroms: "2",
      },
      cost: "₹50 per team",
    },
    {
      title: "PlayZone (Carroms)",
      description:
        "Compete in various offline games and activities, testing both mental and physical skills.",
      rules: [
        "Each round is an elimination round.",
        "Every game is a knockout match.",
        "White and black game.",
      ],
      eventFormat: "Each round is an elimination round",
      painPoints: ["Carrom boards", "Chess boards"],
      facultyCoordinators: [
        { name: "Annapurna", contact: "+91 91822 21528" },
        { name: "M Suleman Basha", contact: "+91 91770 14186" },
        { name: "Penchal Prasad Sir", contact: "Not Provided" },
      ],
      studentCoordinators: [
        {
          name: "S. Abdul Gafoor",
          rollNo: "21091A3201",
          contact: "+91 95818 51301",
        },
        {
          name: "K. Pream",
          rollNo: "21091A3231",
          contact: "+91 98851 12453",
        },
        {
          name: "K. Thanuja",
          rollNo: "21091A3258",
          contact: "+91 96036 06025",
        },
        {
          name: "S. Shreya Reddy",
          rollNo: "21091A3245",
          contact: "+91 77994 81411",
        },
      ],
      teamMembers: ["Gafoor", "Pream", "Tanuja", "Shreya"],
      locationDetails: {
        collegeName:
          "Rajeev Gandhi Memorial College of Engineering & Technology",
        autonomous: true,
        address: "Nandyal-518501, Andhra Pradesh, India",
        department:
          "Department of Computer Science & Engineering (Data Science)",
        eventName: "ADVITIYA 2K25",
      },
      activity: "Offline Games (Chess and Carroms)",
      teamSize: {
        chess: "Individual",
        carroms: "2",
      },
      registerLink: "https://forms.gle/gM9Y6KwU7KQJqMdk9",
      cost: "₹50 per head",
    },
    {
      title: "Melodify",
      description:
        "Show off your vocal skills in this singing competition and captivate the audience with your performance.",
      rules: [
        "They should finish their performance within the allotted time.",
        "Any song theme based on their interest.",
        "Everyone will be given a maximum of 5 minutes.",
        "If they want background music, they should submit it before 1 week itself.",
      ],
      eventFormat: [
        "Participants should finish their performance within the allotted time.",
        "The song theme can be based on their interest.",
      ],
      painPoints: [
        "Microphones and sound system",
        "Network",
        "Speakers and podium",
      ],
      facultyCoordinators: [
        { name: "Mrs. K. Rathi", contact: "+91 81796 94419" },
      ],
      studentCoordinators: [
        {
          name: "J. Sai Navya",
          rollNo: "21091A3238",
          contact: "+91 93906 96602",
        },
        {
          name: "P. Sudha Aruna",
          rollNo: "21091A3251",
          contact: "+91 89195 22328",
        },
      ],
      teamMembers: ["Thanusree", "Jyothi", "Naga Harshitha"],
      locationDetails: {
        collegeName:
          "Rajeev Gandhi Memorial College of Engineering & Technology",
        autonomous: true,
        address: "Nandyal-518501, Andhra Pradesh, India",
        department:
          "Department of Computer Science & Engineering (Data Science)",
        eventName: "ADVITIYA 2K25",
      },
      registerLink: "https://forms.gle/49RisutNcZ1pF2Qe9",
      activity: "Singing",
      teamSize: "Individual, Duet, or Group (max 3)",
      cost: "₹100 per head",
    },
    {
      title: "Groove Battle",
      description:
        "Show off your dance skills in this competition and captivate the audience with your performance.",
      rules: [
        "They should finish their performance within the allotted time.",
        "Any song theme based on their interest.",
        "Everyone should reach the venue on time.",
        "Maximum 5 minutes will be given.",
        "The songs should be submitted before 3 days.",
      ],
      eventFormat: [
        "Participants should finish their performance within the allotted time.",
        "The song theme can be based on their interest.",
      ],
      painPoints: [
        "Microphones and sound system",
        "Network",
        "Speakers and podium",
      ],
      facultyCoordinators: [
        { name: "Mrs. K. Rathi", contact: "+91 81796 94419" },
      ],
      studentCoordinators: [
        {
          name: "J. Sai Navya",
          rollNo: "21091A3238",
          contact: "+91 93906 96602",
        },
        {
          name: "P. Sudha Aruna",
          rollNo: "21091A3251",
          contact: "+91 89195 22328",
        },
      ],
      teamMembers: ["Thanusree", "Jyothi", "Naga Harshitha"],
      locationDetails: {
        collegeName:
          "Rajeev Gandhi Memorial College of Engineering & Technology",
        autonomous: true,
        address: "Nandyal-518501, Andhra Pradesh, India",
        department:
          "Department of Computer Science & Engineering (Data Science)",
        eventName: "ADVITIYA 2K25",
      },
      registerLink: "https://forms.gle/2Stjn8bhr73LnPxo7",
      activity: "Singing",
      teamSize: "Individual, Duet, or Group (max 3)",
      cost: "₹100 per head",
    },
    {
      title: "Entreva",
      description:
        "Showcase your entrepreneurial skills by participating in various stalls and activities.",
      Activity: "Entrepreneurship",
      FacultyCoordinators: [{ Name: "Mr. B. Bhaskara Rao" }],
      Heads: [
        { Name: "V. Sravan Kumar", Contact: "+91 63097 92178" },
        { Name: "K. Sai Deepika", Contact: "+91 97049 23588" },
      ],
      StallTypes: ["Food stalls", "Challenges and Games", "Crafts stalls"],
      rules: [
        "All stall owners must adhere to the event schedule.",
        "Stalls should be set up 30 minutes prior to the event start time.",
        "Ensure cleanliness and proper waste management at your stall.",
        "Participants are encouraged to promote their stalls creatively.",
        "Respect for all visitors and fellow stall owners is mandatory.",
        "Stall types include: Food stalls, Challenges and Games, Crafts stalls.",
      ],
      registerLink: "https://forms.gle/mURzrhX1H7d7hooR9",
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
