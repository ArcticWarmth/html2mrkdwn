export class html2mrkdwn {

    /**
     * DO NOT USE
     * Use {@link convert()} as it is a static method
     * @hideconstructor
     */
    constructor() {
        
    };
    
    /**
     * Rudimentary method for converting HTML code to mrkdown
     * 
     * @static
     * @param html HTML code
     * @param removeOtherTags Remove all tags that are not supported by Slack Mrkdwn
     * @returns converted HTML to Slack Mrkdwn
     */
    public static convert(html: string, removeOtherTags: boolean): string {

        let converted:string = "";

        // Parse <p> tags
        converted = html.replace(/<p>/g, "");
        converted = converted.replace(/<\/p>/g, "");

        // Parse <br> tags
        converted = converted.replace(/<br>/g, "\n");

        // Parse <b>, <strong>, and <em> tags
        converted = converted.replace(/<b>/g, "*");
        converted = converted.replace(/<\/b>/g, "*");
        converted = converted.replace(/<strong>/g, "*");
        converted = converted.replace(/<\/strong>/g, "*");
        converted = converted.replace(/<em>/g, "*");
        converted = converted.replace(/<\/em>/g, "*");

        // Parse <i> tags
        converted = converted.replace(/<i>/g, "_");
        converted = converted.replace(/<\/i>/g, "_");
        
        // Parse <strike> tags
        converted = converted.replace(/<strike>/g, "~");
        converted = converted.replace(/<\/strike>/g, "~");

        // Parse <blockquote> tags
        converted = converted.replace(/<blockquote>/g, ">");
        converted = converted.replace(/<\/blockquote>/g, "\n");

        // Parse <code> tags
        converted = converted.replace(/<code>/g, "`");
        converted = converted.replace(/<\/code>/g, "`");

        // Parse Lists
        converted = converted.replace(/<ul>/g, "");
        converted = converted.replace(/<\/ul>/g, "");
        converted = converted.replace(/<ol>/g, "");
        converted = converted.replace(/<\/ol>/g, "");
        converted = converted.replace(/<li>/g, "- ");
        converted = converted.replace(/<\/li>/g, "\n");

        // Parse Links
        converted = converted.replace(/<a href="(.*)">(.*)<\/a>/g, "<$1|$2>");

        if(removeOtherTags) {
            // Remove all other tags
            converted = converted.replace(/<(.*)>/g, "");
            converted = converted.replace(/<\/(.*)>/g, "");
        }


        return converted;
    }

}