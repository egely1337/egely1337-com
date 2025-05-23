export default function getText(text: string) {
    if(text.length < 300) return text;
    else {
        return `${
            text
            .split(" ")
            .slice(0, 20)
            .join(' ')
            .replace(',', '')}...`
    }
}