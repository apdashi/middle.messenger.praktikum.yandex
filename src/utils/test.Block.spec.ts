import proxyquire from 'proxyquire'
import { expect } from 'chai'
import sinon from 'sinon'
import type BlockType from './Block'

const eventBusMock = {
    on: sinon.fake(),
    emit: sinon.fake()
}

const { default: Block } = proxyquire('./Block', {
    './EventBus': {
        EventBus: class {
            emit = eventBusMock.emit
            on = eventBusMock.on
        }
    }
}) as { default: typeof BlockType }

describe('Block', () => {
    class ComponentMock extends Block {}

    it('Должен диспатчить init событие после инициализации', () => {
        // eslint-disable-next-line no-new
        new ComponentMock({})

        expect(eventBusMock.emit.calledWith('init')).to.eq(true)
    })
})
