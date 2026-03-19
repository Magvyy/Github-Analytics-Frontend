import type { CommitTreeNode } from "@/src/api/CommitAPI";
import { Position, type Edge, type Node } from "@xyflow/react";

import ELK from 'elkjs/lib/elk.bundled.js';

const elk = new ELK();

const nodeWidth = 15;
const nodeHeight = 15;


export const getLayoutedElements = async (data: CommitTreeNode[], direction = "RIGHT") => {
    const isHorizontal = direction === "RIGHT";
    let graph = {
        id: "root",
        layoutOptions: { 
            'elk.algorithm': 'layered',
            'elk.direction': direction,
            'elk.layered.spacing.nodeNodeBetweenLayers': '40',
            'elk.spacing.nodeNode': '40'
        },
        children: [{id: "temp", width: nodeWidth, height: nodeHeight, data: {id: "temp", created: "N/A", message: "N/A", author: "N/A", committer: "N/A"}, type: "N/A"}],
        edges: [{id: "temp", sources: ["temp"], targets: ["temp"]}]
    };

    graph.children = data.map((commitTreeNode: CommitTreeNode) => {
        const commit = commitTreeNode.commit;
        return {
            id: commit.id,
            width: nodeWidth,
            height: nodeHeight,
            data: {
                id: commit.id,
                created: commit.created,
                message: commit.message,
                author: commit.author.name,
                committer: commit.committer.name
            },
            type: "circular-node"
        }
    });

    graph.edges = data.flatMap((commitTreeNode: CommitTreeNode) => {
        const commit = commitTreeNode.commit;
        const children = commitTreeNode.children;
        return children.map((id: string) => {
            return {
                id: `${commit.id}->${id}`,
                sources: [commit.id],
                targets: [id]
            }
        })
    })

    const layout = await elk.layout(graph);

    const nodes: Node[] = layout.children!.map(node => ({
        ...node,
        targetPosition: isHorizontal ? Position.Left : Position.Top,
        sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
        // We are shifting the dagre node position (anchor=center center) to the top left
        // so it matches the React Flow node anchor point (top left).
        position: {
            x: node.x!,
            y: node.y!,
        },
    }));

    const edges: Edge[] = layout.edges.map(edge => ({
        id: edge.id,
        source: edge.sources[0],
        target: edge.targets[0],
        type: "straight-edge",
        animated: true
    }));

    return { nodes, edges }
}