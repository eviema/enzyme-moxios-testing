import React from 'react';
import { mount } from 'enzyme'; // for full DOM rendering
import CommentBox from '../CommentBox';
import Root from '../../Root';

// using full DOM rendering only for the purpose of this course
// in any personal or professional project, we should use shallow rendering instead, 
// since CommentBox doesn't have any child underneath it.

// NOTE: when full DOM rendering is used, the component actually gets mounted 
// to the DOM, which means that it's possible for tests to affect each other 
// if they are all using the same DOM. 
// So, while writing tests, use unmount() or sth similar as cleanup, if necessary

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    // unmount the component from the fake DOM
    // so that we no longer worry about it interfering other components
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the textarea', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', { 
                    // 'change': the actual event name, not the same of callback "onChange"
        target: { value: 'new comment' }    
                    // pass in fake event object; 
                    // replacing event in callback funciton with it doesn't break the code
        });

        wrapped.update(); // force component to update
        // why force? because this event involves an asynchronously call: setState,
        // but we want to make sure we can test the new value right away
    });

    it('has a text area that users can type in', () => {
        
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('text area emptied when the input is submitted', () => {
        
        // now is a good time to vertify the above simulated event is successful.
        // but since we have done this in the previous test, no need to repeat. 
        // expect(wrapped.find('textarea').prop('value')).toEqual('new comment');

        wrapped.find('form').simulate('submit');
        
        wrapped.update();

        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});
