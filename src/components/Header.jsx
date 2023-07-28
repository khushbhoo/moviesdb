import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container'>
                <a className="navbar-brand" href="/">Moviedb</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end gap-4" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/movie/popular">Popular</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movie/top_rated">Top Rated</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/movie/upcoming">Upcoming</Link>
                        </li>
                    </ul>
                    <form className="d-flex my-2 my-lg-0 gap-2">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}
