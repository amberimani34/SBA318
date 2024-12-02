const React = require('react');

class New extends React.Component {
    render() {
        return (
            <form action='/api/clients' method='POST'>
                Name: <input type='text' name='name' /> <br />
                House Type: <input type="text" name='houseType' /> <br />
                Number of Projects: <input type="text" name='numberOfProjects' /> <br />
                Current Projects: <input type="checkbox" name='currentProjects' /> <br />
                <input type="submit" name='' value='Add New Client'/>
            </form>
        )
    }
}

module.exports = New;