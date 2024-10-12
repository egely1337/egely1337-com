import fs from "fs";
import matter from "gray-matter";
import path from "path";
import moment from 'moment';


interface IPost {
    title: string,
    date: moment.Moment,
    content: string,
    id: string,
    author: string
}

export async function getPosts(): Promise<IPost[]> {
    return new Promise((resolve, reject) => {
        const postsDirectory = path.join(process.cwd(), 'posts');
        const fileNames = fs.readdirSync(postsDirectory);
        
        const allPostsData: IPost[] = fileNames.map((file) => {
            const id = file.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, file);
            const fileContent = fs.readFileSync(fullPath, 'utf8');
        

            const matterResult = matter(fileContent);
        
            const content = matterResult.content;
            return {
                id,
                content,
                author: matterResult.data.author,
                date: moment(matterResult.data.date),
                title: matterResult.data.title
            }
        })

        const sorted = allPostsData.sort((a, b) => b.date.diff(a.date));
        const json: IPost[] = JSON.parse(JSON.stringify(sorted))

        resolve(json);
    }
)
}