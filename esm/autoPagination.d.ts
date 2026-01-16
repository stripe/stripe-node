import { MethodSpec, RequestArgs, StripeResourceObject } from './Types.js';
type IterationDoneCallback = () => void;
type IterationItemCallback<T> = (item: T, next: any) => void | boolean | Promise<void | boolean>;
type AutoPagingEach<T> = (onItem: IterationItemCallback<T>, onDone?: IterationDoneCallback) => Promise<void>;
type AutoPagingToArrayOptions = {
    limit?: number;
};
type AutoPagingToArray<T> = (opts: AutoPagingToArrayOptions, onDone: IterationDoneCallback) => Promise<Array<T>>;
type AutoPaginationMethods<T> = {
    autoPagingEach: AutoPagingEach<T>;
    autoPagingToArray: AutoPagingToArray<T>;
    next: () => Promise<IteratorResult<T>>;
    return: () => void;
};
type PageResult<T> = {
    data: Array<T>;
    has_more: boolean;
    next_page?: string | null;
    next_page_url?: string | null;
};
export declare const makeAutoPaginationMethods: <TMethodSpec extends MethodSpec, TItem extends {
    id: string;
}>(stripeResource: StripeResourceObject, requestArgs: RequestArgs, spec: TMethodSpec, firstPagePromise: Promise<PageResult<TItem>>) => AutoPaginationMethods<TItem> | null;
export {};
