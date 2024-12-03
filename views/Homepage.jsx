const React = require('react');

class Home extends React.Component {
    render() {
        return (
            <form action='/api/projects' method='POST'>
                <h1>Imani Carolyn Designs Admin Page</h1> <br />
                <input type="submit" name='' value='Room Types' action='/api/rooms'/> <br />
                <input type="submit" name='' value='Clients' action='/api/clients'/> <br />
                <input type="submit" name='' value='Current Projects' action='/api/projects'/> <br />
                <input type="submit" name='' value='Add New Client' action='/views/NewClient'/>
            </form>
        )
    }
}

module.exports = Home;