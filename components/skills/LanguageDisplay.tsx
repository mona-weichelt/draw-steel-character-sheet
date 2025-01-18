import ListParagraph from "../shared/ListParagraph";
import MenuEntry from "../shared/MenuEntry";
import { useHeroContext } from "@/hooks/useHeroContext";

const LanguageDisplay = ({ className }: { className?: string }) => {
  const {
    state: { languages },
  } = useHeroContext();

  return (
    <MenuEntry
      header="Languages"
      containerClassName={className}
      bodyClassName="mt-2"
    >
      <ListParagraph entries={[...languages].sort()}></ListParagraph>
    </MenuEntry>
  );
};

export default LanguageDisplay;
