import { BaseEdge, getStraightPath } from '@xyflow/react';


interface StraightEdgeProps {
    id: string
    sourceX: number
    sourceY: number
    targetX: number
    targetY: number
}
export default function StraightEdge({ id, sourceX, sourceY, targetX, targetY }: StraightEdgeProps) {
    sourceY += 3;
    targetY += 3;
    
    const [edgePath] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });
 
    return (
        <BaseEdge id={id} path={edgePath} style={{ strokeWidth: 5, stroke: "#775cff" }} />
    );
}