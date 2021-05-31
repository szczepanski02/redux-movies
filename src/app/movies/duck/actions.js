import types from './types';

const add = item => ({
    type: types.ADD_MOVIE, item
});

const reset = item => ({
    type: types.RESET_MOVIES, item
})

const actions = {
    add,
    reset
}

export default actions;