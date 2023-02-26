import './App.css';
import Ddata from './Ddata';
import Sdata from './Sdata';
import Component from './Component';
import Card from './Card';
import Amazone from './Amazone';
import Netflix from './Netflix';
import Galleryfood from './KitchenMenu/Galleryfood';

// new function of map method----
function newdata(val) {
  return (<Card
    key={val.id}
    cardcat={val.cardcat}
    cardtitle={val.cardtitle}
    link={val.link}
    cardimg={val.cardimg}
  />
  );
}

  const hstyle = {
    textAlign: 'center',
    // backgroundColor: 'red',
    fontFamily: 'monospace',
    fontWeight: '500',
    color:"white"
  }
  const favmovie = "netflix";

function App() {
  return (
    <>
    
      <h1 style={hstyle}>List OF Top 12 Netflix Movies</h1>
      <div class="container-fluid"> 
      <div className='row'>
        <div className='col-md-12 col-sm-12'>
        {Sdata.map(newdata)}
        {Ddata.map(newdata)}
        </div>
      </div>
      </div> 
       <div class="container-fluid "> {Ddata.map(newdata)}</div> 
      {/* Basic Card */}
       {/* <Card 
        key="1"
        cardcat="sarmad"
        cardtitle="😎is not it lovely"
        link="https://www.netflix.com/pk/"
        cardimg="https://wallpapercave.com/wp/wp1917157.jpg"
      />
    {favmovie ==="netflix" ? <Netflix/> : <Amazone/>} */}
    {/* <Galleryfood/> */}
    </> 
  );


}

export default App; 






{/* <>
<div className='container mt-5'  style={{ height: 400, width: '100%' }}>
<TableContainer >
    <Table sx={{ minWidth: 650 ,minHeight:400}} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow>
        <TableCell align="center">Id</TableCell>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Password</TableCell>
          <TableCell align="center">Email</TableCell>
          <TableCell align="center">Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
    
      </TableBody>
    </Table>
  </TableContainer>

    
    
  </div>
  </> */}