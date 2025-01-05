import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Ensure correct import path

const AboutPage = () => {
  const rgmcetPhotos = [
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c1.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c2.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c3.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c4.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c5.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c6.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c7.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c8.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c9.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c10.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c11.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c12.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c13.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c14.jpg",
    "https://rgmcetcse.github.io/ripple2k24/img/gallery/c15.jpg",
  ];

  const clubs = [
    {
      name: "Coding Club",
      motive:
        "Empowering students with skills in programming and development through engaging activities and mentorship.",
      image: "Shield.png",
    },
    {
      name: "Robotics Club",
      motive:
        "Fostering innovation by designing and building advanced robotic systems.",
      image: "The Codes.png",
    },
    {
      name: "Photography Club",
      motive:
        "Cultivating a passion for photography and storytelling through lenses.",
      image: "Hydra.png",
    },
    {
      name: "Music Club",
      motive:
        "Providing a harmonious platform for aspiring musicians to connect and perform.",
      image: "Jignasa.png",
    },
    {
      name: "Dance Club",
      motive:
        "Celebrating diverse dance forms and offering a stage to express creativity.",
      image: "Yuga-Spark.png",
    },
    {
      name: "Drama Club",
      motive:
        "Unleashing artistic talents through captivating theater and drama.",
      image: "Vedicvox.jpg",
    },
    {
      name: "Literary Club",
      motive:
        "Encouraging intellectual growth through the appreciation of literature and creative writing.",
      image: "Art-House.png",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white">
      {/* Advitiya 2K24 Section */}
      <section className="relative text-center py-24 bg-gradient-to-l from-indigo-900 to-pink-600">
        <img
          src="./Rgmcet.png"
          alt="Advitiya 2K24 Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-white mb-4 text-shadow-lg">
            Advitiya 2K24
          </h1>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-200">
            Advitiya 2K24 is a celebration of innovation, creativity, and
            excellence. Join us for an unforgettable journey featuring technical
            events, cultural showcases, and a platform to unleash your
            potential.
          </p>
        </div>
      </section>

      {/* About RGMCET Section */}
      <section className="px-8 py-24 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
          About RGMCET
        </h2>
        <p className="text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
          Rajeev Gandhi Memorial College of Engineering and Technology (RGMCET)
          is a prestigious institution dedicated to fostering academic
          excellence and innovation. With state-of-the-art infrastructure and a
          strong emphasis on research and development, RGMCET provides students
          with a platform to excel and grow in their respective fields.
        </p>
      </section>

      {/* RGMCET Photos Carousel */}
      <section className="px-8 py-24 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
          RGMCET Gallery
        </h2>
        <div className="w-full mx-auto max-w-5xl">
          <Carousel>
            <CarouselContent>
              {rgmcetPhotos.map((photo, index) => (
                <CarouselItem key={index}>
                  <img
                    src={photo}
                    alt={`RGMCET Photo ${index + 1}`}
                    className="w-full h-96 object-cover rounded-2xl shadow-lg transition-transform duration-500 hover:scale-110"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Clubs Section */}
      <section className="px-8 py-24 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
          Our Clubs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={club.image}
                alt={`${club.name} Image`}
                className="w-full h-72 object-cover transform transition-all duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600">
                  {club.name}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {club.motive}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
