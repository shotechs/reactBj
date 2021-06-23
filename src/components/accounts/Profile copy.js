
function Profile() {


    return (
        <>

            <header id="header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard <small>Manage Your Site</small></h1>
                        </div>
                        <div className="col-md-2">
                            <div className="dropdown create">
                                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    Create Content
                  <span className="caret"></span>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    {/* <li><a type="button" data-toggle="modal" data-target="#addPage">Add Page</a></li>
                                    <li><a href="#">Add Post</a></li>
                                    <li><a href="#">Add User</a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="breadcrumb">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="active">Dashboard</li>
                    </ol>
                </div>
            </section>

            <section id="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="list-group">
                                <a href="index.html" className="list-group-item active main-color-bg">
                                    <span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Dashboard
                </a>
                                <a href="pages.html" className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span> Pages <span className="badge">12</span></a>
                                <a href="posts.html" className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Posts <span className="badge">33</span></a>
                                <a href="users.html" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Users <span className="badge">203</span></a>
                            </div>

                            <div className="well">
                                <h4>Disk Space Used</h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}>
                                        60%
                </div>
                                </div>
                                <h4>Bandwidth Used </h4>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                                        40%
              </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 cBody">
                            {/* <!-- Website Overview --> */}
                            <div className="card card-default">
                                <div className="card-heading main-color-bg">
                                    <h3 className="card-title">Website Overview</h3>
                                </div>
                                <div className="card-body">

                                    <div className="row row-cols-1 row-cols-md-2 g-4">

                                        <div className="col-md-3">
                                            <div className="card" >
                                                <div className="card-body">
                                                    <h5 className="card-title">888</h5>
                                                    <p className="card-text">Games</p>
                                                    <button href="#" className="btn btn-primary">Go to Game</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="card  border-dark" >
                                                {/* <img src="..." className="card-img-top" alt="..." /> */}
                                                <div class="card-header">
                                                    Games
  </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">888</h5>
                                                    <p className="card-text"></p>
                                                    <button href="#" className="btn btn-primary">Go to Game</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="well dash-box">
                                                <h2><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> 33</h2>
                                                <h4>Posts</h4>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="well dash-box">
                                                <h2><span className="glyphicon glyphicon-stats" aria-hidden="true"></span> 12,334</h2>
                                                <h4>Visitors</h4>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            {/* <!-- Latest Users --> */}
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Latest Users</h3>
                                </div>
                                <div className="panel-body">
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Joined</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Jill Smith</td>
                                                <td>jillsmith@gmail.com</td>
                                                <td>Dec 12, 2016</td>
                                            </tr>
                                            <tr>
                                                <td>Eve Jackson</td>
                                                <td>ejackson@yahoo.com</td>
                                                <td>Dec 13, 2016</td>
                                            </tr>
                                            <tr>
                                                <td>John Doe</td>
                                                <td>jdoe@gmail.com</td>
                                                <td>Dec 13, 2016</td>
                                            </tr>
                                            <tr>
                                                <td>Stephanie Landon</td>
                                                <td>landon@yahoo.com</td>
                                                <td>Dec 14, 2016</td>
                                            </tr>
                                            <tr>
                                                <td>Mike Johnson</td>
                                                <td>mjohnson@gmail.com</td>
                                                <td>Dec 15, 2016</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}

export default Profile
