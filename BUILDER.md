# MAHAN visual content editor

The live site reads its editable copy from Builder model `mahan-content`.

## One-time Builder setup

1. In the MAHAN Builder space, open **Models** and create a **Data** model named
   `mahan-content`.
2. Add a **JSON** field named `copy` and create one entry targeted at `/`.
3. Paste the following object into that field, change any text you wish, and
   publish it:

```json
{
  "heroHeadline": "An independent studio for brands that refuse to blend in.",
  "heroLocation": "Shiraz, Fars — brand, space & digital",
  "imprintFirst": "One storm.",
  "imprintSecond": "Three words.",
  "imprintNote": "Most studios can give you one of these. Commission three of them from three suppliers and you get three different weathers. We run all three, so they arrive as one.",
  "workTitle": "Selected work",
  "workCount": "Four projects",
  "precipTitle": "What else has landed",
  "precipNote": "Shorter engagements, ongoing clients, and work that never needed a case study.",
  "studioStatement": "A small studio in Shiraz that would rather do three things for one client than one thing for thirty.",
  "contactTitle": "Tell us what you're building.",
  "contactNote": "Send the shape of it — the brand, the room, the site, or all three. Every enquiry is answered by the people who would do the work.",
  "contactLocation": "Shiraz, Fars — working everywhere",
  "footerCopyright": "© 2026 MAHAN Creative Studio"
}
```

After publishing in Builder, refresh the MAHAN site to see the live copy.
