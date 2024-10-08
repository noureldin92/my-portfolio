const ProjectButton: React.FC<{ title: string; url: string }> = ({
  title,
  url,
}) => {
  return (
    <a
      className=" grow py-1 text-center bg-darkBlue hover:bg-darkestBlue text-white rounded-md"
      href={`${url}`}
      target="_blank">
      {title}
    </a>
  );
};

export default ProjectButton;
