import types from '../actions/actions';

const type = (name) => {
    return types[name].type;
};

export default type;
