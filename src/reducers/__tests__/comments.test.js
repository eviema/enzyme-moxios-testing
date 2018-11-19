import commentsReducer from '../comments';
import { SAVE_COMMENT } from '../../actions/types';

it('handles actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'new comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(['new comment']);
});

// not that useful...
it('handles action with unknown type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
});