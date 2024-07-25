import { PlainDate } from "./PlainDate"

describe(PlainDate, () => {
  describe("constructor", () => {
    it("constructs PlainDate instances", () => {
      expect(new PlainDate()).toMatchObject({
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
      })

      expect(new PlainDate("1992-01-22")).toMatchObject({
        year: 1992,
        month: 0,
        day: 22
      })

      expect( new PlainDate(0)).toMatchObject({
        year: 1970,
        month: 0,
        day: 1
      })

      expect(new PlainDate(1994, 1)).toMatchObject({
        year: 1994,
        month: 1,
        day: 1
      })

      expect(new PlainDate(1994, 1, 2)).toMatchObject({
        year: 1994,
        month: 1,
        day: 2
      })

      const date = new Date(1992, 0, 22, 1, 2, 3, 4)

      expect(new PlainDate(date)).toMatchObject({
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate(),
      })
    })
  })

  describe("static fromDate", () => {
    it("returns a PlainDate with the right attributes", () => {
      expect(PlainDate.fromDate(new Date(1992, 0, 22, 12, 23, 34))).toMatchObject({ year: 1992, month: 0, day: 22 })
    })
  })

  describe("static fromString", () => {
    it("parses date strings", () => {
      expect(PlainDate.fromString("1992-01-22")).toEqual(new PlainDate(1992, 0, 22))
      expect(PlainDate.fromString("1992-01-22T14:00")).toEqual(new PlainDate(1992, 0, 22))
    })

    it("throws an error when incorrect date string is given", () => {
      expect(() => PlainDate.fromString("abc")).toThrow()
    })
  })

  describe("valueOf", () => {
    it("returns milliseconds until beginning of the day", () => {
      expect(new PlainDate(1992, 0, 22).valueOf()).toEqual(new Date(1992, 0, 22).getTime())
    })
  })

  describe("toString", () => {
    it("returns the ISO8601 string representation", () => {
      expect(new PlainDate(1992, 0, 22).toString()).toEqual("1992-01-22")
      expect(new PlainDate(1992, 10, 22).toString()).toEqual("1992-11-22")
    })
  })

  describe("toDateString", () => {
    it("calls toString", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      expect(plainDate.toString()).toEqual(plainDate.toDateString())
    })
  })

  describe("toTimeString", () => {
    it("returns empty string", () => {
      expect(new PlainDate().toTimeString()).toEqual("")
    })
  })

  describe("toLocaleDateString", () => {
    it("returns the right locale date string", () => {
      expect(new PlainDate(1992, 0, 22).toLocaleDateString()).toEqual("1/22/1992")
    })
  })

  describe("toLocaleTimeString", () => {
    it("returns empty string", () => {
      expect(new PlainDate().toLocaleTimeString()).toEqual("")
    })
  })

  describe("getTime", () => {
    it("returns milliseconds until beginning of the day", () => {
      expect(new PlainDate(1992, 0, 22).getTime()).toEqual(new Date(1992, 0, 22).getTime())
    })
  })

  describe("getFullYear", () => {
    it("returns the year", () => {
      expect(new PlainDate(1992, 0, 22).getFullYear()).toEqual(1992)
    })
  })

  describe("getUTCFullYear", () => {
    it("returns the year", () => {
      expect(new PlainDate(1992, 0, 22).getUTCFullYear()).toEqual(1992)
    })
  })

  describe("getMonth", () => {
    it("returns the month", () => {
      expect(new PlainDate(1992, 0, 22).getMonth()).toEqual(0)
    })
  })

  describe("getUTCMonth", () => {
    it("returns the month", () => {
      expect(new PlainDate(1992, 0, 22).getUTCMonth()).toEqual(0)
    })
  })

  describe("getDate", () => {
    it("returns the day of the month", () => {
      expect(new PlainDate(1992, 0, 22).getDate()).toEqual(22)
    })
  })

  describe("getUTCDate", () => {
    it("returns the day of the month", () => {
      expect(new PlainDate(1992, 0, 22).getUTCDate()).toEqual(22)
    })
  })

  describe("getDay", () => {
    it("returns the day of the week", () => {
      expect(new PlainDate(1992, 0, 22).getDay()).toEqual(3)
    })
  })

  describe("getUTCDay", () => {
    it("returns the day of the week", () => {
      expect(new PlainDate(1992, 0, 22).getUTCDay()).toEqual(3)
    })
  })

  describe("getMinutes", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).getMinutes()).toEqual(-1)
    })
  })

  describe("getUTCMinutes", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).getUTCMinutes()).toEqual(-1)
    })
  })

  describe("getHours", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).getHours()).toEqual(-1)
    })
  })

  describe("getUTCHours", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).getUTCHours()).toEqual(-1)
    })
  })

  describe("getSeconds", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).getSeconds()).toEqual(-1)
    })
  })

  describe("getUTCSeconds", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).getUTCSeconds()).toEqual(-1)
    })
  })

  describe("getMilliseconds", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).getMilliseconds()).toEqual(-1)
    })
  })

  describe("getUTCMilliseconds", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).getUTCMilliseconds()).toEqual(-1)
    })
  })

  describe("getTimezoneOffset", () => {
    it("returns 0", () => {
      expect(new PlainDate(1992, 0, 22).getTimezoneOffset()).toEqual(0)
    })
  })

  describe("setTime", () => {
    it("returns the milliseconds until beginning of the day described by the parameter", () => {
      expect(new PlainDate().setTime(new Date(1992, 0, 22, 12, 23, 34).getTime())).toEqual(new Date(1992, 0, 22).getTime())
    })

    it("sets the date to the beginning of the day described by the parameter", () => {
      const plainDate = new PlainDate()

      plainDate.setTime(new Date(1992, 0, 22, 12, 23, 34).getTime())

      expect(plainDate).toEqual(new PlainDate(1992, 0, 22))
    })
  })

  describe("setMilliseconds", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).setMilliseconds(123)).toEqual(-1)
    })
  })

  describe("setUTCMilliseconds", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).setUTCMilliseconds(456)).toEqual(-1)
    })
  })

  describe("setSeconds", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).setSeconds(123)).toEqual(-1)
    })
  })

  describe("setUTCSeconds", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).setUTCSeconds(456)).toEqual(-1)
    })
  })

  describe("setMinutes", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).setMinutes(123)).toEqual(-1)
    })
  })

  describe("setUTCMinutes", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).setUTCMinutes(456)).toEqual(-1)
    })
  })

  describe("setHours", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).setHours(123)).toEqual(-1)
    })
  })

  describe("setUTCHours", () => {
    it("returns -1", () => {
      expect(new PlainDate(1992, 0, 22).setUTCHours(456)).toEqual(-1)
    })
  })

  describe("setDate", () => {
    it("returns the day", () => {
      expect(new PlainDate(1992, 0, 22).setDate(1)).toEqual(1)
    })

    it("sets the day", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setDate(1)

      expect(plainDate.day).toEqual(1)
    })
  })

  describe("setUTCDate", () => {
    it("returns the day", () => {
      expect(new PlainDate(1992, 0, 22).setUTCDate(1)).toEqual(1)
    })

    it("sets the day", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setUTCDate(1)

      expect(plainDate.day).toEqual(1)
    })
  })

  describe("setMonth", () => {
    it("returns the month", () => {
      expect(new PlainDate(1992, 0, 22).setMonth(1)).toEqual(1)
    })

    it("sets the month", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setMonth(1)

      expect(plainDate.month).toEqual(1)
    })
  })

  describe("setUTCMonth", () => {
    it("returns the month", () => {
      expect(new PlainDate(1992, 0, 22).setUTCMonth(1)).toEqual(1)
    })

    it("sets the month", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setUTCMonth(1)

      expect(plainDate.month).toEqual(1)
    })
  })

  describe("setFullYear", () => {
    it("returns the year", () => {
      expect(new PlainDate(1992, 0, 22).setFullYear(1993)).toEqual(1993)
    })

    it("sets the year", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setFullYear(1993)

      expect(plainDate.year).toEqual(1993)
    })
  })

  describe("setUTCFullYear", () => {
    it("returns the year", () => {
      expect(new PlainDate(1992, 0, 22).setUTCFullYear(1993)).toEqual(1993)
    })

    it("sets the year", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setUTCFullYear(1993)

      expect(plainDate.year).toEqual(1993)
    })
  })

  describe("toUTCString", () => {
    it("returns the ISO8601 string representation", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      expect(plainDate.toUTCString()).toEqual(plainDate.toString())
    })
  })

  describe("toISOString", () => {
    it("returns the ISO8601 string representation", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      expect(plainDate.toISOString()).toEqual(plainDate.toString())
    })
  })

  describe("toJSON", () => {
    it("returns the ISO8601 string representation", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      expect(plainDate.toJSON()).toEqual(plainDate.toString())
    })
  })

  describe("[Symbol.toPrimitive]", () => {
    it("returns a fitting primitive representation", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      expect(plainDate[Symbol.toPrimitive]("string")).toEqual(plainDate.toString())
      expect(plainDate[Symbol.toPrimitive]("number")).toEqual(plainDate.getTime())
    })

    it("throws a type error with invalid hints", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      expect(() => plainDate[Symbol.toPrimitive]("boolean")).toThrow()
      expect(() => plainDate[Symbol.toPrimitive]("bigint")).toThrow()
      expect(() => plainDate[Symbol.toPrimitive]("undefined")).toThrow()
      expect(() => plainDate[Symbol.toPrimitive]("null")).toThrow()
      expect(() => plainDate[Symbol.toPrimitive]("symbol")).toThrow()
    })
  })
})
