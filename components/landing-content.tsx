import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Antonio A.",
    avatar: "A",
    title: "Software Engineer @ Microsoft",
    description:
      "This is the best AI Application I've used! Simple yet effective!",
  },
  {
    name: "Adrian C.",
    avatar: "A",
    title: "Youtuber @ The Young Turks",
    description: "Easy to use and creates amazing content for my youtube!",
  },
  {
    name: "Letticia R.",
    avatar: "L",
    title: "Counselor @ Department Of Education",
    description:
      "I use Genius to format and proof read over the hundreds of emails I go through in a week! Love it!",
  },
  {
    name: "James B.",
    avatar: "J",
    title: "Registered Nurse @ New York Presbyterian",
    description:
      "If I ever need a quick answer regarding my daily routine as an RN, I use this!",
  },
  {
    name: "Kelvin D.",
    avatar: "K",
    title: "Project Manager @ Netflix",
    description:
      "It's ChatGPT with a nice dashboard + extra services, what else do you need?",
  },
  {
    name: "Matthew B.",
    avatar: "A",
    title: "Indie Director",
    description:
      "Allows me to create awesome videos that I can use within my movies!",
  },
  {
    name: "Nahiyan G.",
    avatar: "A",
    title: "Social Media Manager @ Instagram",
    description:
      "Love how it combines multiple AI services into one simple and fast dashboard!",
  },
  {
    name: "Raymond S.",
    avatar: "R",
    title: "Student @ City Tech",
    description:
      "Helps me quickly find solutions and learn new things that I need for College!",
  },
];

const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LandingContent;
