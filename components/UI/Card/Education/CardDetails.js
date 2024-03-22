import { LinkArrow } from "@/public/SVG/svg";

const CardDetails = ({ concepts, title, list, certLink, className = "" }) => {
  return (
    <div className={`p-4 flex flex-col gap-4 md:py-[140px] ${className}`}>
      <div className="flex gap-3 flex-wrap">
        {concepts?.map((item, index) => (
          <span
            key={index}
            className="px-3 py-0.5 border-teal-600 border-[0.5px] rounded-full"
          >
            {item}
          </span>
        ))}
      </div>
      <h2 className="text-3xl">{title}</h2>

      <ul className="list-disc px-4">
        {list?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {certLink && (
        <a
          href={certLink}
          target="_blank"
          className="flex items-center pt-4 gap-2 hover:underline underline-offset-2"
        >
          <span>See Certificate </span>
          <LinkArrow />
        </a>
      )}
    </div>
  );
};

export default CardDetails;
