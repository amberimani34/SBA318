const React = require('react');

class New extends React.Component {
    render() {
        return (
            <>
            <div>
                <h1>Add New Client</h1>
                <form action='/api/clients' method='POST'>
                    Name: <input type='text' name='name' /> <br />
                    House Type: <input type="text" name='houseType' /> <br />
                    Number of Projects: <input type="text" name='numberOfProjects' /> <br />
                    Current Projects: <input type="checkbox" name='currentProjects' /> <br />
                    <input type="submit" value='Add New Client' id='input' />
                </form>
                
                
                <form action='/views/home' method='GET'>
                    <input type="submit" value='Home Page' id='input' />
                </form>
                </div>
            </>
        )
    }
}

module.exports = New;