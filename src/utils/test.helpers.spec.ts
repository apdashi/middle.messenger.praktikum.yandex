import { expect } from 'chai'
import { set } from './helpers'

describe('helpers', () => {
    describe('set function', () => {
        const keyPath = 'someKey'
        const value = 'someValue'
        let obj: Record<string, any>

        beforeEach(() => {
            obj = {}
        })

        it('Должен установить значение в объект по переданому пути', () => {
            set(obj, keyPath, value)
            expect(obj).to.haveOwnProperty(keyPath, value)
        })

        it('Должен установить значение в объект по переданому пути', () => {
            // Arrange
            const expectedObj = {
                a: 1,
                b: 2,
                c: {
                    d: 3
                }
            }

            // Act
            set(obj, 'a', 1)
            set(obj, 'b', 2)
            set(obj, 'c.d', 3)

            // Assert
            const stringObject = JSON.stringify(obj)
            const expectedObject = JSON.stringify(expectedObj)
            expect(stringObject).to.be.eq(expectedObject)
        })

        it('Должен установить значение в объект по переданому пути c вложениями', () => {
            const keyPathParent = 'a'
            const keyPathChildren = 'b'
            set(obj, `${keyPathParent}.${keyPathChildren}`, value)

            // Assert
            expect(obj[keyPathParent]).to.haveOwnProperty(keyPathChildren, value)
        })

        it('Должна вернуть оригинальный объект', () => {
            const result = set(obj, keyPath, value)
            expect(obj).to.be.eq(result)
        })

        it('Должна вернуть тоже значение если объект не объект ', () => {
            const notObj = ''
            const result = set(notObj, keyPath, value)
            expect(notObj).to.be.eq(result)
        })

        it('Должна выбросить ошибку если путь не строка', () => {
            // @ts-expect-error
            expect(() => set(obj, 123123, value)).to.throw(Error)
        })
    })
})
