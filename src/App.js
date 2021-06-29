
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb } from 'react-bootstrap';

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Top </h2>
        <Breadcrumb>
          <Breadcrumb.Item> text 1</Breadcrumb.Item>
        </Breadcrumb> 
        <Button> Button </Button>
        <AmplifySignOut />
       
      </header>
    </div>
  );
}

export default withAuthenticator(App);
