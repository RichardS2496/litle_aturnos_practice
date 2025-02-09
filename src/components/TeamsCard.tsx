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
      <div>
        <img src={`${teamsLogo}/${team.logo}`} alt="Logo del equipo aTurnos" />
      </div>
      <div>
        <h2>{team.name}</h2>
      </div>
      <p></p>
    </div>
  );
}
