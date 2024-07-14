export default function Experience({
  jobTitle,
  duration,
  location,
  description,
}) {
  return (
    <div>
      <h4 id="job-title">{jobTitle}</h4>
      <p id="duration">{duration}</p>
      <p id="location">{location}</p>
      <ul id="description">
        <li>{description[0]}</li>
        <li>{description[1]}</li>
      </ul>
    </div>
  );
}
