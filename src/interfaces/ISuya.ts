import { IMiddlewareFunction } from './IMiddlewareFunction'

/**
 * @interface ISuya
 */
export interface ISuya {
  /** Suya forever. */
  forever(): IMiddlewareFunction
  /** Suya duration. */
  duration(n: number): IMiddlewareFunction
  /** Suya resetOnMutate. */
  resetOnMutate(options: any): IMiddlewareFunction
}
