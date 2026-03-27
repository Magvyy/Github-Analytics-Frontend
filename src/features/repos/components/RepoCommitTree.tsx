import { useCallback, useEffect } from 'react';
import { ReactFlow, addEdge, type Node, type Edge, useNodesState, useEdgesState, ConnectionLineType, type Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import type { CommitTreeNode } from "@/src/api/CommitAPI"
import StraightEdge from './react-flow/StraightEdge';
import CircularNode from './react-flow/CircularNode';
import { getLayoutedElements } from '../services/getLayoutedElements';
import Loader from '@/src/shared/components/Loader';

const edgeTypes = {
    "straight-edge": StraightEdge
}

const nodeTypes = {
    "circular-node": CircularNode
}

interface RepoCommitTreeProps {
    data: CommitTreeNode[]
    dataLoading: boolean
}
export function RepoCommitTree({ data, dataLoading }: RepoCommitTreeProps) {
    const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
    // Node has { id: str, type: str, data: { label: str }, position: { x: number, y: number } }
    // Edge has { id: str, source: str, target: str, type: str, animated: boolean }

    useEffect(() => {
        const handleLayout = async () => {
            const { nodes: layoutedNodes, edges: layoutedEdges } = await getLayoutedElements(data);
            setNodes(layoutedNodes);
            setEdges(layoutedEdges);
        }
        handleLayout();
    }, [data])

    return (
        <div className="w-full flex-1 flex flex-col py-6 bg-card rounded-2xl ring-1 ring-foreground/10">
            <p>
                Commit branch
            </p>
            {dataLoading ?
                <Loader/> :
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    nodesDraggable={false}
                    className="flex-1 min-h-[400px]"
                    fitView
                />
            }
        </div>
    )
}
