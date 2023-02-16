# :shit: VUE获取SVG元素长度hooks

### 🔨安装 
```
npx degit https://github.com/kazawan/vue-getSvgLength.git [项目/src/hooks/[useSvgGetLen]]
```

### ⚙️使用
```
import { onMounted } from 'vue'
import { useGetLen } from './hooks/SvgGetLen/getlen'
onMounted(() => {
   len.value = useGetLen({
    id: '#c1',
    debug:1
   })[0].length;
})
```
