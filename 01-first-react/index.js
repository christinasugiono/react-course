function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

function MainComponent() {
  return (
    <div className="my-4">
      <h1>Welcome to React</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident omnis deserunt quod commodi delectus at ducimus iure est labore, nihil quas deleniti a aspernatur quia sapiente necessitatibus! Inventore, sed vel!
      Facilis saepe, libero deleniti perspiciatis quia impedit aperiam aliquam autem necessitatibus, aliquid voluptate. Numquam animi quasi tempore, minus vero, quae obcaecati optio iure repellat assumenda porro, distinctio eum facilis at?</p>
    </div>
  )
}

ReactDOM.render(
  <div>
    <Navbar/>
    <div className="container">
      <MainComponent/>
    </div>
  </div>,
  document.getElementById('root')
)
