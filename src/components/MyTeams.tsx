import { Link } from "react-router-dom";
import { useMyTeams } from "../hooks/useMyTeams";
import "../styles/teamsView.css";
import { TeamsCard } from "./teamsCard";

export function MyTeams() {
  const {
    data: teamsData,
    error: teamsError,
    isLoading: teamsLoading,
  } = useMyTeams();

  console.log(teamsData);

  if (teamsError) return <p>Algo salió mal...</p>;
  if (teamsLoading) return <p>Cargando...</p>;

  return (
    <section className="teamSection">
      <h2 className="">EQUIPOS</h2>
      {teamsData?.data?.data?.length > 0 ? (
        <ul className="teamsList">
          {teamsData.data.data.map(
            (team: { id_aturno: string; name: string; logo: string }) => (
              <Link to={`/team/${team.id_aturno}`} key={team.id_aturno}>
                <TeamsCard team={team} />
              </Link>
            )
          )}
        </ul>
      ) : (
        <p>No hay equipos disponibles.</p>
      )}
    </section>
  );
}
