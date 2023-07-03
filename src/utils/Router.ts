import type Block from './Block'

export type BlockConstructable<P = any> = new(props: P) => Block

function isEqual (lhs: string, rhs: string): boolean {
    return lhs === rhs
}

function render (query: string, block: Block): Element {
    const root = document.querySelector(query)

    if (root === null) {
        throw new Error(`root not found by selector "${query}"`)
    }

    root.innerHTML = ''

    root.append(block.getContent()!)

    return root
}

class Route {
    private block: Block | null = null

    constructor (
        private readonly pathname: string,
        private readonly BlockClass: BlockConstructable,
        private readonly query: string) {
    }

    leave (): void {
        this.block = null
    }

    match (pathname: string): boolean {
        return isEqual(pathname, this.pathname)
    }

    render (): void {
        if (!this.block) {
            this.block = new this.BlockClass({})

            render(this.query, this.block)
        }
    }
}

export class Router {
    private static __instance: Router
    private readonly routes: Route[] = []
    private currentRoute: Route | null = null
    private readonly history = window.history

    constructor (private readonly rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance
        }

        this.routes = []

        Router.__instance = this
    }

    public use (pathname: string, block: BlockConstructable): Router {
        const route = new Route(pathname, block, this.rootQuery)
        this.routes.push(route)

        return this
    }

    public go (pathname: string): void {
        this.history.pushState({}, '', pathname)

        this._onRoute(pathname)
    }

    public back (): void {
        this.history.back()
    }

    public forward (): void {
        this.history.forward()
    }

    public start (): void {
        window.onpopstate = (event: PopStateEvent) => {
            const target = event.currentTarget as Window

            this._onRoute(target.location.pathname)
        }

        this._onRoute(window.location.pathname)
    }

    private _onRoute (pathname: string): void {
        const route = this.getRoute(pathname)

        if (route) {
            if (this.currentRoute && this.currentRoute !== route) {
                this.currentRoute.leave()
            }

            this.currentRoute = route

            route.render()
        } else {
            this._onRoute('/')
        }
    }

    private getRoute (pathname: string): Route | undefined {
        return this.routes.find(route => route.match(pathname))
    }
}

export default new Router('#app')
