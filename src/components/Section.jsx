import SectionSvg from "../assets/svg/SectionSvg";

const Section = ({
  // normalement className comme une erreur eslint et il faut rajouter dans les rules es-lint : 
  // "react/prop-types : "off"
  className,
  id,
  crosses, // qui est un boolean
  crossesOffset, // une extension string pour tailwind
  customPaddings, // c'est un boolean qui désactive le padding par défaut pour en faire un soit-même
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {children}

      {/* Les deux lignes verticales sont rendu à gauche et à droite de la section uniquement si la taille est suppérieur à md */}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {/* Si j'ai les croix, je rajoute les croix en svg ainsi que la ligne horizontale entre */}
      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
