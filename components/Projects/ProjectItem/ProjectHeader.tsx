import HiddenLinks from "./HiddenLinks";
const ProjectHeader: React.FC<{
  liveUrl: string;
  gitUrl: string;
  title: string;
  description: string;
}> = ({ description, title, gitUrl, liveUrl }) => {
  return (
    <header className="relative bg-tri2Background  w-72 h-20  text-center sm:translate-y-5 flex flex-col justify-center items-center mx-auto sm:mx-0 my-2 sm:my-0 sm:ms-10 rounded-md z-10 shadow-md shadow-black/70">
      <HiddenLinks gitUrl={gitUrl} liveUrl={liveUrl} />
      <h1 className=" text-2xl font-bold text-white ">
        {title}
        <br />
      </h1>
      <p className=" text-white/80">{description}</p>
    </header>
  );
};

export default ProjectHeader;
