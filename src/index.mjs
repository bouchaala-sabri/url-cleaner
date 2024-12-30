const paramsToRemove = [
    "utm_source", "utm_medium", "utm_campaign", "utm_expid", "utm_term",
    "utm_content", "utm_id", "utm_source_platform", "utm_creative_format",
    "utm_marketing_tactic", "mtm_source", "mtm_medium", "mtm_campaign",
    "mtm_keyword", "mtm_cid", "mtm_content", "pk_source", "pk_medium",
    "pk_campaign", "pk_keyword", "pk_cid", "pk_content", "fb_action_ids",
    "fb_action_types", "fb_source", "fbclid", "campaignid", "adgroupid",
    "adid", "gclid", "age-verified", "ao_noptimize", "usqp", "cn-reloaded",
    "_ga", "sscid", "gclsrc", "_gl", "mc_cid", "mc_eid", "_bta_tid", "_bta_c",
    "trk_contact", "trk_msg", "trk_module", "trk_sid", "gdfms", "gdftrk",
    "gdffi", "_ke", "_kx", "redirect_log_mongo_id", "redirect_mongo_id",
    "sb_referer_host", "mkwid", "pcrid", "ef_id", "s_kwcid", "msclkid", "dm_i",
    "epik", "pp", "gbraid", "wbraid", "ssp_iabi", "ssp_iaba", "gad", "vgo_ee",
    "gad_source", "srsltid"
];

/**
 * Cleans the given URL by removing unwanted query parameters.
 *
 * @param {string} url - The URL to be cleaned.
 * @returns {string} - The cleaned URL.
 * @throws {TypeError} - If the input is not a valid URL string.
 * @throws {Error} - If the URL could not be processed.
 */
export function cleanUrl(url) {
    if (typeof url !== "string") {
        throw new TypeError("Input must be a string representing a valid URL.");
    }

    let urlObj;
    try {
        urlObj = new URL(url);
    } catch (e) {
        throw new Error("Invalid URL provided. Please provide a valid URL string.");
    }

    try {
        paramsToRemove.forEach((param) => urlObj.searchParams.delete(param));
        return urlObj.toString();
    } catch (e) {
        throw new Error(`Failed to clean the URL: ${e.message}`);
    }
}

export default cleanUrl;
