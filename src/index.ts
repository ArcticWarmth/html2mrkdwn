export class html2mrkdwn {

    /**
     * DO NOT USE
     * Use {@link convert()} as it is a static method
     * @hideconstructor
     */
    constructor() {

    };

    /**
     * Parse html code into Slack's mrkdwn language
     *
     * @static
     * @param html HTML code
     * @param removeOtherTags Remove all tags that are not supported by Slack Mrkdwn
     * @returns converted HTML to Slack Mrkdwn
     */
    public static convert(html: string, removeOtherTags: boolean): string {

        let converted:string = html;

        // Clear non context tags
        converted = converted.replace(/<\/?(span|div|section|article)[^>]*>/gi, "");
        // Parse <p> tags
        converted = converted.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "$1");
        //converted = converted.replace(/<\/p>/g, "");

        // Parse <br> tags
        converted = converted.replace(/<br[^>]*\/?>/gi, "\n");

        // Parse <b>, <strong>, <i>, and <em> tags
        converted = converted.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, "*$2*");
        converted = converted.replace(/<(em|i)[^>]*>(.*?)<\/\1>/gi, "_$2_");
        
        // Parse <strike> tags
        converted = converted.replace(/<(strike|s)[^>]*>(.*?)<\/\1>/gi, "~$2~");

        // Parse <blockquote> tags
        converted = converted.replace(/<(blockquote|q)[^>]*>(.*?)<\/\1>/gi, "> $2");

        // Parse <code> tags
        converted = converted.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, "`$1`");

        // Parse Lists
        converted = converted.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n");
        converted = converted.replace(/<\/?[uo]l[^>]*>/gi, "\n");

        // Parse Links
        converted = converted.replace(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, "<$1|$2>");

        if(removeOtherTags) {
            // Remove all other tags
            converted = converted.replace(/<[^>]+>/g, "");
        }

        return converted.trim();
    }

    public static extractImg(html: string): string[] {
        const imgTags = html.match(/<img [^>]*src="[^"]*"[^>]*>/g) || [];
        const imgSrcs = imgTags.map(tag => {
            const match = tag.match(/src="([^"]*)"/);
            return match ? match[1] : "";
        });
        return imgSrcs;
    }

}