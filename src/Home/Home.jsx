import Header from "../Header/Header"
import image from '../Image/profile2.jpg'
import './Home.css'
import { TypeAnimation } from 'react-type-animation';
function Home()
{
    return(
        <>
            <Header/>
            <main>
                <div className="part-1">
                    <p className="hi">Hi There,<br></br>I'm Hamza Mirza</p>
                <TypeAnimation className="typeani"
          sequence={[
            'I Am a Web Developer.', 
            900, 
            'I Am a Graphic Desginer.', 
            900,
          ]}
          wrapper="span"
          speed={2} 
          repeat={Infinity}
        />
                </div>

                <div className="part-2">
                    <img  className="profileimage" src={image} height={400}></img>
                </div>
            </main>
        </>
    )
}

export default Home