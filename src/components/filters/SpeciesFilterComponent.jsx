import { useDispatch, useSelector } from "react-redux";
import { BsCheckCircleFill, BsCircle } from "react-icons/bs";
import { toggleFilter } from "../../store/filtersSlice";

export default function SpeciesFilterComponent() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.filters.species);

  const species = [
    { name: "Human", value: "human" },
    { name: "Alien", value: "alien" },
    { name: "Humanoid", value: "humanoid" },
    { name: "Poopybutthole", value: "poopybutthole" },
    { name: "Mythological Creature", value: "mythological" },
    { name: "Unknown", value: "unknown" },
    { name: "Animal", value: "animal" },
    { name: "Disease", value: "disease" },
    { name: "Robot", value: "robot" },
    { name: "Cronenberg", value: "cronenberg" },
  ];

  return (
    <>
      <div className="flex px-8 mb-4">
        <div className="border-b dark:border-gray-400 border-slate-700 w-full relative bottom-3"></div>
        <div className="mx-2 dark:text-gray-400 text-slate-700 uppercase font-semibold text-lg">
          Species
        </div>
        <div className="border-b dark:border-gray-400 border-slate-700 w-full relative bottom-3"></div>
      </div>
      <div className="flex flex-col px-8">
        <ul className="flex flex-col dark:text-gray-200 text-slate-600 font-medium">
          {species.map((element, index) => (
            <li className="mb-2" key={index}>
              <button
                className="flex items-center"
                onClick={() => {
                  dispatch(toggleFilter({type: 'species', value: element.value}));

                }}
              >
                {selected === element.value ? (
                  <BsCheckCircleFill className="text-cyan-600 mr-2 rounded-full" />
                ) : (
                  <BsCircle className="dark:text-gray-400 text-slate-700 mr-2" />
                )}
                <span className={`${selected === element.value ? 'scale-110 ml-2':''} hover:scale-110 duration-300`}>
                  {element.name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
