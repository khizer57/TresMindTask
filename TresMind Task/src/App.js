import './App.css';
import DrawerAppBar from './components/navbar';
import { Button } from '@mui/material';
import ActionAreaCard from './components/card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <DrawerAppBar/>
        </div>
        <div>
        <div className='type'>
          <p className='big'>Coupon&U</p>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a
           type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged. It was popularised
             in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including
               versions of Lorem Ipsum.
        </p>
        <div className='btn-box'>
        <Button style={{ background: 'white', boxShadow: 'none'}} sx={{ border: 1, borderBottomRightRadius: '20px', bgcolor:'white', p: 1, pl: 2, pr: 2, fontWeight: 'bold', color:'#852EBD' }}>Buy Now -&gt;</Button>
        </div>
        </div>
        </div>
      </header>
      <header className="App-header2">
      <div>
        <p className='hd'>How Does it Works</p>
      </div>
      <ActionAreaCard/>
      <div className="text">
        <p className='wyl'>Why You Love It </p>
        <p className='list'>NOT CONVINCED YET? READ ON TO KNOW WHY YOU SHOULD BUY IT. </p>
        <ul className='list'>
          <li>VALID 7 DAYS A WEEK</li>
          <li>TRACK YOUR SAVINGS</li>
          <li>GIVE ACCESS TO FAMILY AND FRIENDS</li>
          <li>SHARE OFFERS WITH OUR PING FEATURES</li>
        </ul>
      </div>
      </header>
    </div>
  );
}

export default App;
