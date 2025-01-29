import { RiCloseFill } from "react-icons/ri";

interface DisplayMySkillProps {
  data: string[];
  setData: (updatedData: string[]) => void;
}

const DisplayMySkill: React.FC<DisplayMySkillProps> = ({ data, setData }) => {
  const handleRemoveOption = (option: string) => {
    const updatedOptions = data.filter((item) => item !== option);
    setData(updatedOptions);
  };

  return (
    <>
      {data.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mt-2">
          {data.map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="gap-2 px-3 py-1 border rounded-full shadow-sm flex-center bg-bg-3 border-border-1 text-neutral-0"
            >
              <span>{tech}</span>
              <button
                type="button"
                className="text-gray-500 hover:text-red-500"
                onClick={() => handleRemoveOption(tech)}
              >
                <RiCloseFill />
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DisplayMySkill;
