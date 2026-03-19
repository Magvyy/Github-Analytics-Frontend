import { useCallback, useEffect } from 'react';
import { ReactFlow, addEdge, type Node, type Edge, useNodesState, useEdgesState, ConnectionLineType, type Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import type { CommitResponse, CommitTree } from "@/src/api/CommitAPI"
import StraightEdge from './react-flow/StraightEdge';
import CircularNode from './react-flow/CircularNode';
import { getLayoutedElements } from '../services/getLayoutedElements';

const edgeTypes = {
    "straight-edge": StraightEdge
}

const nodeTypes = {
    "circular-node": CircularNode
}

interface RepoCommitTreeProps {
    data: CommitTree[]
}
export function RepoCommitTree({ data }: RepoCommitTreeProps) {
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
    // Node has { id: str, type: str, data: { label: str }, position: { x: number, y: number } }
    // Edge has { id: str, source: str, target: str, type: str, animated: boolean }

    useEffect(() => {
        const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(data);
        setNodes(layoutedNodes);
        setEdges(layoutedEdges);
    }, [data])

    const onConnect = useCallback((params: Connection) => setEdges(eds => addEdge({ ...params, type: ConnectionLineType.Straight }, eds)), []);
    const onLayout = useCallback((direction: string) => {
        const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(data, direction);
        setNodes([...layoutedNodes]);
        setEdges([...layoutedEdges]);
    }, [nodes, edges]);

    return (
        <div className="w-full flex-1 flex flex-col py-6 bg-card rounded-2xl ring-1 ring-foreground/10 ">
            <p>
                Commit branch
            </p>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                nodesDraggable={false}
                onConnect={onConnect}
                className="flex-1 min-h-[400px]"
            />
        </div>
    )
}
