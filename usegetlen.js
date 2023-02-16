
/**
 * 
 * @param {String} id svg元素选择器
 * @param {Number} debug 输出查找的内容
 * @returns 返回指定元素的长度
 */
export const useGetLen = ({id,debug}) => {
    
    let res = []
    
    
    
    document.querySelectorAll(id).forEach((item)=>{
        res.push({
            nodelist:item,
            length:item.getTotalLength()
        })
    })
    
    
    if(debug){
        console.log("nodelist:",document.querySelectorAll(id))  
        console.log("Svg length")       
    }
     
    return res
}