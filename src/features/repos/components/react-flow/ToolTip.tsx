import { Position } from "@xyflow/react";
 
import {
  NodeTooltip,
  NodeTooltipContent,
  NodeTooltipTrigger,
} from "@/components/node-tooltip";
 
export default function ToolTip() {
    return (
        <NodeTooltip>
            <NodeTooltipContent position={Position.Top} className="text-center">
                You can display any content here, like text, images, or even components.{" "}
                <br />
                The tooltip will appear when you hover over the trigger.
            </NodeTooltipContent>
            <NodeTooltipTrigger className="rounded border border-gray-300 p-2 text-lg font-bold">
                Hover me! ⭐️
            </NodeTooltipTrigger>
        </NodeTooltip>
    );
};