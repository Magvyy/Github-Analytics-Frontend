import { Handle, Position } from '@xyflow/react';

 
import {
  NodeTooltip,
  NodeTooltipContent,
  NodeTooltipTrigger,
} from "@/components/node-tooltip";

interface CircularNodeProps {
    data: {
        id: string
        created: string
        message: string
        author: string
        committer: string
    }
}
export default function CircularNode({ data }: CircularNodeProps) {
    const {id, created, message, author, committer} = data;
 
    return (
        <NodeTooltip>
            <NodeTooltipContent position={Position.Top} className="text-center z-50">
                <p>{id}</p>
                <p>Created: {created}</p>
                <p>Message: {message}</p>
                <p>Author: {author}</p>
                <p>Committer: {committer}</p>
            </NodeTooltipContent>
            <NodeTooltipTrigger className="w-[15px] h-[15px] bg-primary rounded-[50%]" onClick={() => {
                window.location.href = `/commits/${id}`;
            }}>
                <Handle
                    type="target"
                    position={Position.Top}
                    style={{
                        top: "50%",
                        left: "50%",
                    }}
                    className="opacity-0"
                />
                
                <Handle
                    type="source"
                    position={Position.Top}
                    style={{
                        top: "50%",
                        left: "50%",
                    }}
                    className="opacity-0"
                />
            </NodeTooltipTrigger>
        </NodeTooltip>
    );
}