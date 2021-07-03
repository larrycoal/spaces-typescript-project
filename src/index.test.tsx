import ReactDom from 'react-dom'
import React from "react"
import { Provider } from "react-redux"
import store from "./Store"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import userReducer from './Store/Reducer/userReducer'
import itemReducer from './Store/Reducer/itemReducer'
import data from './data.json'
import renderer from 'react-test-renderer'
import Item from './Components/Home/Item'
describe("App Component", () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div')
        document.body.appendChild(container)
        const AppTest = (
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider>
        )
        ReactDom.render(AppTest, container)
    })
    afterEach(() => {
        document.body.removeChild(container);
        container.remove()
    })

    it("Login renders correctly", () => {
        const input = document.querySelectorAll('input')
        const button = document.querySelectorAll('button')
        expect(input).toHaveLength(2)
        expect(input[0].type).toBe("text")
        expect(input[1].type).toBe("password")
        expect(button).toHaveLength(2)
       
    })
    it("renders item correctly",()=>{
        const item = renderer.create(<Provider store={store}><Item/></Provider>).toJSON()
        expect(item).toMatchSnapshot()
    })
   
   
})
describe("reducer",()=>{
    const initialState = {
        item:data,
        filterName:"All items"
    }
    it("return user reducer",()=>{
    let newUser = userReducer({isLoggedIn:false},{type:"login",payload:true})
    expect(newUser).toEqual({isLoggedIn:true})
    })
    it("should return items",()=>{
        let item = itemReducer(initialState,{type:"fetch-items",payload:{shape:[],color:[]}})
        expect(item).toEqual(initialState)
    })
})