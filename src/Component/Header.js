import React,{Component,Fragment} from 'react';

class Header extends Component{
    render(){
        return(
            <Fragment>
                <center>
                    <h1>React app</h1>
                </center>
            </Fragment>
        )
    }
}


/*
const Header = () => {
    return(
        <div>
            <center>
                <h1>React App</h1>
            </center>
            <hr/>
        </div>
    )
}
*/

export default Header;