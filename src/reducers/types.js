import types from '../actions/actions.json';

const type = (name) => {
    return types[name].type;
};

export default type;
