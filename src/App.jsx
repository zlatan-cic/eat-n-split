import Button from './components/Button';
import FriendsList from './components/FriendsList';
import FromAddFriens from './components/FromAddFriens';
import FormSplitBill from './components/FormSplitBill';


function App() {
  return(
    <>
      <div className='app'>
        <div className='sidebar'>
        <FriendsList />
        <FromAddFriens/>
        <Button>Add Friend</Button>
        </div>
        <FormSplitBill/>
      </div>
    </>

  );
}

export default App;

