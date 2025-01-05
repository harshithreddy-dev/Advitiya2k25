import { FocusCards } from "@/components/ui/focus-cards";

export default function FocusCardsDemo() {
  const advitiyaCards = [
    {
      title: "Advitiya 2k23 - Inauguration",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "The grand opening ceremony of Advitiya 2k23 with a gathering of enthusiastic participants.",
    },
    {
      title: "Advitiya 2k23 - Tech Showcase",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaW90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Innovative tech projects and prototypes showcased by students during Advitiya 2k23.",
    },
    {
      title: "Advitiya 2k23 - Cultural Performances",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaW90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A vibrant series of cultural performances by students celebrating creativity and talent.",
    },
  ];

  const engineersDayCards = [
    {
      title: "Engineers Day 2k24 - Workshop",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaW90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "An insightful workshop on cutting-edge engineering innovations and technologies.",
    },
    {
      title: "Engineers Day 2k24 - Guest Speaker",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaW90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "A motivational speech by a leading industry expert on the future of engineering.",
    },
    {
      title: "Engineers Day 2k24 - Panel Discussion",
      src: "https://assets.aceternity.com/the-first-rule.png",
      description:
        "A panel discussion on the role of engineers in shaping a sustainable future.",
    },
  ];

  return (
    <div className="bg-black text-gray-100">
      <div className="w-11/12 mx-auto py-12">
        {/* Advitiya Section */}
        <h2 className="text-4xl font-bold text-blue-500 mb-6">
          Advitiya 2k23 Glimpses
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          Advitiya 2k23 was a celebration of technology, creativity, and
          teamwork. The event brought together students, teachers, and
          professionals to explore innovation and talent. With a range of
          activities, from tech showcases to cultural performances, it was a
          platform for students to shine.
        </p>
        <FocusCards cards={advitiyaCards} />

        {/* Engineers Day Section */}
        <h2 className="text-4xl font-bold text-yellow-400 mt-12 mb-6">
          Engineers Day 2k24 Glimpses
        </h2>
        <p className="text-lg text-gray-300 mb-4">
          Engineers Day 2k24 was a tribute to the spirit of engineering and its
          impact on society. The day featured workshops, inspiring talks, and
          discussions on emerging technologies, showcasing the crucial role
          engineers play in shaping the future.
        </p>
        <FocusCards cards={engineersDayCards} />
      </div>
    </div>
  );
}
