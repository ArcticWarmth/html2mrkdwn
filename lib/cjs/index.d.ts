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
     * @returns converted HTML to Slack Mrkdwn
     */
    static convert(html: string): string;
}
