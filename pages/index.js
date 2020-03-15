import Stats from '../components/Stats';
import PaysSelection from '../components/countrySelector';

export default function IndexPage() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <center>
              <h1 className="title">COVID-19 Statistiques</h1>
            </center>
          </div>
        </div>
      </section>
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Monde</h1>
            <Stats isWorld={true} url="https://covid19.mathdro.id/api"></Stats>
          </div>
        </div>
      </section>
      <section className="hero is-info">
        <div className="hero-body">
          <div className="container">
            <PaysSelection></PaysSelection>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            Dévelopé par{' '}
            <a target="blank" href="https://damien.lagreze.net">
              Damien Lagreze
            </a>
            .
            <br />
            Source des données API{' '}
            <a target="blank" href="https://github.com/mathdroid/covid-19-api">
              Mathdroid
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
