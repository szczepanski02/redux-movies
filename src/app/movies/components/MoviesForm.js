import React from 'react';
import { connect } from 'react-redux';
import actions from '../duck/actions';

const MoviesForm = (props) => {

    const movieInput = React.createRef();

    const addMovie = e => {
        e.preventDefault();
        props.add(movieInput.current.value);
        // console.log(movieInput.current.value);
        movieInput.current.value = '';
    }

    return (
        <form onSubmit={addMovie}>
            <input type="text" ref={movieInput} />
            <button type="submit">Add movie</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => ({
    add: movie => dispatch(actions.add(movie))
});

export default connect(null, mapDispatchToProps)(MoviesForm);