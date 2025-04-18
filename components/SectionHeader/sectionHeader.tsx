const SectionHeader: React.FC<{ adress: string; newStyle?: String }> = ({
  adress,
  newStyle,
}) => {
  return (
    <h1
      className={`text-4xl font-bold  py-2 w-fit mx-auto px-24 rounded-md dark:bg-darkBlack ring-4 ring-offset-[#FEFFEf] dark:ring-offset-gray-400 ring-offset-4 dark:ring-darkBlack ring-lightestBlue ${
        newStyle ? newStyle : "bg-lightestBlue text-white"
      } shadow-lg`}>
      {adress}
    </h1>
  );
};

export default SectionHeader;
