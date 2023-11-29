import type {Emitter} from 'mitt'
import mitt from 'mitt' 

export type FlashPayload = { color: string, message: string }

// 使用 symbol 作为事件名称
export const FLASH_EVENT = Symbol("flashMessage")


// 定义事件类型映射
export type Events = {
  [FLASH_EVENT]: FlashPayload;
};

export const emitter: Emitter<Events>= mitt<Events>();
