export class PlainDate extends Date implements Date {
  static ISO8601DateFormat = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
  private _year = new Date().getFullYear()
  private _month = new Date().getMonth()
  private _day = new Date().getDate()

  get year(): number {
    return this._year
  }

  get month(): number { // 0 based, same as js dates
    return this._month
  }

  get day(): number {
    return this._day
  }

  constructor();
  constructor(value: number | string | Date);
  constructor(year: number, month: number, day?: number);
  constructor(valueOrYear?: number | string | Date, month?: number, day?: number) {
    super()

    if (typeof valueOrYear === "number" && typeof month === "number") {
      this._year = valueOrYear
      this._month = month
      this._day = day ?? 1

      return this
    } else if (typeof valueOrYear === "string" && typeof month === "undefined" && typeof day === "undefined") {
      return PlainDate.fromString(valueOrYear)
    } else if (valueOrYear instanceof Date && typeof month === "undefined" && typeof day === "undefined") {
      return PlainDate.fromDate(valueOrYear)
    } else if (typeof valueOrYear === "number" && typeof month === "undefined" && typeof day === "undefined") {
      const plainDate = new PlainDate()

      plainDate.setTime(valueOrYear)

      return plainDate
    }

    return PlainDate.fromDate(new Date())
  }

  static parse(dateString: string): number {
    return new PlainDate(Date.parse(dateString)).getTime()
  }

  static fromDate(date: Date): PlainDate {
    return new PlainDate(date.getFullYear(), date.getMonth(), date.getDate())
  }

  static fromString(dateString: string): PlainDate {
    const { year, month, day } = dateString.match(PlainDate.ISO8601DateFormat)?.groups ?? {}
    if (!year || !month || !day) return new PlainDate(NaN)

    return new PlainDate(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10))
  }

  [Symbol.toPrimitive](hint: "default"): string;
  [Symbol.toPrimitive](hint: "string"): string;
  [Symbol.toPrimitive](hint: "number"): number;
  [Symbol.toPrimitive](hint: string): string | number;
  [Symbol.toPrimitive](hint: string): string | number {
    if (hint === "string") return this.toString()
    if (hint === "number") return this.getTime()

    throw new TypeError(`Invalid hint: ${hint}`)
  }

  valueOf(): number {
    return this.getTime()
  }

  toString(): string {
    return `${this.year.toString().padStart(4, "0")}-${(this.month + 1).toString().padStart(2, "0")}-${this.day.toString().padStart(2, "0")}`
  }

  toDateString(): string {
    return this.toString()
  }

  toTimeString(): string {
    return ""
  }

  toLocaleDateString(): string {
    return new Date(this.year, this.month, this.day).toLocaleDateString()
  }

  toLocaleTimeString(): string {
    return ""
  }

  getTime(): number {
    return new Date(this.year, this.month, this.day).getTime()
  }

  getFullYear(): number {
    return this.year
  }
  getUTCFullYear = this.getFullYear

  getMonth(): number {
    return this.month
  }
  getUTCMonth = this.getMonth

  getDate(): number {
    return this.day
  }
  getUTCDate = this.getDate

  getDay(): number {
    return new Date(this.year, this.month, this.day).getDay()
  }
  getUTCDay = this.getDay

  getNaN(): number {
    return NaN
  }

  getHours = this.getNaN
  getUTCHours = this.getNaN
  getMinutes = this.getNaN
  getUTCMinutes = this.getNaN
  getSeconds = this.getNaN
  getUTCSeconds = this.getNaN
  getMilliseconds = this.getNaN
  getUTCMilliseconds = this.getNaN

  getTimezoneOffset(): number {
    return 0
  }

  setTime(msSinceEpoch: number): number {
    const helperDate = new Date(msSinceEpoch)

    this._year = helperDate.getFullYear()
    this._month = helperDate.getMonth()
    this._day = helperDate.getDate()

    return this.getTime()
  }

  setMilliseconds(_ms: number): number {
    return this.getMilliseconds()
  }
  setUTCMilliseconds = this.setMilliseconds

  setSeconds(_s: number): number {
    return this.getSeconds()
  }
  setUTCSeconds = this.setSeconds

  setMinutes(_min: number): number {
    return this.getMinutes()
  }
  setUTCMinutes = this.setMinutes

  setHours(_h: number): number {
    return this.getHours()
  }
  setUTCHours = this.setHours

  setDate(date: number): number {
    const helperDate = new Date(this.getTime())
    helperDate.setDate(date)

    this.assignFromDate(helperDate)

    return this.getTime()
  }
  setUTCDate = this.setDate

  setMonth(month: number, date?: number): number {
    const helperDate = new Date(this.getTime())
    helperDate.setMonth(month, date ?? helperDate.getDate())

    this.assignFromDate(helperDate)

    return this.getTime()
  }
  setUTCMonth = this.setMonth

  setFullYear(year: number, month?: number, date?: number): number {
    const helperDate = new Date(this.getTime())

    helperDate.setFullYear(year, month ?? helperDate.getMonth(), date ?? helperDate.getDate())
    this.assignFromDate(helperDate)

    return this.getTime()
  }
  setUTCFullYear = this.setFullYear

  toUTCString(): string {
    return this.toString()
  }

  toISOString(): string {
    return this.toString()
  }

  toJSON(_key?: any): string {
    return this.toString()
  }

  protected assignFromDate(date: Date): void {
    this._day = date.getDate()
    this._month = date.getMonth()
    this._year = date.getFullYear()
  }
}
