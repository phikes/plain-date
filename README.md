# @phikes/plain-date

A Date subclass and implementation without time. Comptaible with date-fns helpers.

## Usage

```bash
npm install@phikes/plain-date
yarn add @phikes/plain-date
```

```typescript
// implements the Date interface and extends the Date class

new PlainDate()
new PlainDate(1992, 0, 22)
new PlainDate("1992-01-22")
new PlainDate(new Date())
PlainDate.fromString("1992-01-22")
PlainDate.fromDate(new Date())
// ...
plainDate.toString() // returns the date as ISO8601 formatted string without timestamp
// ...

// compatible with date-fns helpers
isToday(new PlainDate())
isBefore(new Date(), new PlainDate())
isBefore(new PlainDate(), new PlainDate())
isSameDay(new PlainDate(), new Date())
nextSaturday(new PlainDate())
addDays(new PlainDate(), 1)
// ...
```
