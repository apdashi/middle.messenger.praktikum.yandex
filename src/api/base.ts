import HTTPTransport from '../utils/HTTPTransport'

export default abstract class Base {
    protected http: HTTPTransport

    protected constructor (endpoint: string) {
        this.http = new HTTPTransport(endpoint)
    }
}
