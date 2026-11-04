# Interior-page content source

`research-content.json` contains the copy supplied in **Compiled Sheet.pdf**
(attachment `3fe56f0d-7697-433f-8f78-d502c4e5ebfa`). Each entry records its
source PDF page range.

## Coverage

- All 11 solution pages
- 11 methodology pages
- All 13 industry pages
- All 6 data and fieldwork pages

The document does not provide standalone replacement copy for CLT, IHUT,
academic-research subpages, company pages or resource pages. Those existing
pages remain intact. The education-industry page includes the document's
education and academic-research content and links to the existing academic
research collection.

Only duplicate document labels, SEO drafting labels, a stray generated citation,
the instruction to add an academic website link, and PDF numbering/bullet
artifacts have been removed. Numbered services are rendered as cards or lists.
Meaningful qualifications, privacy requirements, consent conditions and
deliverable limitations are retained.

`research-summaries.json` is a lightweight title/headline projection used only by
interior collection cards. Keep it in sync with the full content; the content
tests check this relationship.

The approved homepage, shared catalog, header, footer, brand stylesheet,
cursor and research-philosophy behavior are deliberately unchanged.

Run content checks with:

```sh
node --test tests/research-content.test.mjs
```
