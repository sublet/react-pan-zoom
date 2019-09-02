import * as React from "react";
export interface IDragData {
    x: number;
    y: number;
    dx: number;
    dy: number;
}
export interface IReactPanZoomStateType {
    dragging: boolean;
    dragData: IDragData;
    matrixData: number[];
}
export interface IReactPanZoomProps {
    height?: string;
    width?: string;
    className?: string;
    enablePan?: boolean;
    zoom?: number;
    pandx?: number;
    pandy?: number;
    onPan?: (x: number, y: number) => void;
}
export default class ReactPanZoom extends React.PureComponent<IReactPanZoomProps, IReactPanZoomStateType> {
    static defaultProps: Partial<IReactPanZoomProps>;
    private getInitialState;
    private panWrapper;
    private panContainer;
    state: {
        dragData: {
            dx: number;
            dy: number;
            x: number;
            y: number;
        };
        dragging: boolean;
        matrixData: number[];
    };
    private onMouseDown;
    componentWillReceiveProps(nextProps: IReactPanZoomProps): void;
    setMatrixData: (x: number, y: number) => void;
    private onMouseUp;
    private getNewMatrixData;
    private onMouseMove;
    render(): JSX.Element;
}
