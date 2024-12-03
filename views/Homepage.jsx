const React = require('react');

class Home extends React.Component {
    render() {
        return (
            <>
            <form action='/api/rooms' method='GET'>
                <h1>Imani Carolyn Designs Admin Page</h1> <br />
                <input type="submit" name='' value='Room Types' /> <br />
                </form>
                <form action='/api/clients' method='GET'>
                <input type="submit" name='' value='Clients' /> <br />
                </form>
                <form action='api/projects' method='GET'>
                <input type="submit" name='' value='Current Projects' /> <br />
                </form>
                <form action='/views/NewClient' method='POST'>
                <input type="submit" name='' value='Add New Client' />
            </form>
            </>
        )
    }
}

module.exports = Home;