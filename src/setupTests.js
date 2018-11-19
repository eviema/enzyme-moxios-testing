import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// make sure the filename and path is exactly as it is now.
// On project start, Jest is going to look for a file
// named setupTests.js inside /src dir.
// if it exists, Jest will execute it before anything else 
// in the project gets loaded.
// so perfect place to do setup of our Jest test suite, 
// before any actual test starts to run.
Enzyme.configure({ adapter: new Adapter() });