
export interface ArgumentHost {
    switchToHttp(): {
        getRequest<T>(): T 
        getResponse<T>(): T 
        getNext<T>(): T 
    }
}