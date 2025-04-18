import SectionHeader from "../SectionHeader/sectionHeader";
import SkillsSection from "./SkillsSection";
import AboutStyle from "./AboutStyle";
import AboutContainer from "./AboutContainer";

const Skills = () => {
  return (
    <section id="about" className="flex flex-col gap-y-14 w-full pt-10">
      <SectionHeader adress="About" />
      <AboutContainer>
        <AboutStyle />
        <div className="space-y-4">
          <h2 className="text-white text-lg font-bold">
            I&#39;m Frontend developer
          </h2>
          <p className="text-white dark:text-white/70 ">
            a passionate Developer with a strong foundation in React, Next.js,
            TypeScript, and Tailwind CSS, I specialize in building modern,
            responsive, and user-friendly web applications. I&#39;ve developed
            multiple full-stack projects, including inCircle, a social media
            platform that showcases my ability to manage user authentication,
            dynamic data rendering, and real-time interactions. My experience
            spans across working with APIs, state management libraries like
            Redux Toolkit, and deploying projects using platforms like Vercel. I
            enjoy bringing ideas to life through clean, maintainable code and a
            keen eye for intuitive UI/UX design, and I continuously push myself
            to learn and implement the latest tools and best practices in web
            development.
          </p>
        </div>
        <SkillsSection />
      </AboutContainer>
    </section>
  );
};

export default Skills;