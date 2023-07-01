import { set } from './helpers'
import { EventBus } from './EventBus'
import type Block from './Block'
import { type User } from '../api/auth'
import { type ChatInfo } from '../api/chats'
import { type Message } from '../controllers/messages'

export enum StoreEvents {
    Updated = 'updated'
}

interface State {
    user: User
    chats: ChatInfo[]
    messages: Record<number, Message[]>
    selectedChat?: number
    usersChat: Record<number, User[]>
}

export class Store extends EventBus {
    private readonly state: any = {}

    public set (keypath: string, data: unknown): void {
        set(this.state, keypath, data)

        this.emit(StoreEvents.Updated, this.getState())
    }

    public getState (): any {
        return this.state
    }
}

const store = new Store()

window.store = store

export function withStore<SP> (mapStateToProps: (state: State) => SP) {
    return function wrap<P> (Component: typeof Block<SP & P>) {
        return class WithStore extends Component {
            constructor (props: Omit<P, keyof SP>) {
                let previousState = mapStateToProps(store.getState())

                super({ ...(props as P), ...previousState })

                store.on(StoreEvents.Updated, () => {
                    const stateProps = mapStateToProps(store.getState())

                    previousState = stateProps

                    this.setProps({ ...stateProps })
                })
            }
        }
    }
}

export default store
