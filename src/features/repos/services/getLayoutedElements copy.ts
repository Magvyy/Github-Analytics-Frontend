import type { CommitTreeNode } from "@/src/api/CommitAPI";
import dagre from '@dagrejs/dagre';
import { Position, type Edge, type Node } from "@xyflow/react";


const nodeWidth = 15;
const nodeHeight = 15;
const dagreGraph = new dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));


export const getLayoutedElements = (data: CommitTreeNode[], direction = "LR") => {
    const isHorizontal = direction === "LR";
        dagreGraph.setGraph({ rankdir: direction });

        const nodes: Node[] = [];
        const edges: Edge[] = [];

        data.forEach((commitTree: CommitTreeNode) => {
            const commit = commitTree.commit;

            nodes.push({
                id: commit.id,
                data: {
                    id: commit.id,
                    created: commit.created,
                    message: commit.message,
                    author: commit.author.name,
                    committer: commit.committer.name
                },
                position: { x: 0, y: 0},
                type: "circular-node"
            });
            dagreGraph.setNode(commit.id, { width: nodeWidth, height: nodeHeight })

            commitTree.children.forEach((childId: string) => {
                edges.push({
                    id: commit.id + " - " + childId,
                    source: commit.id,
                    target: childId,
                    type: "straight-edge",
                    animated: true
                })
                dagreGraph.setEdge(commit.id, childId);
            });

        })

        dagre.layout(dagreGraph);

        const newNodes: Node[] = nodes.map((node: Node) => {
            const nodeWithPosition = dagreGraph.node(node.id);
            const newNode = {
                ...node,
                targetPosition: isHorizontal ? Position.Left : Position.Top,
                sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
                // We are shifting the dagre node position (anchor=center center) to the top left
                // so it matches the React Flow node anchor point (top left).
                position: {
                    x: nodeWithPosition.x - nodeWidth / 2,
                    y: nodeWithPosition.y - nodeHeight / 2,
                },
            };
            return newNode;
        })

        return { nodes: newNodes, edges }
    }