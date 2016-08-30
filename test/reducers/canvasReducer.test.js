import {canvas as reducer} from '../../src/reducers/reducers.js';
import createAction from '../../src/actions/ActionFactory.js';

/**
 * Builder pattern for canvas state
 *
 * @param past
 * @param present
 * @param future
 * @returns {{past: Array, present: *, future: Array}}
 */
const buildCanvasState = (past = [], present = null, future = []) => {
    return {
        past,
        present,
        future
    }
};

describe('Canvas reducer', () => {

    const img1 = {image: 1},
        img2 = {image: 2},
        img3 = {image: 3};

    describe('upon DRAW_STROKE', () => {

        let action = createAction('DRAW_STROKE', img1);

        it('should update the present canvas', () => {
            let actual = reducer(buildCanvasState([img2], img3), action);
            actual.present.should.deep.equal(img1);
        })

        it('should update the present canvas when present is null', () => {
            let actual = reducer(buildCanvasState(), action);
            actual.present.should.deep.equal(img1);
        })
        
        it('should add the previous canvas to the past', () => {
            let actual = reducer(buildCanvasState([img2], img3), action);
            actual.past.should.deep.equal([img2, img3]);
        })

        it('should reset the future', () => {
            let actual = reducer(buildCanvasState([], img2, [img3]), action);
            actual.future.should.deep.equal([]);
        })

    });

    describe('upon EXTEND_STROKE', () => {

        let action = createAction('EXTEND_STROKE', img1);

        it('should update the present canvas', () => {
            let actual = reducer(buildCanvasState([img2], img3), action);
            actual.present.should.deep.equal(img1);
        })

        it('should update the present canvas when present is null', () => {
            let actual = reducer(buildCanvasState(), action);
            actual.present.should.deep.equal(img1);
        })

        it('should not modify the past', () => {
            let actual = reducer(buildCanvasState([img2], img3), action);
            actual.past.should.deep.equal([img2]);
        })

    })

    describe('upon UNDO', () => {

        let action = createAction('UNDO');

        it('should put the last past into the present', () => {
            let actual = reducer(buildCanvasState([img2], img3), action);
            actual.present.should.deep.equal(img2);
        })

        it('should remove last element from past', () => {
            let actual = reducer(buildCanvasState([img1, img2], img3), action);
            actual.past.should.deep.equal([img1]);
        })

        it('should put present into first element of the future', () => {
            let actual = reducer(buildCanvasState([img1], img2, [img3]), action);
            actual.future.should.deep.equal([img2, img3]);
        })

        it('should not modify present if past is empty', () => {
            let actual = reducer(buildCanvasState([], img2, [img3]), action);
            actual.present.should.deep.equal(img2);
        })

    })

    describe('upon REDO', () => {

        let action = createAction('REDO');

        it('should put the first future into the present', () => {
            let actual = reducer(buildCanvasState([], img1, [img2, img3]), action);
            actual.present.should.deep.equal(img2);
        })

        it('should remove first element from future', () => {
            let actual = reducer(buildCanvasState([], img1, [img2, img3]), action);
            actual.future.should.deep.equal([img3]);
        })

        it('should put present into last element of the past', () => {
            let actual = reducer(buildCanvasState([img1], img2, [img3]), action);
            actual.past.should.deep.equal([img1, img2]);
        })

        it('should not modify present if future is empty', () => {
            let actual = reducer(buildCanvasState([img1], img2, []), action);
            actual.present.should.deep.equal(img2);
        })

    })

});
