import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />);
});

// it function 
// - global, no need to import, just call it
// - used to organise all the different tests 
//   that we write inside of a single file
// - 1st argument: string description of the test
//    sole purpose is to communicate the intent of the test
//      to myself and other engineers
// - 2nd argument: function containing test logic
//     stuff to do when this test runs

// reads "It shows a comment box" or 
// "The app shows xxx" because of the filename
it('shows a comment box', () => {
    // below is not creating a real div in the browser, 
    // but a fake div on JSDOM, existing solely in memory
    // JSDOM: JS implementation of how the browser works
    // a dependency injected by create-react-app
    // tricks React into thinking it's directly working inside a browser
    // allow tests to be run without an open browser
    // note: tests are run in the command line env
    
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);

    // now we need to looks inside the div
    // and checks to see if the CommentBox is in there.

    // an "expectation"
    // core of testing
    // global function, no need to import
    // - 1st argument: the thing we want to verify
    //      we are trying to prove some fact about it
    //      the subject of an expectation
    // a "matcher" statement, e.g. toContain(xx)
    // - some matchers expect an argument, e.g. toContain(xx)
    // - others don't, e.g. toBeTruthy()

    // below is a bad approach in this case
    // because it's directly accessing the INTERNAL workings 
    //     of another component (CommentBox rather than App).
    // should write tests that only have knowledge of 
    // another component IN GENERAL (e.g. existence).
    
    // expect(div.innerHTML).toContain('Comment box');

    // below is a good approach.
    // testing the existence of a component, 
    // not its internal workings.
    // unfortunately, this toHaveXX method doesn't come with the pkg.
    // we have to write it on our own which means lots of extra work,
    // unless we install Enzyme, 
    // which is made by airbnb for easier testing of react components
    // and allows us to write lines of code similar to the one below.

    // expect(div).toHaveAnInstanceOf(CommentBox);

    // cleanup after this test is run
    // considering performance
    // ReactDOM.unmountComponentAtNode(div);




    // with Enzyme installed,
    // now is the time to write proper tests

    // return a wrapped version of App component
    // const wrapped = shallow(<App />); // now moved into beforeEach at the very beginning of this file

    // find returns an array of all instances of CommentBox found
    // toEqual: a matcher verifying the number of instances is exactly 1
    expect(wrapped.find(CommentBox).length).toEqual(1);


})

it('shows a comment list', () => {
    // const wrapped = shallow(<App />); // now moved into beforeEach at the very beginning of this file

    expect(wrapped.find(CommentList).length).toEqual(1);
})