export default function SectionLabel({ index, children }) {
  return (
    <p className="section-label">
      {`// ${index ? index + " " : ""}${children}`}
    </p>
  );
}
