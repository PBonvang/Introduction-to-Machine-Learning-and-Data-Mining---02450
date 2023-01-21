---
year: <% tp.date.weekday("YYYY",1) %>
month: <% tp.date.weekday("MM",1) %>
startDate: "<% tp.date.weekday("YYYY/MM/DD", 1) %>"
endDate: "<% tp.date.weekday("YYYY/MM/DD", 7) %>"
week: <% tp.user.getCurrentWeekNumber() %>
---

<%*
await tp.file.move("Personal/Weeklies/"+ tp.date.weekday("YYYY",1) + "-W" + tp.user.getCurrentWeekNumber());
-%>

****

 <p align="center">
	<font size="9"><strong><% tp.date.weekday("YYYY",1)%> - W<% tp.user.getCurrentWeekNumber() %></strong></font>
</p>

****
	
# Tasks due this week
```tasks
not done
due before <% tp.date.weekday("YYYY/MM/DD", 7) %>
path does not include Assignment
hide recurrence rule
```

# Current challenges
```tasks
not done
path includes Challenge board
heading includes Doing
hide backlink
```

# <% new Date(tp.date.weekday("YYYY/MM/DD", 1)).toDateString() %>

# <% new Date(tp.date.weekday("YYYY/MM/DD", 2)).toDateString() %>

# <% new Date(tp.date.weekday("YYYY/MM/DD", 3)).toDateString() %>

# <% new Date(tp.date.weekday("YYYY/MM/DD", 4)).toDateString() %>

# <% new Date(tp.date.weekday("YYYY/MM/DD", 5)).toDateString() %>

# <% new Date(tp.date.weekday("YYYY/MM/DD", 6)).toDateString() %>

# <% new Date(tp.date.weekday("YYYY/MM/DD", 7)).toDateString() %>