<%*
await tp.file.move("Personal/Dailys/" + tp.file.title);
await tp.file.rename(tp.date.now("YYYY-MM-DD"));
-%>
# <% tp.date.now("YYYY-MM-DD") %>
## Tasks
### Tasks due this week
```tasks
not done
due before <% tp.date.weekday("YYYY/MM/DD", 7) %>
path does not include Assignment
hide recurrence rule
```

## Journal

## Current challenges
```tasks
not done
path includes Challenge board
heading includes Doing
hide backlink
```

## Notes of the today
```dataview
TABLE file.path as "Path" FROM "Zettlekasten"
WHERE 
	file.cday = date("<% tp.date.now("YYYY-MM-DD") %>")
```