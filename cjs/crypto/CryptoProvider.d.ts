/**
 * Interface encapsulating the various crypto computations used by the library,
 * allowing pluggable underlying crypto implementations.
 *
 * Implementations can choose which methods they want to implement (eg. a
 * CryptoProvider can be used which only implements the asynchronous
 * versions of each crypto computation).
 */
export declare class CryptoProvider {
    /**
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */
    computeHMACSignature(payload: string, secret: string): string;
    /**
     * Asynchronous version of `computeHMACSignature`. Some implementations may
     * only allow support async signature computation.
     *
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */
    computeHMACSignatureAsync(payload: string, secret: string): Promise<string>;
    /**
     * Computes a SHA-256 hash of the data.
     */
    computeSHA256Async(data: Uint8Array): Promise<Uint8Array>;
}
/**
 * If the crypto provider only supports asynchronous operations,
 * throw CryptoProviderOnlySupportsAsyncError instead of
 * a generic error so that the caller can choose to provide
 * a more helpful error message to direct the user to use
 * an asynchronous pathway.
 */
export declare class CryptoProviderOnlySupportsAsyncError extends Error {
}
