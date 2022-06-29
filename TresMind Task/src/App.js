import './App.css';
import DrawerAppBar from './components/navbar';
import { Button } from '@mui/material';

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
    </div>
  );
}

export default App;
