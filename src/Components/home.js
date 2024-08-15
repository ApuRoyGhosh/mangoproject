import './CSSS/site.css';
import './CSSS/bootstrap.css';
import './JS/order';
import './JS/site';
function home() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark box-shadow mb-3">
            <div className="container-fluid">
                <a className="navbar-brand" asp-area="">Mango.Web</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Privacy</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Content Management
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" asp-controller="Coupon" asp-action="CouponIndex">Coupon</a></li>
                                {/* <li><hr className="dropdown-divider"></li> */}
                                <li><a className="dropdown-item" asp-controller="Product" asp-action="ProductIndex">Products</a></li>
                                {/* <li><hr className="dropdown-divider"></li> */}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ">
                                Manage Order
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">
                                &nbsp;<i className="bi bi-cart"></i>&nbsp;
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        {/* @if (!User.Identity.IsAuthenticated)
                        { */}
                            <li className="nav-item">
                                <a className="nav-link" >Login</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Register</a>
                            </li>
                        {/* }
                        else
                        {
                            <li className="nav-item">
                                <a className="nav-link" href="#">Hello @User.Identity.Name </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" asp-controller="Auth" asp-action="Logout">Logout</a>
                            </li>
                        } */}
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    {/* <div className="container">
        <main role="main" className="pb-3">
            @RenderBody()
            <partial name="_Notification" />
        </main>
    </div> */}

    <footer className="footer text-muted">
        <div className="text-center">
            <i className="bi bi-c-circle-fill"></i> 2024 - Mango.Web - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
        </div>
    </footer>
    </div>
  );
}

export default home;
