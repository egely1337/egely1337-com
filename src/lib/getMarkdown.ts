import { existsSync, readFileSync } from "fs";
import { join } from "path";

export default function getMarkdown(
    markdown_name: string
): string | null {
    // static path variable
    const path = join(process.cwd(), 'markdown', markdown_name);

    // if file exists
    if(existsSync(path)) {
        // return file
        return readFileSync(path).toString();
    } 

    // return null
    return null;
}