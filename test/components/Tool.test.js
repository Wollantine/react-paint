import Tool from '../../src/components/canvas/tools/Tool.js';
import sinon from 'sinon';

describe('Tool', () => {

    const ctx = {
            stroke: sinon.spy(),
            beginPath: sinon.spy(),
            moveTo: sinon.spy(),
            lineTo: sinon.spy(),
            closePath: sinon.spy()
        },
        getState = sinon.spy(() => (42)),
        store = {
            subscribe: sinon.spy(),
            dispatch: sinon.spy(),
            getState: sinon.spy()
        },
        tool = new Tool(ctx, {color: '#000', size:1}, getState, store);

    describe('on creation', () => {

        it('should init its fields', () => {
            tool.ctx.should.equal(ctx);
            tool.editorGetImage.should.equal(getState);
        })

        it('should set the stroke style', () => {
            ctx.lineWidth.should.equal(1);
            ctx.strokeStyle.should.equal('#000');
        })

    })

    describe('on state update', () => {

        it('should update the stroke style', () => {
            tool.listener({stroke: {color: '#000', size: 3}});
            ctx.lineWidth.should.equal(3);
        })

    })

    describe('on dispatching new state', () => {

        before(() => {
            tool.dispatchNewState();
        })

        it('should call getState', () => {
            getState.should.have.been.called;
        })

        it('should call store.dispatch', () => {
            store.dispatch.should.have.been.called;
        })

    })

    describe('on replacing dispatched state', () => {

        before(() => {
            tool.replaceDispatchedState();
        })

        it('should call getState', () => {
            getState.should.have.been.called;
        })

        it('should call store.dispatch', () => {
            store.dispatch.should.have.been.called;
        })

    })

    describe('on painting path', () => {

        beforeEach(() => {
            ctx.stroke.reset();
        })

        it('should call ctx.stroke if some points provided', () => {
            tool.paintPath([{x:1,y:1}]);
            ctx.stroke.should.have.been.called;
        })

        it('should not call ctx.stroke if no points provided', () => {
            tool.paintPath();
            ctx.stroke.should.not.have.been.called;
        })
    })

})
