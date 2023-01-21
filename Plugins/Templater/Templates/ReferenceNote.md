---
aliases: [] # Searchable synonyms and translations
---
<%*
await tp.file.move("Zettlekasten/Library/" + tp.file.title);
-%>
Created: `$= dv.current().file.ctime`
Modified: `$= dv.current().file.mtime`
Tags: [#Reference]
Subjects: 
****

 <p align="center">
	<font size="9"><strong><% tp.file.title %></strong></font>
</p>

****

**Link:**

# Related notes
```dataview
LIST
FROM "" WHERE contains(file.outlinks.file.name, "<% tp.file.title %>")
SORT file.name ASC
```