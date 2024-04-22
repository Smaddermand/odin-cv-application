// ExperienceCard.jsx

export default function ExperienceCard({ experience }){
    return (
        <div className="experience-card">
            <p>Company: {experience.company}</p>
            <p>Title: {experience.title}</p>
            <p>Responsibilities: {experience.responsibilities}</p>
            <p>Start Date: {experience.startDate}</p>
            <p>End Date: {experience.endDate}</p>
        </div>

    )
}