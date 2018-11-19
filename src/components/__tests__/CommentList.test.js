import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../CommentList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {

    const initialState = {
        comments: ['comment 1', 'comment 2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

// verify the NUMBER of comments in EACH li element
it ('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

// verify 
it ('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('comment 1');
    expect(wrapped.render().text()).toContain('comment 2');
});