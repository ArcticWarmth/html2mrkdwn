export declare class html2mrkdwn {
    /**
     * DO NOT USE
     * Use {@link convert()} as it is a static method
     * @hideconstructor
     */
    constructor();
    /**
     * Rudimentary method for converting HTML code to mrkdown
     *
     * @static
     * @param html HTML code
     * @param removeOtherTags Remove all tags that are not supported by Slack Mrkdwn
     * @returns converted HTML to Slack Mrkdwn
     */
    static convert(html: string, removeOtherTags: boolean): string;
    static extractImg(html: string): string[];
}
