/**
 * Alambagh Google Leads: receives form leads from the VLCC Alambagh landing page.
 * Columns: Time | Name | Phone | Course | Keyword | GCLID | Status
 *
 * Deploy > New deployment > Web app
 *   Execute as: Me
 *   Who has access: Anyone
 * After any edit: Deploy > Manage deployments > Edit > Version: New version > Deploy
 *
 * Keep SECRET the same as LEADS_SECRET in .env.local / Vercel. Do not commit the real value publicly.
 */

const SECRET = 'CHANGE-ME-same-as-LEADS_SECRET';
const SHEET_NAME = 'Leads';
const DEDUPE_HOURS = 24;

const HEADERS = ['Time', 'Name', 'Phone', 'Course', 'Keyword', 'GCLID', 'Status'];

const COURSE_NAMES = {
  makeup: 'Makeup Artist',
  parlour: 'Beautician / Parlour',
  hair: 'Hair Styling',
  nail: 'Nail Art',
  brand: 'Not sure yet',
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (data.secret !== SECRET) return json({ ok: false, error: 'unauthorised' });

    const sheet = getSheet();
    const phone = String(data.phone || '');

    // Same number again within 24 hours: do not add a second row
    const last = sheet.getLastRow();
    if (last > 1) {
      const from = Math.max(2, last - 300);
      const rows = sheet.getRange(from, 1, last - from + 1, 3).getValues();
      const cutoff = Date.now() - DEDUPE_HOURS * 3600 * 1000;
      for (const r of rows) {
        if (String(r[2]).replace(/\D/g, '') === phone && new Date(r[0]).getTime() > cutoff) {
          return json({ ok: true, duplicate: true });
        }
      }
    }

    sheet.appendRow([
      new Date(),
      String(data.name || ''),
      "'" + phone,
      COURSE_NAMES[data.course] || String(data.course || ''),
      String(data.keyword || ''),
      String(data.gclid || ''),
      'New',
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  ss.setSpreadsheetTimeZone('Asia/Kolkata');
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  }
  return sheet;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Run this once from the editor (select testLead > Run) to check the sheet works. */
function testLead() {
  const fake = {
    postData: {
      contents: JSON.stringify({
        secret: SECRET, name: 'Test Lead', phone: '9000000001',
        course: 'makeup', keyword: 'makeup course in lucknow', gclid: 'TEST',
      }),
    },
  };
  Logger.log(doPost(fake).getContent());
}
