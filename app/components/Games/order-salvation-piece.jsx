import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd';
import { DropTarget } from 'react-dnd';
import { compose } from 'redux';
import css from 'classnames';

class OrderSalvationPiece extends Component {
    render() {
        const { connectDragSource, connectDropTarget, isDragging, item } = this.props;

        const connectPiece = compose(
            connectDragSource,
            connectDropTarget
        );

        const classNames = css('order-salvation__option', {
            'order-salvation__option--dragging': isDragging
        });

        return connectPiece(
            <div className={classNames}>
                <div className="order-salvation__option-name">{item.name}</div>
                <div className="order-salvation__option-definition">{item.definition}</div>
            </div>
        );
    }
}

const pieceSource = {
    beginDrag(props) {
        return {
            index: props.index,
            isDragging: true,
            item: props.item
        };
    }
};

function collectSource(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        connectDragPreview: connect.dragPreview(),
        isDragging: monitor.isDragging()
    }
}

const pieceTarget = {
    drop(props) {

    },
    hover(props, monitor, component) {
        const sourceProps = monitor.getItem();
        const sourceIndex = sourceProps.index;
        const targetIndex = props.index;

        const cursorPosition = monitor.getClientOffset();

        const sourceRectangle = findDOMNode(component).getBoundingClientRect();
        const middleY = (sourceRectangle.top + sourceRectangle.bottom) / 2;

        const location = cursorPosition.y >= middleY ? 'below' : 'above';
        console.log(sourceIndex, targetIndex, location);
        if (
            (targetIndex - sourceIndex <= 1 && targetIndex - sourceIndex >= 0 && location === 'above')
            || (sourceIndex - targetIndex <= 1 && sourceIndex - targetIndex >= 0 && location === 'below')
        ) { return; }

        const sourceItem = sourceProps.item;
        const orderCopy = props.order.slice();
        const newIndex = location === 'below' ? targetIndex : targetIndex - 1;
        orderCopy.splice(newIndex, 0, orderCopy.splice(sourceIndex, 1)[0]);

        props.setParentState({ order: orderCopy });
    }
};

function collectTarget(connect, monitor) {
return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
};
}

const connectDnD = compose(
    DragSource('orderSalvationPiece', pieceSource, collectSource),
    DropTarget('orderSalvationPiece', pieceTarget, collectTarget)
);

export default connectDnD(OrderSalvationPiece);
