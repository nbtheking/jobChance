import { Outlet,Link } from "react-router-dom";
import {Wrapper,Html} from '../component/styles/LayoutStyle';
import "../index.css"
function Layout() {
    return (
        <><Html>
           <Wrapper>
            <ul>
                <li>
                     JobChance
                </li>
                <li>
                    <Link to="/" style={{ textDecoration:'none',color:'white'}}>Home</Link>
                </li>
                <li>
                    <Link to="/createasemployee" style={{ textDecoration:'none', color:'white'}}>sign up as employee</Link>
                </li>
                <li>
                     <Link to="/createasemployer" style={{ textDecoration:'none', color:'white'}}>sign up as employer</Link>
                </li>
                <li>
                     <Link to="/jobs" style={{ textDecoration:'none', color:'white'}}>jobs</Link>
                </li>
            </ul>   
          </Wrapper> 
          </Html>
          <Outlet/>
        </>
    )
}

export default Layout
