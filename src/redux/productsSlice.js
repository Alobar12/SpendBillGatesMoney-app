import { createSlice } from "@reduxjs/toolkit";


export const productsSlice=createSlice({
    name:"products",
    initialState:{
        items:[{name:"Big Mac",price:5,img:"https://www.afiyetola.com/wp-content/uploads/2021/02/McDonalds-Big-Mac.jpg"},{name:"Formula 1",price:150000000,img:"https://cdn-1.motorsport.com/images/amp/254B8MM0/s1000/red-bull-racing-2022-f1-car-1.jpg"},{name:"Computer",price:2000,img:"https://productimages.hepsiburada.net/s/53/375/11124859764786.jpg"}],
        money:100000000000,
        total:0,
        cart:[],
        number:0
    },
    reducers:{
        buyAProduct:(state,action)=>{
            const price=action.payload
            
            if(price===150000000){
                const name="Formula 1"
                state.cart=[...state.cart,{price:action.payload,name:name}]
            }
            if(price===5){
                const name="Big Mac"
                state.cart=[...state.cart,{price:action.payload,name:name}]
            }
            if(price===2000){
                const name="Computer"
                state.cart=[...state.cart,{price:action.payload,name:name}]
            }
            const mon=state.money-price;
            state.money=mon;
            console.log(state.cart)
            
            

        },
        sellAProduct:(state,action)=>{
            const price=action.payload;
            const index=state.cart.findIndex((item)=>item.price===price)
           
            if(index>-1){
                state.money+=price
            }
            
            const filtered=state.cart.findIndex((item)=>item.price===price)
            if(filtered>-1){
            state.cart.splice(filtered,1)
        }
        },
        
    },
    
    

})
export const {buyAProduct,sellAProduct}=productsSlice.actions;

export default productsSlice.reducer;