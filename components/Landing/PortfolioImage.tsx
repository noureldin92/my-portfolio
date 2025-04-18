import Image from "next/image";
import portfolio from "@/public/portfolio.jpg";

const PortfolioImage = () => {
  return (
    <Image
      className="rounded-lg self-center md:self-start w-auto h-auto shadow-lg shadow-black/40"
      src={portfolio}
      alt="mo'men personal image"
      priority
      width="250"
      height="100"
    />
  );
};

export default PortfolioImage;
