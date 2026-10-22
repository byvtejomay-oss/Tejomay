import { DiyaOrnament } from "@/components/icons";

type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  /** Use "h1" for page heroes; sections default to "h2". */
  as?: "h1" | "h2";
  id?: string;
};

export default function SectionHeading({ eyebrow, title, intro, align = "center", as: Tag = "h2", id }: Props) {
  return (
    <div className={`section-heading section-heading-${align}`}>
      {eyebrow && (
        <p className="eyebrow">
          {align === "center" && <DiyaOrnament size={22} className="eyebrow-ornament" />}
          {eyebrow}
        </p>
      )}
      <Tag id={id} className={Tag === "h1" ? "display-title" : "section-title"}>
        {title}
      </Tag>
      {intro && <p className="section-intro">{intro}</p>}
    </div>
  );
}
