/**
 * =====================================================================
 * WHATSAPP MEDIA SERVICE
 * =====================================================================
 * Resolves the `media` argument passed to sendTemplate() (or nothing,
 * falling back to a template's registry default) into the header media
 * reference the Graph API expects.
 *
 * Cloud API rule learned the hard way this session: IMAGE/VIDEO/DOCUMENT
 * header FORMATS always require the actual media reference at send
 * time - Meta's "example" media captured at template submission is
 * review-only and is never reused for real sends. Only a NONE (or plain
 * TEXT) header needs nothing supplied here.
 * =====================================================================
 */

/**
 * @param {{type: "NONE"|"IMAGE"|"VIDEO"|"DOCUMENT", defaultMediaUrl?: string}} [headerSpec] -
 *   from templateRegistry.js. Omitted for templates sendTemplate() doesn't
 *   have registry metadata for (ad-hoc admin sends of an arbitrary
 *   Meta-approved template).
 * @param {{type: "image"|"video"|"document", url: string}} [override] -
 *   per-send override (e.g. a specific campaign banner, or the only
 *   source of header info at all when headerSpec is absent).
 * @returns {{format: string, url: string}|null} null if there's no
 *   media header to attach.
 */
function resolve(headerSpec, override) {
  if (override?.url) {
    return { format: override.type.toUpperCase(), url: override.url };
  }
  if (!headerSpec || headerSpec.type === "NONE") return null;
  if (!headerSpec.defaultMediaUrl) {
    throw new Error(`Template header format is ${headerSpec.type} but no media URL was provided or registered as a default.`);
  }
  return { format: headerSpec.type.toUpperCase(), url: headerSpec.defaultMediaUrl };
}

module.exports = { resolve };
