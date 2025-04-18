import Link from "next/link";

const CallButton: React.FC<{ title: string; target: string }> = ({
  title,
  target,
}) => {
  return (
    <Link
      href={target}
      className=" bg-lightestBlue hover:bg-darkBlue dark:bg-darkestBlue dark:text-white text-center transition-colors min-w-[160px] inline-block px-4 py-2 text-darkestBlack hover-bg-slide hover:text-white duration-300 font-bold shadow-md">
      {title}
    </Link>
  );
};

export default CallButton;
