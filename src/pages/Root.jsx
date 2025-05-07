import { Link } from "react-router";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
         
          <nav>
            <ul>
              <li>
                <Link to='/'>Your Name</Link>
              </li>
              <li>
                <Link to='/about'>Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }
  