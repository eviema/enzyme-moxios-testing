import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
    // intercept any network requests that axios is trying to issue
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
    })
});

afterEach(() => {
    moxios.uninstall();
});

it ('can fetch a list of comments and display them', (done) => {
    // attemp to render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    // find the fetchComments button and click it
    wrapped.find('.fetch-comments').simulate('click');

    // expect to find a list of comments!

    // below is going to fail,
    // because tests are running in a fake browser, so to speak,
    // or the command line env. 
    
    // introduce a new library moxios to handle network requests in a testing environment.
    // it tricks axios into thinking it's working the way it should be.
    // watch axios attempting to make requests, 
    // and every time it does, trick axios into thinking 
    // it gets a response successfully and instantly.
    // NO network request is actually created. 
    // see beforeEach and afterEach methods above for code. 


    // need to introduce a TINY little pause 
    // between the expectation getting executed 
    // and moxios passing back the response.
    // otherwise test WILL fail. 
    moxios.wait(() => {
        // want to get the latest version of comments after response
        wrapped.update();

        expect(wrapped.find('li').length).toEqual(2);

        // call this parameter of the callback function, 
        // so that jest knows we're done, 
        // and it can finish up the test. 
        done();

        wrapped.unmount();
    });
});