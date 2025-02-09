import "../styles/teamsView.css";

interface Team {
  id_aturno: string;
  name: string;
  logo: string;
}

interface TeamsCardProps {
  team: Team;
}
export function TeamsCard({ team }: TeamsCardProps) {
  const teamsLogo = import.meta.env.VITE_API_TEAMSLOGO_URL;

  return (
    <div className="team-card">
      <div className="intern-team-card">
        <div className="img-logo-team-container">
          <img
            className="img-logo-team-card"
            src={`${teamsLogo}/${team.logo}`}
            alt="Logo del equipo aTurnos"
          />
        </div>
        <div className="team-info-card-container">
          <h2>{team.name}</h2>
          <p>{team.id_aturno}</p>
        </div>
      </div>

      <button className="go-to-team-btn">Ir al equipo</button>
    </div>
  );
}
