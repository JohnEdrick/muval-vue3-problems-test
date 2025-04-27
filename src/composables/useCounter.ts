import { reactive, toRefs } from 'vue'
import type { MaybeRef } from 'vue'

export function useCounter(initial_value: MaybeRef<number> = 0) {
  const data = reactive({
    count: initial_value,
  })

  const increment = () => data.count++

  return { ...toRefs(data), increment }
  //Spreading reactive objects breaks reactivity.
  // So we use toRefs to convert the reactive object into a plain object with refs.
  // This way, the properties of the object will still be reactive when used in the template or in other parts of the code.
}
