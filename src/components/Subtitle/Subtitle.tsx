import "./subtitle.css";

type SubtitleProps = {
  title?: string;
};

export const Subtitle = ({ title }: SubtitleProps) => {
  return (
    <section className="subtitle">
      <h3>{title}</h3>
    </section>
  );
};
