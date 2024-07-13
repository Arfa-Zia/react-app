export default function Experience({
  jobTitle,
  duration,
  location,
  description,
}) {
  return (
    <div>
      <h4>{jobTitle}</h4>
      <p>{duration}</p>
      <p>{location}</p>
      <p>{description}</p>
    </div>
  );
}
