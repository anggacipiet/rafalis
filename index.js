import { google } from 'googleapis';
import { marked } from 'marked';
import dotenv from 'dotenv';

dotenv.config();

const renderer = new marked.Renderer();

renderer.link = (href, title, text) =>
  `<a target="_blank" rel="noopener noreferrer" href="${href}" title="${title || ''}">${text}</a>`;

async function getProducts() {
  try {
    const scopes = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes
    );

    const sheets = google.sheets({ version: 'v4', auth: jwt });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `${process.env.SPREADSHEET_PAGE_NAME}`,
    });

    const rows = response.data.values;

    if (rows?.length) {
      /*return rows.map((row) => ({
        title: row[0],
        description: marked(row[1], { renderer }),
        price: marked(row[2], { renderer }),
        href: row[3] ?? '',
        imgHref: row[4] ?? '',
      }));*/
      const dataRows = rows.slice(1);
      return dataRows.map((row) => ({
        title: row[0],
        imgHref: row[1] ?? '',
      }))
    }
  } catch (err) {
    console.error(err);
  }

  return [];
}

getProducts().then((products) => {
  console.log(products);
});
