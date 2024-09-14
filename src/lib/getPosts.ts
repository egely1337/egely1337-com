import fs from "fs";
import matter from "gray-matter";
import path from "path";



export async function getPosts() {
    return new Promise((resolve, reject) => {
        const postsDirectory = path.join(process.cwd(), 'posts');
        const fileNames = fs.readdirSync(postsDirectory);
        
        const allPostsData = fileNames.map((file) => {
            const id = file.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, file);
            const fileContent = fs.readFileSync(fullPath, 'utf8');
            
            const matterResult = matter(fileContent);
            const content = matterResult.content;
            return {
                id,
                content,
                ...matterResult.data,
            }
        })

        resolve((allPostsData.sort((a, b) => {
            //@ts-ignore
            if(a.date < b.date) return 1;
            else return 0;
        })))
    })
}