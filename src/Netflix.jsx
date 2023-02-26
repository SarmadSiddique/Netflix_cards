
import Sdata from "./Sdata";
import Card from "./Card";
function Netflix()
{
    return(  <Card 
    key={Sdata[6].id}
    cardimg={Sdata[6].cardimg}
    cardtitle={Sdata[6].cardtitle}
    cardcat={Sdata[6].cardcat}
    link={Sdata[6].link} />
    );
}
export default Netflix;