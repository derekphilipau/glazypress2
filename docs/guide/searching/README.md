# Searching

Recipe and Material *metadata* consists of all descriptive information such as transparency, surface type, firing temperature, and color.  Because many of the recipes and materials in Glazy were imported from other databases, they may be missing such metadata.  When searching for glazes, it is best to use as few search parameters as possible in order not to "miss" or filter out a recipe or material.

## Tutorial Video

This short video describes how to search for recipes in Glazy:

<iframe width="640" height="360" src="https://www.youtube.com/embed/HAH-7QU-TM8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Keyword Search

Search for any recipes, materials or analyses that contain the keywords in *either* the **Name**, **Other Names**, or **Description** fields.

Search is case-insensitive, i.e. searching for *"Hamada"* is the same as searching for *"hamada"*.  Words less than 3 characters long are not searched.

Examples of keyword searches:

 * **"2967"**
 Because the search term is a number, search for any recipe or material ID's equal to "2967"
**OR** search for any items that have the string "2967" in the name or description.
 * **"Hamada Rust"**
 Search for the *exact phrase* "Hamada Rust" **OR** any item containing the words beginning with "Hamada" **AND** "Rust"
 * **"Ham Ru"**
 Search for the *exact phrase* "Ham Ru" **OR** any item containing the words beginning with "Ham" **AND** "Ru". This search will return the **Hamada Rust** recipe because it contains **both** the "Ham" and "Ru" strings.
 * **"Ham"**  Search for the *exact phrase* "Ham" **OR** any item containing the words beginning with "Ham".  This search will return items containing the words **"Hamada"**, **"Hamer"**, **"Hammer"**, etc.

## Color Search

### Dominant & Secondary Colors

![Dominant Color Search](./img/dominant.jpg)

The dominant color of an image is determined by Glazy during image upload.
In order to be more accurate, only the center of the image is searched for color.
When uploading glaze images, it is best if the center of the image is representative of the true glaze color.

### Searching By Color

![Color Picker](./img/colorpicker.png)

To search by color, simply click the eyedropper button in the search form.

The color search looks for similar colors in recipe photos.
The dominant color for a photo is determined automatically by Glazy.
In some cases, the dominant color may be incorrectly determined.

Alternatively, click one of the two color swatches in the search results.

![Color Swatches](./img/dominantsecondary.jpg)

## Clay and Glaze Types

In Glazy, you can filter by a clay or glaze types.

Please see [Clay & Glaze Types](/concepts/types/)


## Temperature & Cones

<a href="/concepts/temperature/">Temperature Equivalent Charts for Orton Cones</a>

Glazes are categorized by their Orton Cone firing temperature.

This is the ideal temperature at which the glaze recipe will mature.

In Glazy, Orton Cone is denoted by the △ character, e.g. △10.

Glazes may be recommended for a single Orton Cone or a range of cones,
for instance many high-fire glazes are listed as △9 - △10.

The terms "high-fire", "mid-fire" and "low-fire" are helpful categories that ceramicists use
to denote a firing temperature range.  The definition of these categories may vary.

In Glazy, the firing ranges are:
* **Low-fire: △022 - △3**
* **Mid-fire: △4 - △8**
* **High-fire: △9 - △14**
