const React = require('react');

class Home extends React.Component {
    render() {
        return (
            <>
            <div>
            <form action='/api/rooms' method='GET'>
                <h1>Imani Carolyn Designs Admin Page</h1> <br />
                <input type="submit" name='' value='Room Types' id='input' /> <br />
                </form>
                <form action='/api/clients' method='GET'>
                <input type="submit" name='' value='Clients' id='input' /> <br />
                </form>
                <form action='/api/projects' method='GET'>
                <input type="submit" name='' value='Current Projects' id='input' /> <br />
                </form>
                <form action='/views/client' method='GET'>
                <input type="submit" name='' value='Add New Client' id='input' />
            </form>

            <img src="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=600" alt="paint swatches and fabric designs" />
            </div>
            </>
        )
    }
}

module.exports = Home;