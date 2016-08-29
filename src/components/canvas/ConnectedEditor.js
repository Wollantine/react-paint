import initialState from '../../reducers/initialState.js';
import { connect, getDiff } from 'redux-haiku';

import Editor from './Editor.js';
import Tool from './tools/Tool.js';
import Brush from './tools/Brush.js';

class ConnectedEditor extends Editor {

    constructor(canvas, width, height, store) {
        super(canvas, width, height);
        this.connectToStore(store);
        this.setTool(initialState.defaultOptions.defaultTool);
    }
    
    setTool(toolName) {
        let tool = Tool;
        switch (toolName) {
            case 'brush':
                tool = Brush;
        }

        this.tool = new tool(this.ctx, initialState.stroke, this.getState.bind(this), this.store);
    }

    connectToStore(store) {
        this.store = store;
        connect(this.mapStateToProps)(this.listener.bind(this))(store);
    }
    
    mapStateToProps(state) {
        return {
            canvas: state.canvas.present
        };
    }
    
    listener({canvas}) {
        this.drawState(canvas.image);
    }

    
    /* PROXY METHODS FOR TOOL */
    
    onMouseDown(event) {
        this.updateCanvasPosition(this.canvas);
        return this.tool.onMouseDown(this.getCursorPosition(event), event);
    }

    onMouseMove(event) {
        return this.tool.onMouseMove(this.getCursorPosition(event), event.buttons, event);
    }

    onMouseUp(event) {
        return this.tool.onMouseUp(event);
    }

    onMouseOut(event) {
        return this.tool.onMouseOut(event);
    }
}

export default ConnectedEditor;
