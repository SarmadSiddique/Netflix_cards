import react from 'react';
import Ddata from "./Ddata";
import Card from "./Card";

function Amazone()
{
    return(  <Card 
    key={Ddata[5].id}   
    cardimg={Ddata[5].cardimg}
    cardtitle={Ddata[5].cardtitle}
    cardcat={Ddata[5].cardcat}
    link={Ddata[5].link} />
    );
}
export default Amazone;