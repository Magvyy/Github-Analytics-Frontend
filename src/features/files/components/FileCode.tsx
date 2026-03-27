import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';


interface FileCodeProps {
    code: string
}
export function FileCode({ code }: FileCodeProps) {
    const redlines = code.split("\n").map((line: string, index) => [line, index]).filter(([line, index]) => /^-/.test(line as string)).map(([line, index]) => index as number + 1);
    const greenlines = code.split("\n").map((line: string, index) => [line, index]).filter(([line, index]) => /^\+/.test(line as string)).map(([line, index]) => index as number + 1);

    const lineProps = (lineNumber: number) => {
        const style = { display: "block", width: "100%", backgroundColor: "#ffffff00" };
        if (redlines.includes(lineNumber)) {
            style.backgroundColor = "#7F1D1D";
        } else if (greenlines.includes(lineNumber)) {
            style.backgroundColor = "#14532D";
        } else {
            // style.backgroundColor = "#1E3A8A";
        }
        return { style };
    };
    return (
        <SyntaxHighlighter style={monokai} showLineNumbers={true} wrapLines={true} lineProps={lineProps}>
            {code}
        </SyntaxHighlighter>
    );

}