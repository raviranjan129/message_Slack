
export default function combineContext(...providers){
   /**
    * this combines multiple context provider together and returns a single context provider;
    */

return ({Children})=>{
    return providers.reduceRight((accumulator,Currentprovider)=>{
        return <Currentprovider>{accumulator}</Currentprovider>;
    } , Children);  /**initial value */
};

}

/**
 * <A>
 *   <B>
 *      <C>
 *         <D>
 *            {children}
 *            <D>
 *         <C>
 *     <B>
 * <A> 
 */

/**
 * <Combined>
 * {children}
 * <Combined>
 */