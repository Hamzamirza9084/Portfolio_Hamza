import Header from "../Header/Header"
import './Education.css'

function Education()
{
    return(
        <>
            <Header/>
            <main id="maineud">
                <div className="conyear"> 
                    <p className="big">2019</p>
                    <h3>10<sup>th</sup></h3>
                    <p> School : S.T Joseph E.T High School Bilimora
                    <br></br> <br></br>
                        Board : G.S.H.S.E.B
                    <br></br> <br></br>
                        Percentage : 52 %
                    </p>
                </div>
                <div className="conyear"> 
                    <p className="big">2021</p>
                    <h3>12<sup>th</sup></h3>
                    <p> School : S.T Joseph E.T High School Bilimora
                    <br></br> <br></br>
                        Board : G.S.H.S.E.B
                    <br></br> <br></br>
                        Percentage : 55 %
                    </p>
                </div>

                <div className="conyear"> 
                    <p className="big">2022-2025</p>
                    <h3>BCA</h3>
                    <p> College : S.S.Agrawal College Navsari
                    <br></br> <br></br>
                        Board : G.S.H.S.E.B
                    <br></br> <br></br>
                        YGPA : 8.11 (This are the combine Four Sem Average) 
                    </p>
                </div>
            </main>
        </>
    )
}

export default Education