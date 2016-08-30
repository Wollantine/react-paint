import Brush from '../../src/components/canvas/tools/Brush.js';
import sinon from 'sinon';

describe('Brush', () => {
    
    const ctx = sinon.spy(),
        getState = sinon.spy(() => (42)),
        store = {
            subscribe: sinon.spy(),
            dispatch: sinon.spy(),
            getState: sinon.spy()
        },
        brush = new Brush(ctx, {color: '#000', size:1}, getState, store);
    
    describe('on creation', () => {

        it('should init its properties correctly', () => {
            brush.outside.should.equal(false);
            brush.shouldPaint.should.equal(false);
            let aux = brush.startPoint === null;
            aux.should.be.ok;
            brush.hasBeenOutside.should.equal(false);
        })

    })

    describe('on saving image', () => {

        let replaceDispatchedState, dispatchNewState;

        before(() => {
            replaceDispatchedState = sinon.spy(brush, 'replaceDispatchedState');
            dispatchNewState = sinon.spy(brush, 'dispatchNewState');
        })

        beforeEach(() => {
            replaceDispatchedState.reset();
            dispatchNewState.reset();
        })

        it('should replace dispatched state if has been outside', () => {
            brush.hasBeenOutside = true;
            brush.saveImage();
            replaceDispatchedState.should.have.been.called;
            dispatchNewState.should.not.have.been.called;
        })

        it('should dispatch new state otherwise', () => {
            brush.hasBeenOutside = false;
            brush.saveImage();
            replaceDispatchedState.should.not.have.been.called;
            dispatchNewState.should.have.been.called;
        })

    })

    describe('on painting move', () => {

        it('should call paintPath if we should paint')

        it('should not call paintPath otherwise')

        it('should paint a pixel if startPoint and here are the same')

    })

    describe('on mouse down', () => {

        it('should update its information correctly', () => {
            let point = {x:1,y:1};
            brush.onMouseDown(point);
            brush.shouldPaint.should.equal(true);
            brush.startPoint.should.deep.equal(point);
            brush.hasBeenOutside.should.equal(false);
        })

    })

    describe('on mouse reenter', () => {

        it('should update startPoint if we reenter clicking')
        
        it('should record has been outside if we reenter clicking')
        
        it('should keep painting if we reenter clicking')
        
        it('should stop painting otherwise')
    })

    describe('on mouse move', () => {
        
        it('should call reenter if it was outside')
        
        it('should record we are not outside anymore')
        
        it('should call paintMove')
        
        it('should update startPoint')

    })

    describe('on mouse up', () => {

        it('should call paintMove')
        
        it('should stop painting')
        
        it('should call saveImage')
        
        it('should reset hasBeenOutside')
        
    })

    describe('on mouse out', () => {

        it('should call paintMove')

        it('should record we are outside')

        it('should call saveImage if we were painting')

        it('should not call saveImage otherwise')

    })
    
})
