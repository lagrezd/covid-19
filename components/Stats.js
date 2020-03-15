import useStats from '../utils/useStats';

export default function Stats({ url, isWorld }) {
  const { stats, loading, error } = useStats(url);
  if (error)
    return (
      <center>
        <div className="notification is-warning is-light">
          <strong>Oops... pas de donnée récupéré !</strong>
        </div>
      </center>
    );
  if (loading || !stats) {
    if (isWorld) {
      return (
        <center>
          <button className="button is-danger is-loading">Chargement...</button>
        </center>
      );
    }
    return (
      <center>
        <button className="button is-info is-loading">Chargement...</button>
      </center>
    );
  }

  return (
    <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Confirmés</p>
          <p className="title">{stats.confirmed.value}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Morts</p>
          <p className="title">{stats.deaths.value}</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Soignés</p>
          <p className="title">{stats.recovered.value}</p>
        </div>
      </div>
    </nav>
  );
}
