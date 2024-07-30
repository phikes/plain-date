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

      expect( new PlainDate(NaN)).toMatchObject({
        year: NaN,
        month: NaN,
        day: NaN
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

    it("returns an invalid date when string cannot be parsed", () => {
      expect(PlainDate.fromString("abc")).toMatchObject({
        year: NaN,
        month: NaN,
        day: NaN
      })
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
    it("is getFullYear", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getUTCFullYear).toEqual(plainDate.getFullYear)
    })
  })

  describe("getMonth", () => {
    it("returns the month", () => {
      expect(new PlainDate(1992, 0, 22).getMonth()).toEqual(0)
    })
  })

  describe("getUTCMonth", () => {
    it("is getMonth", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getUTCMonth).toEqual(plainDate.getMonth)
    })
  })

  describe("getDate", () => {
    it("returns the day of the month", () => {
      expect(new PlainDate(1992, 0, 22).getDate()).toEqual(22)
    })
  })

  describe("getUTCDate", () => {
    it("is getDate", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getUTCDate).toEqual(plainDate.getDate)
    })
  })

  describe("getDay", () => {
    it("returns the day of the week", () => {
      expect(new PlainDate(1992, 0, 22).getDay()).toEqual(3)
    })
  })

  describe("getUTCDay", () => {
    it("is getDay", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getUTCDay).toEqual(plainDate.getDay)
    })
  })

  describe("getNaN", () => {
    it("returns NaN", () => {
      expect(new PlainDate(1992, 0, 22).getNaN()).toEqual(NaN)
    })
  })

  describe("getMinutes", () => {
    it("is getNaN", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getMinutes).toEqual(plainDate.getNaN)
    })
  })

  describe("getUTCMinutes", () => {
    it("is getNaN", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getUTCMinutes).toEqual(plainDate.getNaN)
    })
  })

  describe("getHours", () => {
    it("is getNaN", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getHours).toEqual(plainDate.getNaN)
    })
  })

  describe("getUTCHours", () => {
    it("is getNaN", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getUTCHours).toEqual(plainDate.getNaN)
    })
  })

  describe("getSeconds", () => {
    it("is getNaN", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getSeconds).toEqual(plainDate.getNaN)
    })
  })

  describe("getUTCSeconds", () => {
    it("is getNaN", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getUTCSeconds).toEqual(plainDate.getNaN)
    })
  })

  describe("getMilliseconds", () => {
    it("is getNaN", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getMilliseconds).toEqual(plainDate.getNaN)
    })
  })

  describe("getUTCMilliseconds", () => {
    it("is getNaN", () => {
      const plainDate = new PlainDate()

      expect(plainDate.getUTCMilliseconds).toEqual(plainDate.getNaN)
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
    it("returns NaN", () => {
      expect(new PlainDate(1992, 0, 22).setMilliseconds(123)).toEqual(NaN)
    })
  })

  describe("setUTCMilliseconds", () => {
    it("is setMilliseconds", () => {
      const plainDate = new PlainDate()

      expect(plainDate.setUTCMilliseconds).toEqual(plainDate.setMilliseconds)
    })
  })

  describe("setSeconds", () => {
    it("returns NaN", () => {
      expect(new PlainDate(1992, 0, 22).setSeconds(123)).toEqual(NaN)
    })
  })

  describe("setUTCSeconds", () => {
    it("is setSeconds", () => {
      const plainDate = new PlainDate()

      expect(plainDate.setUTCSeconds).toEqual(plainDate.setSeconds)
    })
  })

  describe("setMinutes", () => {
    it("returns NaN", () => {
      expect(new PlainDate(1992, 0, 22).setMinutes(123)).toEqual(NaN)
    })
  })

  describe("setUTCMinutes", () => {
    it("is setMinutes", () => {
      const plainDate = new PlainDate()

      expect(plainDate.setUTCMinutes).toEqual(plainDate.setMinutes)
    })
  })

  describe("setHours", () => {
    it("returns NaN", () => {
      expect(new PlainDate(1992, 0, 22).setHours(123)).toEqual(NaN)
    })
  })

  describe("setUTCHours", () => {
    it("is setHours", () => {
      const plainDate = new PlainDate()

      expect(plainDate.setUTCHours).toEqual(plainDate.setHours)
    })
  })

  describe("setDate", () => {
    it("returns the ms since epoch", () => {
      expect(new PlainDate(1992, 0, 22).setDate(1)).toEqual(new Date(1992, 0, 1).getTime())
    })

    it("sets the day", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setDate(1)

      expect(plainDate.day).toEqual(1)
    })
  })

  describe("setUTCDate", () => {
    it("is setDate", () => {
      const plainDate = new PlainDate()

      expect(plainDate.setUTCDate).toEqual(plainDate.setDate)
    })
  })

  describe("setMonth", () => {
    it("returns the ms since epoch", () => {
      expect(new PlainDate(1992, 0, 22).setMonth(1)).toEqual(new Date(1992, 1, 22).getTime())
    })

    it("sets the month", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setMonth(1)

      expect(plainDate.month).toEqual(1)
    })

    it("sets the month and date", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setMonth(1, 2)

      expect(plainDate.month).toEqual(1)
      expect(plainDate.day).toEqual(2)
    })
  })

  describe("setUTCMonth", () => {
    it("is setMonth", () => {
      const plainDate = new PlainDate()

      expect(plainDate.setUTCMonth).toEqual(plainDate.setMonth)
    })
  })

  describe("setFullYear", () => {
    it("returns the ms since epoch", () => {
      expect(new PlainDate(1992, 0, 22).setFullYear(1993)).toEqual(new Date(1993, 0, 22).getTime())
      expect(new PlainDate(1992, 0, 22).setFullYear(1993, 1)).toEqual(new Date(1993, 1, 22).getTime())
      expect(new PlainDate(1992, 0, 22).setFullYear(1993, 1, 2)).toEqual(new Date(1993, 1, 2).getTime())
    })

    it("sets the year", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setFullYear(1993)

      expect(plainDate.year).toEqual(1993)
    })

    it("sets the year and month", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setFullYear(1993, 1)

      expect(plainDate.year).toEqual(1993)
      expect(plainDate.month).toEqual(1)
    })

    it("sets the year, month and date", () => {
      const plainDate = new PlainDate(1992, 0, 22)

      plainDate.setFullYear(1993, 1, 23)

      expect(plainDate.year).toEqual(1993)
      expect(plainDate.month).toEqual(1)
      expect(plainDate.day).toEqual(23)
    })
  })

  describe("setUTCFullYear", () => {
    it('is toFullYear', () => {
      const plainDate = new PlainDate()

      expect(plainDate.setFullYear).toEqual(plainDate.setFullYear)
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
