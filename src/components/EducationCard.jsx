// EducationCard.jsx

export default function EducationCard({ education }) {
    return (
        <div className="education-card">
            <p>Education: {education.education}</p>
            <p>Institution: {education.institution}</p>
            <p>Year: {education.year}</p>
        </div>
    )
}